---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

## 三、其他应用

### 1 网页字体大小控制（P164）

	<span class="bigger">放大</span>
	<span class="smaller">缩小</span>
	<p id="para"></p>

	<script>
	$(function(){
	$("span").click(function(){
	var thisEle = $("#para").css("font-size");//获取当前字号，带单位
	var textFontSize = parseFloat(thisEle,10);//解析字符串并返回数字,参数10代表10进制
	var unit = thisEle.slice(-2);//slice()方法返回字符串中从指定的字符开始的一个子字符串，
	//用以截取单位
	var cName = $(this).attr("class");//此处和下面的判断很有意思，可以免得再写一遍代码
	if(cName == "bigger"){
	if(textFontSize <= 22){//限制无限放大
	textFontSize += 2;//加大字号
	}
	}else if(cName == "smaller"){
	if(textFontSize >= 12){//限制无限缩小
	textFontSize -= 2;
	}
	}
	$(#para).css("font-size",textFontSize + unit);//记得拼上单位
	});
	});
	</script>

### 2 网页选项卡（P167）

	<div class="tab">
	<div class="tab_menu">
	<ul>
	<li class="selected">选项1</li>
	<li class="selected">选项2</li>
	<li class="selected">选项3</li>
	</ul>
	</div>
	<div class="tab_box">
	<div>选项1对应内容</div>
	<div class="hide">选项2对应内容</div>
	<div class="hide">选项3对应内容</div>
	</div>
	</div>

	<script>
	var $div_li = $(".tab_menu ul li");
	$div_li.click(function(){
	$(this).addClass("selected").siblings().removeClass("selected");//当前选项设置选中状态，
	//其他选项移除选中状态
	var index = $div_li.index(this);//获取当前单击的li元素在全部li元素中的索引，这个很有意思
	$(".tab_box > div").eq(index).show().siblings().hide();//根据选项的索引
	//设置选项对应内容的显示或隐藏状态
	}).hover(function(){
	$(this).addClass("hover");//设置鼠标经过状态
	},function(){
	$(this).removeClass("hover");//移除鼠标经过状态
	});
	</script>

### 3 网页换肤（P169）

通过更换css并且记录进cookie实现换肤功能

	<!--引入带id的css-->
	<link href="css/skin_0.css" rel="stylesheet" type="text/css" id="cssfile" />
	<!--引入cookie插件，本插件下载地址：http://plugins.jquery.com/project/cookie，
	//介绍见本书P237-->
	<script src="js/jquery.cookie.js" type="text/javascript"></script>

	<!--换肤按钮-->
	<ul id="skin">
	<li id="skin_0" title="皮肤0" class="selected">皮肤0</li>
	<li id="skin_1" title="皮肤1">皮肤1</li>
	<li id="skin_2" title="皮肤2">皮肤2</li>
	</ul>

	<script>
	var $li = $("#skin li");
	$li.click(function(){
	$("#" + this.id).addClass("selected").siblings().removeClass("selected");
	//以id为选择器，当前设置选中，其他移除选中
	$("#cssfile").attr("href","css/" + this.id + ".css");//把id赋给href作为css名称，
	//达到换肤目的
	$.cookie("MyCssSkin",this.id,{path: '/', expires:10});//把当前id记入cookie并命名
	});

	var cookie_skin = $.cookie("MyCssSkin");
	if(cookie_skin){//判断cookie存在
	$("#"+cookie_skin).addClass("selected").siblings().removeClass("selected");
	//以cookie记录的id为选择器，当前设置选中，其他移除选中
	$("#cssfile").attr("href","css/" + cookie_skin + ".css");
	//cookie记录的id赋给href作为css名称，达到换肤目的
	$.cookie("MyCssSkin",cookie_skin,{path: '/', expires:10});
	//把cookie记录的id重新记入cookie
	}
	</script>

因click事件中的函数内容与if(cookie_skin){}内的判断内容相似，只有一个变量不同，因此可以通过给函数传递不同的参数，达到多次调用（抽象化）的目的。

	function switchSkin(skinName){
	$("#"+skinName).addClass("selected").siblings().removeClass("selected");
	$("#cssfile").attr("href","css/" + skinName + ".css");
	$.cookie("MyCssSkin",skinName,{path: '/', expires:10});
	}
	$(function(){
	var $li = $("#skin li");
	$li.click(function(){
	switchSkin(this.id);
	});
	var cookie_skin = $.cookie(MyCssSkin");
	if(cookie_skin){
	switchSkin(cookie_skin);
	}
	});