---
layout: post
category : Design
tagline: "Supporting tagline"
tags : [前端开发]
---

##二、动画

###1 show()方法和hide()方法

	$("selector").show()
从display:none还原元素默认或已设置的display属性

	$("selector").hide()
设置元素的display样式为none，等于$("selector").css("display","none")  
（注：传入参数后，.show()和.hide()方法同时动画改变元素的width,height和透明属性；传入参数控制显隐速度，单位毫秒，如.show(600)，也可传入fast,normal,slow，fast为200毫秒，normal为400毫秒，slow为600毫秒）

###2 fadeIn()方法和fadeOut()方法

	$("selector").fadeIn()
控制透明度在指定时间内从display:none提高至完全显示

	$("selector").fadeOut()
控制透明度在指定时间内降低至display:none;

###3 slideUp()方法和slideDown()方法

	$("selector").slideUp()
控制元素高度在指定时间内从下到上缩短至display:none;

	$("selector").slideDown()
控制元素高度在指定时间内从display:none延伸至完整高度

###4 自定义动画方法animate()

	$("selector").animate(params,speed,callback);
params:一个包含样式属性及值的映射，比如{property1:"value1",property2:"value2",...}  
speed:速度参数，可选  
callback:在动画完成时执行的参数（即回调函数），可选

常见的动画例子

	<script>
	//自定义动画的例子
	$(function(){
	$("selector").click(function(){
	$(this).animate({left:"500px"},3000); //selector在3秒内向右移动500px
	});
	})
	</script>
 
	<script>
	//累加、累减动画的例子
	$(function(){
	$("selector").click(function(){
	$(this).animate({left:"+=500px"},3000); //连续触发click事件时，在当前位置累加500px
	});
	})
	</script>

	<script>
	//多重动画的例子
	$(function(){
	$("selector").click(function(){
	$(this).animate({left:"500px",top:"300px",height:"+=100px"},3000); //向右下30度方向运动，同时增加高度
	});
	})
	</script>

	<script>
	//按顺序执行多个动画的例子
	$(function(){
	$("selector").click(function(){
	$(this).animate({left:"500px"},3000).animate({top:"300px"},3000); //动画队列
	});
	})
	</script>

###5 动画回调函数

因css()方法不会加入动画队列中，则会马上执行。如若要在动画最后改变selector的css，需要利用回调函数

例：

	<script>
	$("selector").click(function(){
	$(this).animate({property1:"value1"},time).animate({property2:"value2"},time,function(){
	$(this).css("property3","value3"); //css()方法利用回调函数加入动画队列
	});
	})
	</script>
（注：动画回调函数适用于jQuery所有的动画效果方法）

###6 停止动画和判断是否处于动画状态

	$("selector").stop()
结束当前动画，如队列中存在下一个动画则立即执行下一个动画，格式$("selector").stop\(\[clearQueue\]\[,gotoEnd\]\)

切换动画的例子：

	<script>
	$("selector").hover(function(){
	$(this).stop().animate();
	},function(){
	$(this).stop().animate();
	})
	</script>

clearQueue参数设置为true时，将清空当前元素接下来尚未执行完的动画队列

例：

	<script>
	$("selector").hover(function(){
	$(this).stop(true).animate().animate() //如此时触发光标移出事件，直接跳过后面的动画队列，避免执行本队列第二个动画
	},function(){
	$(this).stop(true).animate().animate()
	})
	</script>

gotoEnd参数设置为true时，可将正在执行的动画直接到达结束时刻的状态

	is(":animated")
判断元素是否处于动画状态，可用于防止动画累积

例：

	<script>
	if(!$("selector").is(":animated")){ //判断元素是否正处于动画状态
	 //如果当前没有进行动画，则添加新动画
	}
	</script>

###7 其他动画方法

3个专门用于交互的动画方法：toggle(speed,[callback]); slideToggle(speed,[callback]); fadeTo(speed,opacity,[callback])

	$("selector").toggle()
切换元素的可见状态，如元素隐藏则切换为可见，反之亦然

	$("selector").slideToggle()
通过高度变化来切换元素的可见性

	$("selector").fadeTo()
把元素的不透明度以渐进方式调整到指定的值，如$("selector").fadeTo(600,0.2);以600毫秒速度将内容调整到20%透明度

###8 动画方法概括

toggle()用来代替hide()和show()

slideToggle()用来代替slideUp()和slideDown()

animate()可代替所有动画方法