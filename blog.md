---
layout: page
title: blog
description: About João Campinhos’ work and life
permalink: /blog/
category: meta
---

<div class="pb4 container-s center">
  {% for post in site.posts %}
  <div class="mt3 mb3 container-xs">
    <h1 class="m0 caps color-black regular">
      <a class="link-none" href="{{ post.url }}">{{ post.title}}</a>
    </h1>
      <p class="m0 code">{{ post.date | date: "%B %d, %Y" }}</p>
    </a>
  </div>
  <hr class="angle">
  {% endfor %}
</div>
