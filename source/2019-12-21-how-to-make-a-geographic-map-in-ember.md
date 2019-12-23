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
 - [ember-mapbox-gl](https://github.com/kturney/ember-mapbox-gl) (Full disclosure: I'm a contributor, although [kturney](https://github.com/kturney) does most of the work!)
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
is highly customizable. It might even be a little _too_ customizable, and that's where [ember-leaflet](https://github.com/miguelcobain/ember-leaflet) really shines:
although it's SVG-based (read: not as fast), it provides more out-of-the-box abstractions at a higher level.

That said, for the sake of brevity, let's just stick with ember-mapbox-gl. Once you become a mapping expert, you can make that call later.

### Shut up and play the hits

Stop what you're doing right now, open the nearest Ember project, and type this in your terminal:

`ember install ember-mapbox-gl`

Great. It's installed. But here's the rub: you have to find a provider for the _basemap_ itself, the underlying data showing  streets, buildings, and points of interest. Because that data changes quite a lot, there's a lot of work that goes into maintaining it.

There are a few free and paid options out there, but for simplicity, let's use [mapbox.com](mapbox.com). Make an account there, and head over to [here](https://account.mapbox.com/access-tokens/create) to generate a public access token.

Open up your `config/environment.js` and add this:

```
'mapbox-gl': {
  accessToken: 'ACCESS TOKEN HERE',
  map: {
    style: 'mapbox://styles/mapbox/basic-v9',
    zoom: 13,
    center: [ -96.7969879, 32.7766642 ]
  }
},
```

In case it wasn't obvious, you should swap out 'ACCESS TOKEN HERE' with the access token you generated on mapbox.com.

What are these other things? The map object here _sets up the default state of the map when it loads_. This means that when you create a map, it needs to know what to show, where to position the camera. Of course, this is overridable at template invocation time.

What is this `style` property? It's the reason we had to grab an API key from Mapbox: this points to the remote resource for loading all the basemap details you need to see for your users to orient themselves on the map. It tells your Mapbox map where to fetch all the roads and bridges and points of interest that fill a delightful, useful map.

Now, add this to one of your templates: 
```hbs
<MapboxGl as |map|>
  <map.source
    @options=(hash type='geojson' data=(hash type='Point' coordinates=(array  -96.7969879, 32.7766642 ))) as |source|
  >
    <source.layer layer=(hash
      type='circle'
      paint=(hash
        circle-color='#007cbf'
        circle-radius=10)
      )
    >
  </map.source>
</MapboxGl>
```

What is going on? Line by line:

```hbs
<MapboxGl as |map|>
```
This simply instantiates a new map by creating new element in the DOM and binding the map instance to it.


```hbs
<map.source
  @options=(hash type='geojson' data=(hash type='Point' coordinates=(array  -96.7969879, 32.7766642 ))) as |source|
>
```
This creates a mapbox-gl [source](https://docs.mapbox.com/mapbox-gl-js/api/#sources), and passes options to it. What are those options? First, the _type_ describes the kind of source that mapbox should use. What is a [GeoJSON](https://geojson.org/)? Simply an standard for representing geographic information in JSON. That explains the shape of the `data` property: a GeoJSON object may contain its own `type`. For our purposes, we're using a point: 

> For type "Point", the "coordinates" member is a single position.

That's a little far into the weeds, but there is an underlying reason for these API choices.

**Generally, you'll find that most of the components in _ember_-mapbox-gl correspond to the various _mapbox_-gl APIs. That means you can just use the MapboxGL documentation site proper**

```hbs
    <source.layer layer=(hash
      type='circle'
      paint=(hash
        circle-color='#007cbf'
        circle-radius=10)
      )
    >
```
Again, we're dealing with another area of the mapbox-gl API: [the layer](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers). Like GeoJSON, the shape of this configuration follows a _styling_ specification. There are many ways to style a map layer.

One-by-one: `source.layer` invokes the `addLayer` method of mapbox-gl itself and passes some options. Those options——specifically, the `layer` property——adhere to the [styling specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/).

### All together now

Here's a run-through of what we did:

1. Setup a Mapbox.com account and generate an API token
2. Add your configuration to your `config/environment.js`
3. Invoke your `<MapboxGL>` map and yield a [block parameter](https://guides.emberjs.com/release/components/block-content/#toc_block-parameters)
4. Add a `<map.source>`
5. Inside that block scope, add a `<source.layer>`

Underneath all that are things like lifecycle management. That means you can use these components as you would anything else:

```hbs
{{#if this.someCondition}}
  <map.layer /> {{!-- show something !}}
{{/if}}
```

Much of ember-mapbox-gl is simply a _bindings_ layer. It provides a declarative templating API for invoking parts of the mapbox-gl API proper. So, it's hands-off. The price of customizability is having less of an opinion. As I mentioned earlier, that's where [Ember Leaflet](https://miguelcobain.github.io/ember-leaflet/) really shines, and I encourage you to look at that as well.

If you have any questions, please hit me up on the Ember Discord channel. I'm more than happy to help!
