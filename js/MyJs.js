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
//	footNum.css({'left':(v.w - footNum.width()) / 2});
var btn = $('.btn-group');
	btn.children().eq(0).addClass('active');
	btn.on('click','.btn',function(){
		cnt.eq($(this).index()).addClass('show').siblings().removeClass('show');
		$(this).addClass('active').siblings().removeClass('active');
	})
