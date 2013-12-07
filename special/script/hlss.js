$(function(){
	randomitem();
	$('#active').toggle(function(){
		$('.m').removeClass('f1 f2 f3').addClass('f2');
		},function(){
			$('.m').removeClass('f1 f2 f3').addClass('f1');
			});
	$('#bt_toggleall').toggle(function(){
		$('.m').removeClass('f1 f2').addClass('f3');
		$('.s',this).text('View');
		},function(){
			$('.m').removeClass('f1 f2 f3');
			$('.s',this).text('Hide');
			}).click(function(){
				$('#result').hide();
				});
	$('.direction').tap(function(){
		var d = $(this).attr('id');
		$('.m').find('.ac').removeClass('ac');
		$('.'+d+' .r').addClass('ac');
		$('.direction').attr('disabled',true);
		$('#bt_count').attr('disabled',false);
		$('#panel').show();
		});
	$('#bt_randomitem').click(function(){
		randomitem();
		rmflight();
		});
	
	// jQuery Mobile
	$('#bt_intro').tap(function(){
		restart();
		notice();
	});
	$('#bt_num').tap(function(){
		num();
	});
	$('#bt_count').click(function(){
		count();
	});
	$('#bt_return').tap(function(){
		restart();
	});

	});

function randomitem(){
	var items = [
	'蘇氏牛肉麵',
	'蘇氏牛肉麵',
	'麥噹噹',
	'麥噹噹',
	'大食代',
	'鐵鍋一居',
	'青年餐廳',
	'馬華拉麵',
	'節食吧!'
	];
	items.sort(randomsort);
	for(i=0;i<items.length;i++){
		$('.c .t:eq('+i+')').text(items[i]);
		}
	}
function randomsort(a, b) {
	return Math.random()>.5 ? -1 : 1;//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}
function restart(){
	$('.m').removeClass('f1 f2').addClass('f3').find('.ac').removeClass('ac');
	$('.direction').attr('disabled',false);
	$('#bt_num').attr('count',1);
	$('#cur').addClass('t').text('Count');
	$('#bt_count').attr('disabled',true);
	$('.wshade,#active,.return,.start,.showall,.random,#result').hide();
	$('#shade').addClass('cross');
	rmflight();
	}
function num(){
	$('#cur').removeClass('t');
	$('#shade').addClass('cross');
	$('.m').removeClass('f1 f2').addClass('f3');
	var a = $('#cur').text();
	if(a == 'Count'){
		a = 0;
		}
	a++;
	if(a>0){
		$('.showall,.random').hide();
		$('.return,.start').show();
		}
	$('#cur').text('+'+a);
	$('#result').hide();
	rmflight();
	}
function count(){
	$('#shade').removeClass('cross').addClass('cover');
	var t3 = parseInt($('#cur').text())-1;
	$('.return,.start,.showall,.random').hide();
	if(t3<0){
		result();
		$('.start').hide();
		$('#cur').addClass('t').text('Count')
		$('.return,.showall,.random').show();
		$('#shade').removeClass('cover');
		return false;
		}
	var t = setTimeout(count,300);
	$('#cur').text(t3);
	$('.rice,.stick').show();
	$('#active').trigger('click');
	}
function result(){
	var dir = $('.ac .t').parents('.d').attr('class').slice(-2);
	var f = $('.m').attr('class').slice(-2);
	var result = $('.'+dir+'d .'+f+'f .t').text();
	$('.'+dir+'d .'+f+'f .t').addClass('flight');
	if(result.slice(-1) == '!'){
		$('.rice,.stick').hide();
		}
	$('#result .h1 span').text(result);
	$('.visit').attr('href','http://t.qq.com/k/'+result).attr('title',result);
	$('#result').show();
	$('body').bind('click',function(){
		$('#result').hide();
		});
	}
function go(){
	$('#result').hide();
	}
function rmflight(){
	$('.ti').find('.flight').removeClass('flight');
	}
function notice(){
	$('.m .d').find('.r').addClass('ac');
	}