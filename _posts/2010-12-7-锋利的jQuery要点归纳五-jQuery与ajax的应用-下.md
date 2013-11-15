---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

##二、序列化元素

###1 serialize()方法

先回顾前面讲到的$.get()和$.post()方法：

	<form id="form1" action="#">
	<p>评论</p>
	<p>姓名<input type="text" name="username" id="username" /></p>
	<p>内容：<textarea name="content" id="content"></textarea></p>
	<p><input type="button" id="send" value="提交" /></p>
	</form>

为了获取姓名和内容，必须将字段的值逐个添加到data参数中。

	$("#send").click(function(){
	$.get("get1.php",{
	username:$("#username").val(),
	content:$("#content").val()
	},function(data,textStatus){
	$("#resText").html(data);    //将返回的数据添加到页面上
	});
	});

如果表单元素复杂，使用这种方式在增大工作量的同时也使表单缺乏弹性。使用serialize()方法改写如下：

	$("#send").click(function(){
	$.get("get1.php",$("form1").serialize(),function(data,textStatus){
	$("#resText").html(data);    //将返回的数据添加到页面上
	});
	});

即使在表单中添加字段，脚本仍然能够使用，同时serialize()方法可以规避字符编码问题（P196）

因为serialize()方法作用于jQuery对象，所以不光只有表单能使用它，其它选择器选取的元素也都能使用它。如：

	$(":checkbox,:radio").serialize();//把复选框和单选框的值序列化为字符串形式，只会将选中的值序列化。

###2 serializeArray()方法（P196）

将DOM元素序列化后，返回JSON格式的数据

	var fields = $(":checkbox,:radio").serializeArray();
	console.log(fields);    //用firebug输出

使用$.each()函数对数据进行迭代输出：

	$(function(){
	var fields = $(":checkbox,:radio").serializeArray();
	console.log(fields);    //用firebug输出
	$.each(fields,function(i,field){
	$("#results").append(field.value + " , ");
	});
	});

###3 $.param()方法

它是serialize()方法的核心，用来对一个数组或对象按照key/value进行序列化

	var obj = {a:1,b:2,c:3};
	var k = $.param(obj);
	alert(k);    //输出a=1&b=2&c=3

##三、jQuery中的Ajax全局事件

如：当Ajax请求开始时，会触发ajaxStart()方法的回调函数，当Ajax请求结束时，会触发ajaxStop()方法的回调函数。  
例如在加载远程内容时添加提示信息，当Ajax请求开始的时候，将此元素显示，当Ajax请求结束后，将此元素隐藏：

	<div id="loading">加载中...</div>

	<script>
	$("#loading").ajaxStart(function(){
	$(this).show();
	});
	$("#loading").ajaxStop(function(){
	$(this).hide();
	});
	</script>

如果在此页面中的其他地方也使用Ajax，该提示信息仍然有效，因为它是全局的。

其他全局事件有：

ajaxComplete(callback)：Ajax请求完成时执行的函数

ajaxError(callback)：Ajax请求发生错误时执行的函数，捕捉到的错误可以作为最后一个参数传递

ajaxSend(callback)：Ajax请求发送前执行的函数

ajaxSuccess(callback)：Ajax请求成功时执行的函数

如果想使某个Ajax请求不受全局方法的影响，可以在使用$.ajax(options)方法时，将参数中的global设置为false。

	$.ajax({
	url:"test.html",
	global:false    //不触发全局Ajax事件
	});

##四、基于jQuery的Ajax聊天室程序讲解（P198，略）