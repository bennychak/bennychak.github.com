---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

jQuery工具部分在前三篇中已经归纳完毕备查。从本章起本文进入应用范例部分，进入范例部分后，所有的代码我都使用最扼要的方式重写并详细注释，较大的例子按功能拆分成为较小的例子来说明。

##一、表单应用

###1 获取和失去焦点改变样式(P142)

	$(function(){
	$(":input").focus(function(){    //获取焦点触发事件
	$(this).addClass("focus");    //增加样式
	}).blur(function(){    //失去焦点触发事件
	$(this).removeClass("focus");    //移除样式
	});
	})

###2 多行文本框触发事件改变文本框高度(P144)

	$(function(){
	var $comment = $("#comment");    //获取文本框
	$(".bigger").click(function(){    //点击放大按钮(.bigger)触发事件
	if ($comment.height() < 500){    //判断实际高度
	$comment.height($comment.height() + 50);    //放大高度
	}
	});

	$(".smaller").click(function(){    //点击缩小按钮(.smaller)触发事件
	if (!$comment.is(":animated")){    //判断是否处于动画队列中，避免堆积动画队列
	if ($comment.height() > 500){    //判断实际高度
	$comment.animate({height:"+=50"},400);    //以动画方式缩小高度
	}
	}
	});
	}) 

###3 文本框滚动条高度变化(P145)

	$(function(){
	var $comment = $("#comment");    //获取文本框
	#(".up").click(function(){    //点击向上滚动按钮(.up)触发事件
	if(!$comment.is(":animated")){    //判断是否处于动画队列中，避免堆积动画队列
	$comment.animate({scrollTop:"-=50"},400);    //以动画方式向上滚动滚动条
	}
	});    //（向下滚动代码从略）
	}) 

###4 复选框全选、全不选、反选等(P146)

	$(function(){
	$("#checkedAll").click(function(){    //点击触发全选事件
	$('[name=items]:checkbox').attr('checked',true);
	//使用attr方法更改checked属性（注意属性选择器），反选设置false值即可
	});
	$("#checkedRev").click(function(){    //点击触发反选事件
	$('[name=items]:checkbox').each(function(){    //循环每一个复选框
	$(this).attr("checked", !$(this).attr("checked"));    //设置反值（jQuery方法）
	});
	});
	});
	//如下使用原生JavaScript设置反选更简单
	$(function(){
	$("checkedRev").click(function(){
	$('[name=items]:checkbox').each(function(){    //循环每一个复选框
	this.checked = !this.checked;    //设置反值（JS原生方法）
	});
	});
	}) 

###5 输出复选框选中的值(P148)

	$("#send").click(function(){    //点击触发事件
	var str="选中的是：\r\n";    //赋值
	$('[name=items]:checkbox:checked').each(function(){    //循环每一个选中的复选框
	str += $(this).val() + "\r\n";    //用val()方法获值并循环赋值
	});
	alert(str);    //输出str
	}) 

###6 用一个复选框来控制全部复选框的全选和反选(P149)

	$("#checkedAll").click(function(){    //触发事件
	if(this.checked){
	$('[name=items]:checkbox').attr("checked", true);    //判断赋值
	}else{
	$('[name=items]:checkbox').attr("checked",false);    //判断赋值
	}
	});
	//因为控制全选的复选框的checked和所有复选框的checked的值是相同的，所以可以省略判断如下
	$("#checkedAll").click(function(){
	$('[name=items]:checkbox').attr("checked", this.checked);
	}) 

###7 全选状态下，任一复选框取消选中，控制全选的复选框则也取消选中；所有复选框同时选中时，控制全选的复选框则也被选中（联动）(P149)

	//思路1：
	$('[name=items]:checkbox').click(function(){    //点击任一复选框
	var flag = true;    //定义flag变量，初始值为true
	$('[name=items]:checkbox').each(function(){    //循环复选框组
	if (!this.checked){
	flag = false;    //判断当存在一个未选中的复选框时，flag = false
	}
	});
	$('#checkedAll').attr('checked',flag);    //将flag变量赋给控制全选的复选框的checked属性
	});

	//思路2：
	$('[name=items]:checkbox').click(function(){    //点击任一复选框
	var $tmp = $('[name=items]:checkbox');    //定义临时变量（避免重复使用选择器）
	$('#checkedAll').attr('checked', $tmp.length == $tmp.filter(':checked').length);
	//使用filter()方法筛选出选中的复选框，和全部复选框的对象比较 length，
	//然后将返回的布尔值直接赋给#checkedAll
	})

###8 下拉框应用，将一个下拉框中已选中的选项（或者全部选项）添加到另一个下拉框中(P150)

	$('#add').click(function(){
	var $options = $('#select1 option:selected');    //获取选中项
	$options.appendTo('#select2');    //追加给另一个下拉框
	});
	$('#addAll').click(function(){
	var $options = $('#select1 option');    //获取全部项
	$options.appendTo('#select2');    //追加给另一个下拉框
	});
	$('#select1').dblclick(function(){    //双击某个选项将其追加给另一个下拉框
	var $options = $("option:selected",this);    //获取选中项（注意选择器）
	$options.appendTo('#select2');    //追加给另一个下拉框
	})

###9 表单验证，在每一个有requred类的文本框后加入“\*”以提示必填项(P153)

	$("form :input.required").each(function(){
	var $required = $("<strong class='high'> *</strong>");    //创建元素
	$(this).parent().append($required);    //追加到文档中，注意parent()方法的使用
	})

###10 验证表单的用户名和邮箱格式是否正确(P154)

	$('form :input').blur(function(){    //失去焦点事件
	var $parent = $(this).parent();    //定义临时变量
	$parent.find(".formtips").remove();    //删除以前的提醒元素，避免堆积重复提醒
	//验证用户名
	if ($(this).is('#username')){
	if (this.value=="" || this.value.length < 6){    //判断
	var errorMsg = '请输入至少6位的用户名.';
	$parent.append('<span class="onError formtips">' + errorMsg + '</span>');
	 //追加错误提示样式
	}else{
	var okMsg = '输入正确.';
	$parent.append('<span class="onSuccess formtips">' + okMsg + '</span>');
	 //追加正确提示样式
	}
	}
	// 验证邮箱
	if ($(this).is("#email")){
	if (this.value=="" || (this.value !="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))){
	//判断
	var errorMsg = '请输入正确的E-mail地址.';
	$parent.append('<span class="onError formtips">' + errorMsg + '</span>');
	//追加错误提示样式
	}else{
	var okMsg = '输入正确.';
	$parent.append('<span class="onSuccess formtips">' + okMsg + '</span>');
	 //追加正确提示样式
	}
	}
	})

###11 验证表单，阻止提交(P155)

	$('send').click(function(){
	$("form .required:input").trigger('blur');    //模拟触发blur()事件
	var numError = $('form .onError').length;    //定义numError变量
	if (numError){
	return false;    //判断错误提示个数（长度），如大于0（即存在错误提示）则阻止提交
	}
	alert("注册成功！");
	})

###12 实时验证（输入时验证，比blur()验证更及时）(P156)

	$('form :input').blur(function(){
	//验证代码，见前文
	}).keyup(function(){
	$(this).triggerHandler("blur");    //每次松开按键时模拟触发blur()事件以实时验证
	}).focus(function(){
	$(this).triggerHandler("blur");    //每次得到焦点时模拟触发blur()事件以实时验证

注：triggerHandler()方法只会触发为元素绑定的事件，不会触发浏览器默认的事件。