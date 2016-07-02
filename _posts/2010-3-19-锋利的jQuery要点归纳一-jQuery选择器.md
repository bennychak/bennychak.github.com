---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

## 1 基本选择器

	$(#id)
根据给定的id匹配一个元素

	$(.class)
根据给定的类名匹配元素

	$(element)
根据给定的元素名匹配元素

	$(\*)
匹配所有元素

	$(selector1,selector2,...,selectorN)
将每一个选择器匹配到的元素合并后一起返回

## 2 层次选择器

	$("ancestor descendant")
选取ancestor元素里的所有descendant（后代）元素

	$("parent > child")
只选取parent元素下的child（子层级）元素，与$("ancestor descendant")有区别，前者选择所有后代元素（含且不限于子层级）

	$('prev + next')
选取紧接在prev元素后的next元素

	$('prev ~ siblings')
选取prev元素之后的next元素

## 3 过滤选择器

### 3.1 基本过滤选择器

	$("selector:first")
选取第一个元素

	$("selector:last")
选取最后一个元素

	$("selector:not(selector2)")
去除所有与给定选择器匹配的元素

	$("selector:even")
选取索引是偶数的所有元素，索引从0开始

	$("selector:odd")
选取索引是奇数的所有元素，索引从0开始

	$("selector:eq(index)")
选取索引等于index的元素，index从0开始

	$("selector:gt(index)")
选取索引大于index的元素，index从0开始

	$("selector:lt(index)")
选取索引小于index的元素，index从0开始

	$(":header")
选取所有的标题元素，如h1,h2,h3等等

	$(":animated")
选取当前正在执行动画的所有元素

### 3.2 内容过滤选择器

	$(":contains(text)")
选取含有文本内容为"text"的元素

	$(":empty")
选取不包含子元素或者文本的空元素

	$(":has(selector2)")
选取含有选择器所匹配的元素的元素

	$(":parent")
选取含有子元素或者文本的元素

### 3.3 可见性过滤选择器

	$(":hidden")
选取所有不可见的元素

	$(":visible")
选取所有可见的元素

### 3.4 属性过滤选择器

	$("selector[attribute]")
选取拥有此属性的元素

	$("selector[attribute=value]")
选取属性的值为value的元素

	$("selector[attribute!=value]")
选取属性的值不等于value的元素

	$("selector[attribute^=value]")
选取属性的值以value开始的元素

	$("selector[attribute$=value]")
选取属性的值以value结束的元素

	$("selector[attribute\*=value]")
选取属性的值含有value的元素

	$("selector[selector2][selectorN]")
用属性选择器合并成一个复合属性选择器，满足多个条件。每选择一次，缩小一次范围，如$\("div\[id\]\[title$='test'\]"\)选取拥有属性id，并且属性title以"test"结束的&lt;div&gt;元素

### 3.5 子元素过滤选择器

	$(":nth-child(index/even/odd/equation)")
选取每个父元素下的第index个子元素或者奇偶元素，index从1算起

	$("selector:first-child")
选取每个父元素的第一个子元素

	$("selector:last-child")
选取每个父元素的最后一个子元素

	$("selector:only-child")
如果某个元素是它父元素中唯一的子元素，那么将会被匹配。如果父元素中含有其他元素，则不会被匹配

### 3.6 表单对象属性过滤选择器

	$("selector:enabled")
选取所有可用元素

	$("selector:disabled")
选取所有不可用元素

	$("selector:checked")
选取所有被选中的元素（radio,checkbox）

	$("selector:selected")
选取所有被选中的选项元素（select）

## 4 表单选择器

	$(":input")
选取所有的&lt;input&gt;,&lt;textarea&gt;,&lt;select&gt;,&lt;button&gt;元素

	$(":text")
选取所有的单行文本框

	$(":password")
选取所有的密码框

	$(":radio")
选取所有的单选框

	$(":checkbox")
选取所有的复选框

	$(":submit")
选取所有的提交按钮

	$(":image")
选取所有的图像按钮

	$(":reset")
选取所有的重置按钮

	$(":button")
选取所有的按钮

	$(":file")
选取所有的上传域

	$(":hidden")
选取所有不可见元素