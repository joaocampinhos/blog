---
layout: page
title: Archive
description: About João Campinhos’ work and life
permalink: /archive/
category: meta
---

<div class="mt3 pb4 container-s center">
  <h1 class="caps color-meta">Archive</h1>
  {% for category in site.categories %}
    <div class="caps" id="{{ category | first | remove:' ' }}">
      <h2 class="color-{{category | first}}">{{ category | first }}</h2>
      {% for posts in category %}
        {% for post in posts %}
          {% if post.url %}
            <div class="mt3 mb3 container-xs">
              <h1 class="m0 caps color-black regular">
                <a class="link-none" href="{{ post.url }}">{{ post.title}}</a>
              </h1>
              <p class="m0 code">{{ post.date | date: "%B %d, %Y" }}</p>
            </div>
          {% endif %}
        {% endfor %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
