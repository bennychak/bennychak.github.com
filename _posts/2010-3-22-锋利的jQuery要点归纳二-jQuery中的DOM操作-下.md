---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

###12 设置和获取HTML、文本和值

	$("selector").html()
获取html代码

	$("selector").html(html)
设置html代码（替换标签中内容），html()方法不可用于XML文档

	$("selector").text()
获取纯文本内容

	$("selector").text(text)
设置文本内容（替换标签中内容），text()方法可以用于XML文档

	$("selector").val()
获取元素的值

	$("selector").val(value)
设置元素的值，（外：defaultValue属性可获得html默认属性，P80例:if \(txt_value==this.defaultValue\)\{...\}）

	$("select").val("option")
设置select控件的选中状态，类似有：$(":checkbox").val("check1","check2"); $(":radio").val("radio1");  
（外：可以使用attr()方法实现同样功能，如：$("select option:eq\(1\)").attr("selected",true); $("\[value=radio2\]:radio"\).attr\("checked",true\);）

###13 遍历节点

	$("selector").children()
获取匹配元素的子元素集合，以数组返回（只考虑子元素，不考虑子元素以下的后代元素）  
引申：循环取得每个子元素html内容的方法：

	<script>
	var $ul = $("ul").children();
	for (var i=0 len=$ul.length; i<len; i++){
	alert($ul[i].innerHTML);
	}
	</script>

	$("selector").next()
获取匹配元素后面紧邻的同辈元素，以数组返回

	$("selector").prev()
获取匹配元素前面紧邻的同辈元素，以数组返回

	$("selector").siblings()
获取匹配元素前后所有的同辈元素，以数组返回

P88使用此方法的例子：

	<script>
	$(".has_children").click(function(){
	$(this).addClass("highlight")
	.children("a").show().end()
	.siblings().removeClass("highlight")
	.children("a").hide();
	})
	</script>

	$("selector").closest()
获取最近的匹配元素，首先检查当前元素是否匹配，如匹配则返回元素本身，否则逐级向上查找父元素知道匹配为止，如果找不到则返回空的jQuery对象  

P89例

	<script>
	$(document).bind("click",function(e){
	$(e.target).closest("li").css("color","red");
	})
	</script>
 
其他遍历节点的方法（find(), filter(), nextAll(), prevAll(), parent(), parents()等）本书从略

###14 CSS-DOM操作

	$("selector").css("property")
获取元素样式的property属性的值

	$("selector").css("property","value")
设置元素样式的property属性的值

	$("selector").css({"property1":"value1","property2":"value2"})
同时设置元素多个样式属性的值。注：例："font-size" = fontSize （无引号的驼峰写法）

	$("selector").css("opacity","value")
设置透明度（支持所有浏览器），value值(0 ~ 1)

	$("selector").css("height")
获取元素高度的height值

	$("selector").height()
获得元素当前计算的实际高度值，肯定不会返回auto之类，还可以用来获取window和document的高度

	$("selector").height(100)
设置高度，默认单位px，如要使用其他单位需要传递字符串如.height(10em)

	$("selector").width()
获取元素当前计算的实际宽度值

	$(selector).offset()
获取元素在当前视窗的相对偏移，返回对象包含两个属性，top和left，此方法只对可见元素有效。

P91获取&lt;p&gt;元素的偏移量的例子

	<script>
	var offset = $("p").offset();
	var left = offset.left();
	var top = offset.top();
	</script>

	$("selector").position()
获取元素相对于最近的一个position样式属性设置为relative或者absolute的祖父节点的相对偏移，返回对象包含两个属性，top和left。例：

	<script>
	var position = $("p").position();
	var left = position.left;
	var top = position.top;
	</script>

	$("selector").scrollTop()
获取元素的滚动条距顶端的距离，如：var scrollTop = $("selector").scrollTop();

	$("selector").scrollLeft()
获取元素的滚动条距左侧的距离，如：var scrollLeft = $("selector").scrollLeft();

控制元素滚动条滚动到的位置，可在上述两种方法中传递参数，如：

	$("textarea").scrollTop(300);
	$("textarea").scrollLeft(300);