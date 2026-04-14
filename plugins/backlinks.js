
import {JSDOM} from "jsdom"

const hostname = "example.com";
const cache = {};

/**
 * Extract links from html, not including hash parts
 */
function getLinks(html) {
    if (cache[html]) {
        return cache[html];
    }

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const result = new Set([...document.querySelectorAll("a[href]")]
        .map(x => {
            let href = x.getAttribute("href");
            return href;

            // Normalise internal links
            const url = new URL(href, `https://${hostname}`);
            if (url.hostname == hostname) {
                return url.pathname;
            }


            url.hash = "";
            return url.toString();
        }));
    cache[html] = result;
    return result;
}

export default (eleventyConfig) => {
    eleventyConfig.addFilter("links_to", async function(collection, target) {
        return collection.filter(item => getLinks(item.content).has(target));
    });
};