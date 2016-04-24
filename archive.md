---
layout: pagenot
title: Archive
description: About João Campinhos’ work and life
permalink: /archive/
category: meta
---

<div class="mt3 pb4 container-s">
  <div class="pl1 pr1">
    <h1 class="spacing-l caps color-meta center">Archive</h1>
    <div class="center clearfix">
    {% for category in site.categories %}
      <div class="mt1 mb1 md-col center md-col-3">
        <a class="link-simple c-nav__item color-black" href="#{{category | first}}">{{category | first}}</a>
      </div>
    {% endfor %}
    </div>
  </div>
  {% for category in site.categories %}
    <div class="mb4" id="{{ category | first | remove:' ' }}">
      <h1 class="hide-sm-down p1 caps spacing-m color-{{category | first}}">{{ category | first }}</h1>
      <h3 class="break-word hide-sm-up center p1 caps spacing-m color-{{category | first}}">
        <span class="color-white left"><a class="link-none" href="#">▲</a></span>
        {{ category | first }}
        <span class="color-white right"><a class="link-none" href="#">▲</a></span>
      </h3>
      {% for posts in category %}
        {% for post in posts %}
          {% if post.url %}
            <div class="pl1 mb3 container-xs">
              <h3 class="m0 caps color-black regular">
                <a class="link-simple" href="{{ post.url }}">{{ post.title}}</a>
              </h3>
              <p class="m0 code">{{ post.date | date: "%B %d, %Y" }}</p>
            </div>
          {% endif %}
        {% endfor %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
