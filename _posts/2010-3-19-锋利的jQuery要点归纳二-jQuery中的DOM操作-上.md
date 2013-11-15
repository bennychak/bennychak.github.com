---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

###1 查找元素节点

    var $x = $("selector").text()

###2 查找属性节点

    var $x = $("selector").attr("property")

###3 创建节点

    var $x = $("html")

###4 插入节点

	$("selector").append()
向每个匹配的元素内部追加内容

	$("selector").appendTo()
等价于.append()操作符左右互换

	$("selector").prepend()
向每个匹配的元素内部前置内容

	$("selector").prependTo()
等价于.prepend()操作符左右互换

	$("selector").after()
在每个匹配的元素之后插入内容

	$("selector").insertAfter
等价于.after()操作符左右互换

	$("selector").before()
在每个匹配的元素之前插入内容
	$("selector").insertBefore()
等价于.before()操作符左右互换

###5 移动节点

本书P70例：

	<script>
	var $one_li = $("ul li:eq(1)");  //获取<ul>节点中第2个<li>元素节点
	var $two_li = $("ul li:eq(2)");  //获取<ul>节点中第3个<li>元素节点
	$two_li.insertBefore($one_li);   //移动节点
	</script>
 
###6 删除节点

####6.1 remove()方法

	$("selector").remove()
remove()方法将删除selector所有后代节点，元素用remove()方法删除后，仍可以继续使用。另外remove()方法也可以通过传递参数来选择性地删除元素，如$("ul li").remove("li[title!=xxx]");

####6.2 empty()方法

	$("selector").empty()
清空selector的所有后代节点

###7 复制节点

	$("selector").clone()
如$(this).clone().appendTo("ul")。若要使复制后的新元素带有原元素所拥有的行为，需要传递参数true。如$("selector").clone(true)

###8 替换节点

	$("selector").replaceWith()
将所有匹配的元素都替换成指定的HTML或者DOM元素

	$("selector").replaceAll()
等价于.replaceWith()操作符左右互换

###9 包裹节点

	$("selector").wrap()
将所有匹配的元素单独包裹

	$("selector").wrapAll()
将所有匹配的元素用一个元素包裹

	$("selector").wrapInner()
将每一个匹配的元素的子内容（包括文本节点）用其他结构化的标记包裹起来

###10 属性操作

	$("selector").attr()
获取（一个property参数）和设置元素属性（两个参数，property和value），如$("p").attr("title","your title")。如果同时设置多个属性，格式如$("p").attr({"title" : "your title" , "name" : "test"})

	$("selector").removeAttr()
删除元素属性

###11 样式操作

	$("selector").attr()
替换样式

	$("selector").addClass()
追加样式

	$("selector").removeClass()
移除样式

	$("selector").toggle()
行为重复切换

例：

	<script>
	$x.toggle(function(){
	//code1    
	},function(){
	//code2
	})
	</script> 

交替执行code1和code2

	$("selector").toggleClass()
控制样式上的重复切换，如$("p").toggleClass("anotherClass")

	$("selector").hasClass("anotherClass")
判断selector中是否含有anotherClass