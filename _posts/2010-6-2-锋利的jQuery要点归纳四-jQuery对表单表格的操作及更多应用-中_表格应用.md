---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

## 二、表格应用

### 1 表格隔行变色（:odd和:even选择器 P157） 

	$(function(){
	$("tr:odd").addClass("odd"); //奇数行添加样式
	$("tr:even").addClass("even"); //偶数行添加样式（:odd和:even选择器中索引从0开始）
	})

### 2 设定含有指定文字内容的某一行变色（:contains选择器 P158） 

	$(function(){
	$("tr:contains('内容')").addClass("selected");
	})

### 3 单选框控制表格行高亮（find()方法；:radio，:checked，:has选择器 P158） 

	//DOM如：<table><tr><td><input type="radio" /></td></tr>...</table>
	$(function(){
	$("tr").click(function(){
	$(this).addClass("selected").siblings().removeClass("selected").end()
	.find(":radio").attr("checked",true);
	$("table :radio:checked").parent().parent().addClass("selected");
	//初始化表格时如有单选框默认选中也需要处理
	//也可写作$("table :radio:checked").parent("tr").addClass("selected");
	//或者$("tbody>tr:has(:checked)").addClass("selected");
	});
	})

### 4 复选框控制表格行高亮（:has选择器；使用hasClass()方法进行判断 P160） 

	$("tr:has(:checked)").addClass("selected"); //进入页面时，处理已被选中的表格行

	$("tr").click(function(){
	if ($(this).hasClass("selected")){ //判断是否含有此样式
	$(this).removeClass("selected").find(":checkbox").attr("checked",false);
	}else{
	$(this).addClass("selected").find(":checkbox").attr("checked",true);
	}
	})
	//上述代码可使用三元运算简化为：
	$("tr").click(function(){
	var hasSelected = $(this).hasClass("selected");
	$(this)[hasSelected?"removeClass":"addClass"]("selected")
	.find(":checkbox").attr("checked",!hasSelected);
	//注：$(this)["addClass"]("selected");等价于$(this).addClass("selected");
	})

### 5 表格展开关闭（toggleClass()和toggle()方法；属性技巧的使用 P161）

DOM如下：

	<table>
	<tr class="parent" id="row_01"><td>标题1</td></tr>
	<tr class="child_row_01"><td>内容1</td></tr>
	<tr class="parent" id="row_02"><td>标题2</td></tr>
	<tr class="child_row_02"><td>内容2</td></tr>
	</table>

	<script>
	$(function(){
	$("tr.parent").click(function(){
	$(this).toggleClass("selected").siblings(".child_" + this.id).toggle();
	});
	})
	</script>

### 6 表格内容筛选显示（filter()方法 P163） 

	$(function(){
	$("tr").hide().filter(":contains('李')").show();
	})

### 7 表格内容按输入筛选显示（P163） 

	$(function(){
	$("#filterName").keyup(function(){
	$("tr").hide().filter(":contains('" + ($(this).val()) + "')").show();
	}).keyup(); //DOM加载完时，绑定事件完成之后立即触发，避免在刷新页面后筛选效果消失
	})