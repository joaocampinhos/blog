---
layout: page
title: Archive
description: About João Campinhos’ work and life
permalink: /archive/
category: meta
---

<div class="mt3 pb4 container-s">
  <h1 class="spacing-l caps center">Archive</h1>
  <div class="mb4 center">
  {% for category in site.categories %}
  <a class="c-nav__item color-black" href="#{{category | first}}">{{category | first}}</a>
    {% endfor %}
  </div>
  {% for category in site.categories %}
    <div class="mb4 mt4" id="{{ category | first | remove:' ' }}">
      <h1 class="hide-sm-down p1 caps spacing-m color-{{category | first}}">{{ category | first }}</h1>
      <h3 class="break-word hide-sm-up center p1 caps spacing-m color-{{category | first}}">{{ category | first }}</h3>
      {% for posts in category %}
        {% for post in posts %}
          {% if post.url %}
            <div class="pl1 mt3 mb3 container-xs">
              <h3 class="m0 caps color-black regular">
                <a class="link-none" href="{{ post.url }}">{{ post.title}}</a>
              </h3>
              <p class="m0 code">{{ post.date | date: "%B %d, %Y" }}</p>
            </div>
          {% endif %}
        {% endfor %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
