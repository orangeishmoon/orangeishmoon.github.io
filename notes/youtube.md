---
title: On Youtube
layout: note.njk
---

Looking through Kagi's Small Web, I got to read on [theoo's experience with ditching Youtube](https://theoo.dev/notes/16), and I want to share my own experience of going away from YouTube

Unlike them, I haven't completely stopped myself from watching videos - I see that as too drastic. You can't just get away from it after it's been your main time killer. But I did recognize the "danger" of recommendations. My thinking of that coincided with me considering what else should I install on my home server, so I found [TubeArchivist](https://www.tubearchivist.com/) - a service that automatically downloads videos

But for that to work you have to first put some feeds into it - playlists or channels, and with how good recommendations are (and that's why they are dangerous), I haven't actually subscribed to the channels I tend to watch, so there was no easy way to make a feed of my own. I've mediated that by exporting my watch history from [Google Takeout](https://takeout.google.com/) and using a script that would filter for channels which videos I've watched at least twice during the last few years. That led me to a pretty representative feed, and I didn't have to add or remove many channels on my own (one notable example is removing IGN - I don't want to watch it, but I've watched a fair few of game trailers; and GDQ - not interested in all the games shown, and it takes way too much space)

Default settings of TA are actually pretty okay, but I did disable download of streams and shorts by settings the page size to 0, and set the video page size to 5 - I don't have the space to download that much of backlog

I am pretty proud of the download format I've come up with, here it is in the entirety (excuse the text spilling out, I can't figure out the styling for code blocks yet):

```
bestvideo[height<=?1000][format_note!*=?AI-upscaled]+bestaudio[format_note!*=?AI-upscaled][format_note*=?original]/bestvideo[height<=?1000][format_note!*=?AI-upscaled]+bestaudio[format_note!*=?AI-upscaled]/best[height<=?1000][format_note!*=?AI-upscaled]
```

It downloads at most 720p, not upscaled, not voiced over

But to be level with you, it's still a lot of videos to sink into, still enough to fill up the free time most of the days. For that I don't have a solution. Maybe gradually remove channels that matter less, until you can run out of videos for a day or two