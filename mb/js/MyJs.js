var v = {
				w : $(window).width(),
				h : $(window).height()
			}
//-------------view
var view = $('.view'), viewU = view.children('ul') ,viewI = viewU.children(),
	viewImg = viewI.children();
var footNum = $('footer>div'), footI = footNum.children();
//----------container
var cnt = $('.container');
var i=0;
	cnt.eq(0).addClass('show');
	cnt.each(function(){
		i++;
		$('<button class="btn btn-default">'+i+'</button>').appendTo($('.btn-group'));
	})
var btn = $('.btn-group');
	btn.children().eq(0).addClass('active');
	btn.on('click','.btn',function(){
		cnt.eq($(this).index()).addClass('show').siblings().removeClass('show');
		$(this).addClass('active').siblings().removeClass('active');
	})
//----------按钮样式
var icon = $('.navbar-inverse .navbar-toggle .icon-bar'), navbarbtn = $('.navbar-inverse .navbar-toggle');
	navbarbtn.on('click',function(){
		if(!$(".navbar-collapse").is('[class*="in"]')){
			icon.eq(0).css({'transform':'rotateZ(30deg)'})
			icon.eq(2).css({'transform':'rotateZ(-32deg)'})
		}else{
			icon.eq(0).css({'transform':'rotateZ(0deg)'})
			icon.eq(2).css({'transform':'rotateZ(0deg)'})
		}
		
	})
//----------轮播
var img = $('.imgshow img'), imgfig = $('.imgshow figure');
img.css('width',$('section').width())
imgfig.css('width',$('img').width() * $('img').size());
var start , marginLeft ,cha ,iNow = 0;
img.each(function(){
	$('<span></span>').appendTo($('.imgshow>nav'));
})
$('.imgshow>nav').css({
	'left':($('.imgshow').width() - $('nav').width()) / 2
})
$('.imgshow span').eq(iNow).addClass('slt');
//-------------------
$('.imgshow').on({
	'touchstart':function(e){
		e = e.originalEvent.changedTouches[0];
		imgfig.css('transition','none');
		start = e.clientX;
		marginLeft = parseInt(imgfig.css('margin-left'));
	},
	'touchmove':function(e){
		e = e.originalEvent.changedTouches[0];
		cha = e.clientX - start;
		imgfig.css('margin-left',cha + marginLeft);
	},
	'touchend':function(e){
		e = e.originalEvent.changedTouches[0];
		imgfig.css('transition','margin-left .5s');
		if(cha < 0 ){
			iNow++;
			if(iNow == $('img').size()) iNow = $('img').size() - 1;
		}
		if(cha > 0){
			iNow--;
			if(iNow == -1) iNow = 0;
		}
		if(Math.abs(cha/3) >35) {
		imgfig.css('margin-left',iNow * -$('.imgshow').width());
		}
		$('.imgshow span').eq(iNow).addClass('slt').siblings().removeClass('slt');
	}
})/*触摸事件结束*/