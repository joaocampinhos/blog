---
layout: post
title: "CSS perf: Colors"
---

Let's face it, performance **is** important.
And although we now have incredible internet speeds in developed countries, we can’t neglect the rest of the world.

And what's better than a blazing fast website? Nothing I say. We already minify and gzip our assets, and distribute them over a CDN, but there is a lot more we can do.

Let's start this series with a simple and cheesy one: colors. I say cheesy because we can argue that the way we specify our colors won't hurt our loading times. I'm inclined to agree, but I can think of some use cases that require extreme optimization, and for those use cases this might be useful.

##The problem

There are a lot of ways to specify colors in CSS. for example this color

<div style="background-color:#639;width:100px;height:100px;margin:0 auto;"></div>

can be speficied like this:

{% highlight CSS %}
background-color: RebeccaPurple;
background-color: #663399;
background-color: #639;
background-color: rgb(102,51,153);
background-color: hsl(270%,50%,40%);
{% endhighlight %}

The question is: Which one should I use? If we aproach this from a size prespective, `#639` is the smalest and thereof the best! But is it always like that? let's analyze this further.

##The Tests

To test this, I used [jsperf](http://jsperf.com) to automate the process.
I used the following browsers:

+ Safari 9.0.3
+ Chrome 47.0.2526
+ Chrome Mobile 49.0.2592

And I created three revisions to test three different things.

+ Rev 1
  + named color
  + short hex
  + long hex
  + RGB
  + HSL
+ Rev 2
  + RGBA
  + HSLA
+ Rev 3
  + lower case hex
  + upper case hex

You can check the tests and results [here](http://jsperf.com/csscolors). You can even run the tests yourself to compare with my results.

##The Results

_Note that those are my results with my machine and my browsers. Your mileage may vary._

####Rev 1

[![Revision 1 Results](/public/images/Rev1.png)](/public/images/Rev1.png)

This is the base of our tests. And we can see that the short hex is always the best option followed by long hex. The difference between Named color and RGB is marginal on Desktop Chrome, but it’s noticeable on Safari and Chrome Mobile. HSL is a disappointment.

####Rev 2

[![Revision 2 Results](/public/images/Rev2.png)](/public/images/Rev2.png)

HSL was worse on the first test and when we add alpha to the game, HSLA loses again, hard. Use RGBA **always**.

####Rev 3

[![Revision 3 Results](/public/images/Rev3.png)](/public/images/Rev3.png)

As I suspected, lower case vs upper case hexadecimal notation is just a matter of preference that don't alter performance at all.

###tl:dr

If you are paranoid about performance, use hex when declaring your colors and short hex whenever possible. If you need transparency use RGBA and stay the hell away from HSL(A).
