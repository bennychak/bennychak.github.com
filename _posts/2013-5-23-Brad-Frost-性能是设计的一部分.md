---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [翻译, Future Friendly, 响应式设计]
---

通常，任何关于web性能的讨论都是程序员喜闻乐见的话题。他们坐在一起，高谈诸如DNS查询、Gzip压缩、较长的缓存时间、ETags等术语。如果你是一位在座的非技术人员，这种情况就会让你要么昏昏欲睡要么夜不能寐，并且逐渐产生一种误解，仿佛性能优化只和程序员有关，和产品的其他环节没有什么关系。

实际上，性能的优化不仅仅只是开发环节的技术实践。从设计环节，我们就应该考虑这个问题了——因为性能的问题本质上是一个设计问题。


## 我们都能感到设计出了问题

曾经很多次有人问我，你是干什么工作的？为了不让别人费解，我就说“我是搞手机的”，随后对方立刻就会向我抱怨——“手机上的facebook烂透了！”

这种反应简直是下意识的脱口而出，这就很有意思了——为什么人们会觉得facebook烂透了呢？难道他们没有看到，facebook的导航有多么直观？没有意识到facebook改版后的时间轴多么优雅？[facebook在设计上做了他们能做的一切](http://techcrunch.com/2012/09/11/mark-zuckerberg-our-biggest-mistake-with-mobile-was-betting-too-much-on-html5)，用户还想怎样？后来我打开手机体验了一下，立刻明白了——facebook基于html5的App慢得像坨屎。

<img src="/images/performance1.png" />
*performance problem of facebook*

现在的[网页越来越臃肿](http://www.webperformancetoday.com/2012/05/24/average-web-page-size-1-mb)，原因之一是比起web兴起之初，我们有更多的技术可以利用了。这些新兴技术帮我们解决了很多问题，带来了更多优秀体验，同时让我们的网页出现了一些风险。[Phil Hawksworth](http://hawksworx.com)对一些[漂亮的视差滚动网站](http://www.milwaukeepolicenews.com)做了性能的分析，数据显示，设计和性能明显失衡了。

<img src="/images/performance2.jpg" style="max-width:100%; _width:460px" />
*performance problem of a parallax site*

>“一些网站搞到15M那么大，对于这些二货，html5也救不了你了”  
>-[Christian Heilmann](https://hacks.mozilla.org/2012/10/broken-promises-of-html5-and-whats-next-a-presentation-at-html5devconf)

当然，有些网站利用新技术，如上面提到的视差滚动啊什么的，搞的相当漂亮（也有些二货连视觉都搞得很丑，咱不讨论）。事实却没有那么性感。多数用户却没有足够的耐心坚持看到这些网站的美妙设计。对于一个移动网站来说，[74%的用户](http://www.digitalmall.us/1150/smartphone-users-frustrated-with-mobile-web-experience)在5秒内没有打开你的网站之后就会选择离开，所以设计师和开发者应该明白，你们抓住一个人的心的时间只有区区5秒，这5秒里你一定要让他们看到他们想要的东西，否则他们就跑啦！

## 优秀的性能产生优秀的设计

通向优异性能的道路并非是从开发环节才开始的（当然工程师很重要），这条路的源头来自团队中每个人对于产品像闪电一样快的共同追求和决心（觉醒吧少年们）！下面是我的一些建议：

### 在项目文档里写入对性能的要求

项目文档和设计文档中应该反复明确性能是产品开发的首要目标。如“此项目的目标是建立一个优秀的、适应性强的、闪电般快速的用户体验。”

### 尽快进入浏览器中的设计阶段

页面的视觉稿打印出来挂在墙上可能非常漂亮，但是最终呈现在浏览器中的页面要考虑得更多。如我在之前文章中说的，我们已经进入了“后PSD时代”（注：作者的[《后PSD时代》](http://bradfrostweb.com/blog/post/the-post-psd-era)一文指出，web设计应该紧密融合视觉和前端重构的工作），设计环节尽快进入浏览器设计阶段，比起传统的“视觉-前端”流程，这样可以为性能考虑更多。

### 在真实设备中测试

[Stephanie Rieger](http://stephanierieger.com/on-designing-content-out-a-response-to-zeldman-and-others)非常正确地指出，在小窗口或者模拟器中是不能准确还原移动设备访问页面的性能数据和视觉感受的。越早在真实设备中测试，越早得知每一个设计模块对性能产生的影响，从而把吃掉性能的设计问题扼杀在萌芽阶段。

### 合作

工程师应该尽早介入设计流程，并且告诉设计师设计稿中潜在的性能风险。这个合作的过程不仅仅是对一个模块说“行”或“不行”这么简单，而应该是跨设计开发的相互学习和深入沟通。

### 布道

大多数设计师并不了解其设计可能会导致的性能问题。作为工程师要主动向设计师们传授一些性能概念，比如“页面中应该避免引入5个以上的字体文件”等。工程师可以和设计师一起斟酌设计中是否需要使用大图片，也可以在诸如[Codepen](http://codepen.io)等快速页面展示工具中建立页面制作稿的原型，在真实设备中访问，然后和设计师坐在一起就设计的性能进行讨论。

浪费用户的流量和时间本质上是对用户的不尊重。而处理性能问题就是处理对待用户的态度问题。如果你的页面尊重了用户的时间和流量，他们就会认为你的页面的体验更加友好。“优秀的性能产生优秀的设计”，我们可以在这方面做得更好。

[Brad Frost](http://bradfrostweb.com), 2013.1.28, “[Performance as Design](http://bradfrostweb.com/blog/post/performance-as-design)”