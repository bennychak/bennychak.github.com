---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

	/* http://meyerweb.com/eric/tools/css/reset/ 
	v2.0 | 20110126
	License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
	}
	body {
    line-height: 1;
	}
	ol, ul {
    list-style: none;
	}
	blockquote, q {
    quotes: none;
	}
	blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
	}
	table {
    border-collapse: collapse;
    border-spacing: 0;
	}

雅虎YUI的css reset可参考[http://developer.yahoo.com/yui/3/cssreset](http://developer.yahoo.com/yui/3/cssreset)，  
这里是直接下载css文件的地址[http://yui.yahooapis.com/3.3.0/build/cssreset/reset-context-min.css](http://yui.yahooapis.com/3.3.0/build/cssreset/reset-context-min.css)。  
如果服务器速度不错，建议下载后使用，而不要依赖yahoo推荐的link方式直接引用。googleCode的jquery都保不齐能一直访问。