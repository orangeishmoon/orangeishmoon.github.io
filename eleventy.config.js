import pluginBacklinks from "./plugins/backlinks.js";

export default function (eleventyConfig) {
  eleventyConfig.setOutputDirectory("docs");
  eleventyConfig.addPlugin(pluginBacklinks);
  eleventyConfig.addPassthroughCopy("assets/**");
  eleventyConfig.addGlobalData("layout", "default.njk");

  // Set global permalinks to resource.html style
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) =>
      `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  // Remove .html from `page.url`
  eleventyConfig.addUrlTransform((page) => {
    if (page.url.endsWith(".html")) {
      return page.url.slice(0, -1 * ".html".length);
    }
  });
};

