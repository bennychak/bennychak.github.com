---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

## 一、jQuery中的Ajax
 
### 1 load()方法 load\(url\[,data\]\[,callback\]\)
 
url: string类型，请求html页面的url地址
data：object类型，发送至服务器的key/value数据
callback：function类型，请求完成时的回调函数，无论请求成功或失败

#### 1.1 载入html文档

首先构建一个被load()加载并追加到页面中的html文件，取名为test.html，如下：

	<div class="comment">
	<h6>项目1：</h6>
	<p class="para">值1</p>
	</div>
	<div class="comment">
	<h6>项目2：</h6>
	<p class="para">值2</p>
	</div>
	<div class="comment">
	<h6>项目3：</h6>
	<p class="para">值3</p>
	</div>

触发ajax页面和jQuery代码如下：

	<input type="button" id="send" value="ajax获取" />
	<div class="comment">所有项目：</div>
	<div id="resText"></div>
	<script>
	$(function(){
	$("#send").click(function(){
	$("#resText").load("test.html");
	});
	});
	</script>

执行如上代码后，test.html的内容被加载进#resText中。

#### 1.2 筛选载入的html文档

	<!--在载入的文件名后跟选择器-->
	$("#resText").load("test.html .para");

#### 1.3 传递方式

load()方法的传递方式根据参数data自动指定，如果没有参数传递，则采用GET方式传递；反之，则会自动转换为POST方式。

	$("#resText").load("test.php",{name:"rain",age:"22"},function(){
	//...
	});

#### 1.4 回调参数

加载完成（无论请求成败）后继续的操作。提供3个参数：请求返回的内容、请求状态、XMLHttpRequest对象。

	$("#resText").load("test.html",function(responseText,textStatus,XMLHttpRequest){
	// responseText: 请求返回的内容
	// textStatus: 请求状态：success、error、notmodified、timeout 4种
	// XMLHttpRequest: XMLHttpRequest对象
	});

### 2 $.get()方法和$.post()方法

#### 2.1 $.get()

$.get(url[,data][,callback][,type])

<table class="doc_tb" border="0" cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
<td width="120">
<p>参数名称</p>
</td>
<td width="100">
<p>类型</p>
</td>
<td>
<p>说明</p>
</td>
</tr>
<tr>
<td>
<p>url</p>
</td>
<td>
<p>String</p>
</td>
<td>
<p>请求的HTML页的URL地址</p>
</td>
</tr>
<tr>
<td>
<p>data（可选）</p>
</td>
<td>
<p>Object</p>
</td>
<td>
<p>发送至服务器的key/value数据回作为QueryString附加到请求URL中</p>
</td>
</tr>
<tr>
<td>
<p>callback（可选）</p>
</td>
<td>
<p>Function</p>
</td>
<td>
<p>载入成功时回调函数（只有当Response的返回状态是success才调用该方法）自动将请求结果和状态传递给该方法</p>
</td>
</tr>
<tr>
<td>
<p>type（可选）</p>
</td>
<td>
<p>String</p>
</td>
<td>
<p>服务器端返回内容的格式，包括xml、html、script、json、text和_default</p>
</td>
</tr>
</tbody>
</table>

$.get()方法的回调函数注释：  
$.get()方法的回调函数只有两个参数data和textStatus，且回调函数只有当数据成功返回（success）后才被调用，和load()方法不同

	function(data,textStatus){
	//data:返回的内容，可以是XML文档，JSON文件，HTML片段等等
	//textStatus:请求状态：success、error、notmodified、timeout4种
	}

例（P182）

	<form id="form1" action="#">
	<p>评论</p>
	<p>姓名<input type="text" name="username" id="username" /></p>
	<p>内容<textarea name="content" id="content"></textarea></p>
	<p><input type="button" id="send" value="提交" /></p>
	</form>
	<div class="comment">已有评论</div>
	<div id="resText"></div>

#### 2.1.1 使用参数

	$("#send").click(function(){
	$.get("get1.php",{        //确定请求页面的URL地址
	username:$("#username").val(),
	content:$("#content").val()    //将姓名和内容的值作为data参数传递给后台
	},回调函数);
	});

#### 2.1.2 数据格式

HTML片段

	$(function(){
	$("#send").click(function(){
	$.get("get1.php",{
	username:$("#username").val(),
	content:$("#content").val()
	},function(data,textStatus){
	$("#resText").html(data);    //将返回的数据添加到页面上
	});
	});
	});

XML文档（需要在服务端设置Content-Type类型：header("Content-Type:text/xml; charset=utf-8");//php）

	$(function(){
	$("#send").click(function(){
	$.get("get2.php",{
	username:$("#username").val(),
	content:$("#content").val()
	},function(data,textStatus){
	var username = $(data).find("comment").attr("username");
	var content = $(data).find("comment content").text();
	var txtHtml = "<div class='comment'><h6>"
	  + username + ":</h6><p class='para'>" + content + "</p></div>";
	$("#resText").html(txtHtml);    //将返回的数据添加到页面上
	});
	});
	});

JSON文件

	$(function(){
	$("#send").click(function(){
	$.get("get3.php",{
	username:$("#username").val(),
	content:$("#content").val()
	},function(data,textStatus){
	var username = data.username;
	var content = data.content;
	var txtHtml = "<div class='comment'><h6>" + username + "</h6><p class='para'>" + content + "</p></div>";
	$("#resText").html(txtHtml);    //将返回的数据添加到页面上
	},"json");    //设置$.get()方法的第四个参数（type）为"json"来代表期待服务器端返回的数据格式
	});
	});

2.2 $.post()

