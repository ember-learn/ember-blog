---
title: How to Make a Map in Ember
author: Matt Gardner
tags: 2019, Addons, DecEmber
alias: 2019-12-21-how-to-make-a-geographic-map-in-ember.md
responsive: true
---

Have you ever wondered how to _make maps in Ember_? Well you're in luck... this post is about adding an interactive map
to your Ember project. By the end of this post, you'll have a map of the location of your company's business!

(Note: I'm not talking about [these kinds of maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), although they're not totally unrelated). 

Every time I need to solve a problem in Ember, I do a quick search through the Ember addon ecosystem.
Yes, it's satisfying to solve the problem yourself, but it's smarter——and quicker——to use someone else's code.
Now, web mapping is a pretty complicated suite of technologies, so the temptation to reinvent _that_ wheel isn't as strong as,
say, [building your own file uploader](https://emberobserver.com/?query=file%20upload).

A cursory glance at the available mapping addons pull up a few options:
 - [ember-mapbox-gl](https://github.com/kturney/ember-mapbox-gl) (Full disclosure: I'm a contributor!)
 - [ember-leaflet](https://github.com/miguelcobain/ember-leaflet)
 - [ember-google-maps](https://github.com/sandydoo/ember-google-maps)
 
Am I missing any? Let me know. But I'm pretty confident these are the top mapping addons.

How do they work? They all have a one thing in common: declarative templating. Most of the mapping objects you see on screen
are managed using template components and helper invocations:

```
{{#mapbox-gl class='map-container' initOptions=(hash pitch=30) as |map|}}
  {{#map.source options=(hash type='geojson' data=markerData) as |source|}}
    {{source.layer layer=(hash
      type='circle'
      paint=(hash circle-color='#007cbf' circle-radius=10))}}
  {{/map.source}}
{{/mapbox-gl}}
```

This makes for a pretty nice experience, especially in terms of long-run maintainence because the visual aspects of
your application "map" (ugh) to a specific part of the template file. 

(What the alternative be? I've seen some wild spaghetti monsters and they are not pleasant to deal with because they
do not encapsulate _lifecycle management_).

So, I'm biased because I really only use ember-mapbox-gl. It's powered by WebGL. That means that the graphical output is powered by the
_things on the metal of the machine itself_. Plus, [mapbox-gl](https://github.com/mapbox/mapbox-gl-js), the underlying library,
is highly customizable. It might even be a little _too_ customizable, and that's where [ember-leaflet](https://github.com/miguelcobain/ember-leaflet) shines:
although it's SVG-based, it provides more out-of-the-box abstractions at a higher level.

That said, for the sake of brevity, let's just stick with ember-mapbox-gl. Once you become a mapping expert, you can make that call later.

### Shut up and play the hits

Stop what you're doing right now, open the nearest Ember project, and type this in your terminal:

`ember install ember-mapbox-gl`




