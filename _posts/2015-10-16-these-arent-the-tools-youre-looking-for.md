---
layout: post
title: These aren't the tools you're looking for
description: The state of front-end tools and how to cope with the insanity
---

Coders love their tools don’t they? As they should. Whether it’s a bloated IDE or a minimal text editor, a huge opinionated framework or a simplistic library, tools are a critical part of a programmer’s job. I love them too, but sometimes it’s easy to be overwhelmed by the huge amount of tools around us. And if you do any kind of front-end development, it gets even worse. Any developer that is not living under a rock can sense the insanity in the air.

<blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr">Grunt, gulp, webpack, duo, broccoli, brunch, fly, stylus. The list goes on.&#10;&#10;The front-end development scene is *completely sane* right now.</p>&mdash; Fred Oliveira (@f) <a href="https://twitter.com/f/status/651330004412944384">October 6, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

The first question pops up imediatly.

## Why?

There are a bazillion tools out there because everyone has a different workflow. Allow me to explain this one further. Let’s take a look at package managers. [Bower](http://bower.io/) wins the popularity contest here, but you end up with a lot of unnecessary files. So you use a task runner like [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/) to copy, concatenate and minify everything. Or you might want to do something completely different with other tools like [Webpack](https://webpack.github.io/). Or even use Webpack with your task runner. Can you see where I’m going with this?

**But why does this happen?** Well, partly because the web is pretty new and people are still figuring shit out. Everyone were just doing basic static HTML pages and then some crazy guy appeared with the ajax magic. Out of the blue dynamic pages were a thing. Now we have to deal with the mobile web, responsive shenanigans, single page applications, web sockets, a bunch of API’s AND I CAN’T TAKE IT ANYMORE!

[![This is an amazing comic. For every image that gets blocked, a kitten dies.](http://www.commitstrip.com/wp-content/uploads/2013/10/Strips-A-chacun-son-framework-600-finalenglish.jpg)](http://www.commitstrip.com/en/2013/10/23/et-si-on-venait-de-trouver-le-meilleur-framework-js-ever/)

###### This is really funny. tell me more about this insanity

It’s not just a matter of workflow. Just like this post states my opinion, frameworks are opinionated as fuck, and with MVwhathever frameworks, the situation is hilarious. We actually need a [website](http://todomvc.com/) to keep track of every combination available, and there are currently 64 applications with different frameworks and/or languages that compile to javascript.

But even CSS can’t run away from this madness. There are [pre-processors](http://sass-lang.com/); [post-processors](https://github.com/postcss/postcss); [boilerplates](https://html5boilerplate.com/); [libraries](http://bourbon.io/); [frameworks](http://getbootstrap.com/); mostly because CSS is stupid and everything most pre-processors do CSS should do by default.


##### I'm new to front-end and am now crying in a corner

Good. Don’t go out there trying to learn the flavour of the month. Focus on technologies. Did you learn rails without having a solid knowledge of how ruby works? You did? Oh… well, sorry to hear that. Focus on javascript. Everyone knows the best javascript flavour out there is vanilla. if you know javascript you can pick up any framework your crazy project manager throws at you, even the most esoteric ones. The same goes for CSS. If you know your CSS you can ditch the bloated frameworks and develop your own that covers your necessities.

Then you can publish it so everyone can use your framework for that specific use case. Instead of 300 frameworks we’re now sitting at 301. And you're probably super proud of it. You piece of shi&hellip;