与$.get()的区别

get请求会将参数跟在URL后进行传递，而post请求则是作为HTTP消息的实体内容发送给web服务器。  
get方式对传输的数据有大小限制(<=2kb)，而使用POST方式传递的数据量不受限制  
get方式请求的数据会被浏览器缓存起来，引起安全性问题  
get方式和post方式传递的数据在服务器端的获取也不相同。php中，get方式的数据可以用$_GET[]获取，而post方式可以用$_POST[]获取。两种方式都可以用$_REQUEST[]来获取。

由于post和get方式提交的所有数据都可以通过$_REQUEST[]来获取，因此只需要改变jQuery函数，就可以在get请求和post请求之间切换。（P186）
另外，当load()方法带有参数传递时，会使用post方式发送请求。因此也可以使用load()方法来完成同样的功能。如：

	$(function(){
	$("#send").click(function(){
	$("#resText").load("post1.php",{
	username:$("username").val(),
	content:$("#content").val()
	});
	});
	});

### 3 $.getScript()方法和$.getJson()方法（P187）
 
#### 3.1 $.getScript() 动态加载js文件（可以加回调函数）

	$(function(){
	$("#send").click(function(){
	$.getScript("test.js");
	});
	});

#### 3.2 $.getJSON() 动态加载json文件，加载后的数据可通过回调函数处理

	$(function(){
	$("#send").click(function(){
	$.getJSON("test.json",function(data){
	//data:返回的数据
	});
	});
	});

遍历数据（P189）：

	$(function(){
	$("#send").click(function(){
	$.getJSON("test.json",function(data){
	$("#resText").empty();    
	//返回数据成功后，首先清空id为resText的元素的内容，以便重新构造新的html
	var html = "";
	$.each(data,function(commentIndex,comment){    
	//$.each()函数遍历对象和数组
	//（以一个数组或者对象作为第1个参数，以一个回调函数作为第2个参数。
	//回调函数拥有2个参数：第1个为对象的成员或数组的索引，第2个为对应变量或内容）
	html += "<div class='comment'><h6>" + comment['username'] + ":</h6><p class='para'>" + comment['content'] + "</p></div>";
	//将遍历出来的内容构建成html代码拼接起来
	});
	$("#resText").html(html);    //将构建好的html添加到id为resText的元素中
	});
	});
	}); 

引申：JSONP（P190）

JSONP允许在服务器端集成Script tags返回至客户端，通过JavaScript Callback的形式实现跨域访问。（略）

### 4 $.ajax()方法（P191）

$.ajax(options) 该方法只有1个参数

常用参数表（参数详细说明见原书P192）

<table class="doc_tb" border="0" cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
<td width="100">
<p>参数名称</p>
</td>
<td width="100">
<p>类型</p>
</td>
<td>
<p>说明</p>
</td>
</tr>
<tr>
<td>
<p>url</p>
</td>
<td>
<p>String</p>
</td>
<td>
<p>发送请求的地址，默认为当前页地址</p>
</td>
</tr>
<tr>
<td>
<p>type</p>
</td>
<td>
<p>String</p>
</td>
<td>
<p>请求方式（POST或GET，默认为GET）</p>
</td>
</tr>
<tr>
<td>
<p>timeout</p>
</td>
<td>
<p>Number</p>
</td>
<td>
<p>设置请求超时时间</p>
</td>
</tr>
<tr>
<td>
<p>data</p>
</td>
<td>
<p>Object或String</p>
</td>
<td>
<p>发送到服务器的数据</p>
</td>
</tr>
<tr>
<td>
<p>dataType</p>
</td>
<td>
<p>String</p>
</td>
<td>
<p>预期服务器返回的数据类型，可用类型有：xml、html、script、json、jsonp、text</p>
</td>
</tr>
<tr>
<td>
<p>beforeSend</p>
</td>
<td>
<p>Function</p>
</td>
<td>
<p>发送请求前可以修改XMLHttpRequest对象的函数，例如添加自定义HTTP头</p>
</td>
</tr>
<tr>
<td>
<p>complete</p>
</td>
<td>
<p>Function</p>
</td>
<td>
<p>请求完成后调用的回调函数（请求成功或失败时均调用）</p>
</td>
</tr>
<tr>
<td>
<p>success</p>
</td>
<td>
<p>Function</p>
</td>
<td>
<p>请求成功后调用的回调函数</p>
</td>
</tr>
<tr>
<td>
<p>error</p>
</td>
<td>
<p>Function</p>
</td>
<td>
<p>请求失败时被调用的函数</p>
</td>
</tr>
<tr>
<td>
<p>global</p>
</td>
<td>
<p>Boolean</p>
</td>
<td>
<p>默认为true。表示是否触发全局Ajax事件</p>
</td>
</tr>
</tbody>
</table>

$.ajax()方法是jQuery最底层的Ajax实现，可以用来代替前面所有的方法

如使用$.ajax()方法代替$.getScript()方法：

	$(function(){
	$("#send").click(function(){
	$.ajax({
	type:"GET",
	url:"test.js",
	dataType:"script"
	});
	});
	});

再如使用$.ajax()方法代替$.getJSON()方法：

	$(function(){
	$("#send").click(function(){
	$.ajax({
	type:"GET",
	url:"test.json",
	dataType:"json",
	success:function(data){
	$("#resText").empty();
	var html = "";
	$.each(data,function(commentIndex,comment){
	html += "<div class='comment'><h6>" + comment["username"] + ":</h6><p class='para'>" + comment["comment"] + "</p></div>";
	});
	$("#resText").html(html);
	}
	});
	});
	});