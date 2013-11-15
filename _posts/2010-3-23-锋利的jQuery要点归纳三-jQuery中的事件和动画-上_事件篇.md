---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

##一、事件

###1 加载DOM

	$(document).ready(function(){//...})
DOM加载完毕后执行，在可重复使用上区别于window.onload=function(){//...}

	$(window).load(function(){//...})
window内所有对象加载完毕后执行，几等同window.onload=function(){//...}。也可针对selector使用此方法

另：$(document).ready(function(){//...})的简写方式：$(function(){//...})或$().ready(function(){//...})

###2 事件绑定

	$("selector").bind()
为元素绑定事件，格式：bind(type[,data],fn)，可多次调用  
type事件类型包括：blur, focus, load, resize, scroll, unload, click, dbclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, error或者自定义事件  
简写方法：$("selector").bind(type,function(){//...})等价于$("selector").type(function(){//...})  
可传递data参数以供unbind特定事件之用

	$("selector").is()
判断方法

（外：方法多次重用可定义局部变量 var $x = $("selector").方法()）

###3 合成事件

	$("selector").hover(enter,leave)
模拟光标悬停事件，鼠标进入时触发enter事件，鼠标移出时触发leave事件（代替的是bind("mouseenter")和bind("mouseleave")）  
使用方法：$("selector").hover(function(){//enter case...},function(){//leave case...})  
（外：IE6不支持除a标签外css的:hover伪类的问题——可用此hover事件作为hack来解决）

	$("selector").toggle(fn1,fn2,...,fnN)
模拟鼠标连续单击事件，按照单击顺序按次序循环执行事件  
使用方法：$("selector").toggle(function(){//case1...},function(){//case2...},...,function(){//caseN})  
特殊用法：切换元素可见状态，如元素隐藏，单击toggle触发元素可使之可见；元素可见，单击toggle触发元素使之隐藏

P108例：

	<script>
	$(function(){
	$("panel h5.head").toggle(function(){
	$(this).next().toggle();
	},function(){
	$(this).next().toggle();
	})
	})
	</script>

###4 事件冒泡

	$("selector").bind("type",function(event){//event:事件对象...})
event事件对象：只有此函数内部才能访问到，事件处理函数执行完毕后，事件对象就被销毁

	event.stopPropagation()
在函数最后用来停止事件冒泡

P111例：

	<script>
	$('span').bind("click",function(event){
	var txt = $('msg').html() + "<p>内层span元素被单击</p>";
	$('#msg').html(txt);
	event.stopPropagation();
	})
	</script>

	event.preventDefault()
阻止元素默认行为

例：验证表单（input为空阻止提交并提示）

	<script>
	$(function(){
	$("#submit").bind("click",function(event){
	var username=$("#username").val();
	if(username==""){
	$("#msg").html("<p> 文本框的值不能为空</p>");
	event.preventDefault();
	}
	});
	})
	</script>

	return false;
同时对对象事件停止冒泡和默认行为，等价于同时调用stopPrapagation()和preventDefault()

（外：事件捕获和事件冒泡是相反的过程，事件捕获是从DOM顶端往下开始触发，jQuery不支持，故本书从略）

###5 事件对象的属性

	event.type
获取事件类型

例：

	<script>
	$("a").click(function(event){
	alert(event.type);
	return false;
	})
	</script>

上面返回"click"

	event.target
获取触发事件的元素

例：

	<script>
	$("a[href=http://google.com]").click(function(){
	alert(event.target.href);
	return false;
	})
	</script>

上面返回"http://google.com"

	event.relatedTarget
访问事件相关元素

	event.pageX / event.pageY
获取光标相对于页面的x坐标和y坐标

	event.which
在鼠标单击事件中获取鼠标的左、中、右键；在键盘事件中获取键盘的按键（返回值1=鼠标左键；2=鼠标中键；3=鼠标右键）

	event.metaKey
键盘事件中获取&lt;ctrl&gt;按键

	event.originalEvent
指向原始的事件对象

###6 移除事件

	$("selector").unbind()
移除元素上的事件，格式：$("selector").unbind([type][,data]);（如果没有参数，则删除所有绑定的事件；如果提供了事件类型参数，则只删除该类型的绑定事件；如果把在绑定时传递的处理函数作为第二个参数，则只有这个特定的事件处理函数会被删除）

例：

	<script>
	$(function(){
	$('#btn').bind("click",myFun1=function(){    //先绑定
	$('#test').append("...");
	});
	})
	</script>

	<script>
	$('#delOne').click(function(){
	$('#btn').unbind("click",myFun1);    //后删除
	})
	</script> 

	$("selector").one()
绑定一个触发一次即被删除的事件，格式：$("selector").one(type[,data],fn);

###7 模拟操作

	$("selector").trigger("type");
模拟用户交互动作，简写方法：$("#selector").type(); 格式：$("selector").trigger(type[,data])

例：用单击替代鼠标经过

	<script>
	$("selector").mouseover(function{//...});
	$("selector2").click(function(){
	$("selector").trigger("mouseover");    //或者$("selector").mouseover()
	})
	</script>

自定义事件的例子

	<script>
	$("selector").bind("myClick",function(){//...});    //绑定自定义事件
	$("selector").trigger("myClick");    //触发自定义事件
	</script>

	$("selector").trigger(type[,data])
可以数组形式传递参数给回调函数

P119例：

	<script>
	$("#btn").bind("myClick",function(event,message1,message2){
	$("#test").append("<p>"+message1+message2+"</p>");
	});
	$("#btn").trigger("myClick", ["我的自定义","事件"]);
	</script>

###8 其他用法

	$("selector").bind("type1 type2",function(){//...})
一次性绑定多个事件类型

P119值得一看的例子

	<script>
	$(function(){
	$("div").bind("mouseover mouseout",function(){
	$(this).toggleClass("over");    //切换class
	});
	})
	</script>

	$("selector").bind("type.命名空间",function(){//...})
为多个事件添加事件命名空间，便于管理，删除命名空间后，命名空间下的事件同时删除，如：

	$("div").bind("mouseover.plugin",function(){//...})
	$("div").bind("click.plugin",function(){//...})
	$("div").unbind(".plugin");

	$("selector").trigger("type!")
"\!"用来选择匹配不包含在命名空间中的type方法