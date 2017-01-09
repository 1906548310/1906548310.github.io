$(document).ready(function() {
	$('.navbar-nav>li').click(function(){
		//先遍历ul中的li，找到class为active的li，移除它的样式
		//获取包含所有li的数组
		var num = document.getElementsByTagName('li');
		
		//找到class为active的li
		for (var i = 0; i < num.length; i++) {
			if(num[i].className == "active" || "dropdown active open") {
				num[i].className = '';
			}
		}
		//接着将active样式添加到所点击的这个元素上
		$(this).addClass("active");
	});

	$('#myNavbar > ul > li:first-child').click(function() {
		$('.mask_index div').css({
			'visibility':'hidden',
			'top':'150%'
		});
	});

	$('#myNavbar > ul > li:nth-child(2)').click(function() {
		$('#blog_center').css('visibility','visible').css({
			'top':'55%',
			'transform':'top',
			'transition':'0.5s'
		});
		$('#work_center').css('visibility','hidden').css('top','150%');
		$('#resume_center').css('visibility','hidden').css('top','150%');
	});
	$('#myNavbar > ul > li:nth-child(3)').click(function() {
		$('#work_center').css('visibility','visible').css({
			'top':'55%',
			'transform':'top',
			'transition':'0.5s'
		});
		$('#blog_center').css('visibility','hidden').css('top','150%');
		$('#resume_center').css('visibility','hidden').css('top','150%');
	});
	$('#myNavbar > ul > li:nth-child(4)').click(function() {
		$('#resume_center').css('visibility','visible').css({
			'top':'55%',
			'transform':'top',
			'transition':'0.5s'
		});
		$('#work_center').css('visibility','hidden').css('top','150%');
		$('#blog_center').css('visibility','hidden').css('top','150%');
	});
});

