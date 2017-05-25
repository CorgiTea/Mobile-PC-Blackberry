$itemW = 20;   //每组中心图片的宽度
$itemH = 20;   //每组中心图片高度
$timer = 1000  //图片过度时间 1000毫秒
$perMask = 0.7;   //遮罩尺寸百分比

$imgBoxW = $maskW = $itemW * $perMask;  //遮罩宽度 = 图片宽度
$imgBoxH = $maskH = $itemH * $perMask;  //遮罩高度 = 图片高度
$maskOffW = $itemW * (1-$perMask) / 2;  //遮罩偏移宽度 
$maskOffH = $imgBoxOffH = $itemH * (1-$perMask) / 2;  //遮罩偏移高度  即   图片居中的margintop

var $itemNum = $('.item').length; // 图片数量可以随意更改

$('#banner').css("height", $itemH + "rem");

$('.bannerCon').css('height', $itemH + "rem");
$('.bannerCon').css("width", $itemW + "rem");

$('.bannerCon .before').css("width", $maskW + "rem");
$('.bannerCon .before').css("height", $maskH + "rem");
$('.bannerCon .before').css('left', -($maskW + $maskOffW) + "rem");
$('.bannerCon .before').css('top', $maskOffH + "rem");
$('.bannerCon .before img').css('top', $imgBoxH * 0.42 + "rem");



$('.bannerCon .after').css("width", $maskW + "rem");
$('.bannerCon .after').css("height", $maskH + "rem");
$('.bannerCon .after').css('right', -($maskW + $maskOffW) + "rem");
$('.bannerCon .after').css('top', $maskOffH + "rem");
$('.bannerCon .after img').css('top', $imgBoxH * 0.42 + "rem");

$('.bannerCon .scroll').css('height', $itemH + "rem");
$('.bannerCon .scroll').css('width', $itemNum * $itemW + "rem");
$('.bannerCon .scroll').css('left', -$itemW + "rem");


$('.bannerCon .scroll .item').css('width', $itemW + "rem");
$('.bannerCon .scroll .item').css('height', $itemH + "rem");

$('.bannerCon .scroll .item .img-box').css('width', $imgBoxW + "rem");
$('.bannerCon .scroll .item .img-box').css('height', $imgBoxH + "rem");
$('.bannerCon .scroll .item .img-box').css('margin-top', $imgBoxOffH + "rem");
$('.bannerCon .scroll .item .img-box').css('transition', $timer/1000 + "s");

//轮播图动画
var _index1=1;
//右边按钮
$('.after img').click(function(){
	console.log("_index1：" + _index1);
	if(_index1 == $itemNum - 1){
		_index1=$itemNum - 1;
		return;
	}else{
		_index1++;
		$('.scroll').animate({left: -_index1 * $itemW},$timer);
	}
	_2D();
		
});
//左边按钮
$('.before img').click(function(){
	if(_index1==0){
		_index1 = 0;
		return;
	}else{
		_index1--;
		$('.scroll').animate({left: -_index1 * $itemW},$timer);
	}
	console.log("_index1：" + _index1);
	_2D();
});
$('.bannerCon').on({
	'touchstart':function(e) {
		e = e.originalEvent.changedTouches[0];
		console.log(e)
//		startX = e.clientX;
//		marginLeft = parseInt($fig.css('margin-left'));  //获取当前margin-left
	}
})
//图片变形scale
function _2D(){
	$.each($('.scroll .item'), function() {
		if($(this).index() == _index1){
			$('.scroll .item .img-box').css({
				"transform": "scale(1)",
				"-ms-transform": "scale(1)", /* IE 9 */
				"-moz-transform": "scale(1)", /* Firefox */
				"-webkit-transform": "scale(1)", /* Safari and Chrome */
			});
			$(this).children('.img-box').css({
				"transform": "scale(1.1)",
				"-ms-transform": "scale(1.1)", /* IE 9 */
				"-moz-transform": "scale(1.1)", /* Firefox */
				"-webkit-transform": "scale(1.1)", /* Safari and Chrome */
				
			});
		}
	});
}

