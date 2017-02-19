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
		$('#blog_center, #work_center, #resume_center').css({
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

	// G2技能分布
	var data = [
	{question: 'Gulp', percent: 0.4},
	{question: 'Git', percent: 0.5},
	{question: 'Angular', percent: 0.6},
	{question: '原生JS', percent: 0.75},
	{question: 'BootStrap', percent: 0.8},
	{question: 'jQuery', percent: 0.8},
	{question: 'CSS', percent: 0.8},
	{question: 'HTML', percent: 0.85}
	];
	var Frame = G2.Frame;
	var frame = new Frame(data); // 加工数据
	frame.addCol('odd',function(obj,index){
	return index % 2;
	});
	var chart = new G2.Chart({
	id: 'c1',
	forceFit: true,
	height: 450
	});
	var defs = {
	'percent': {min: 0,max: 1},
	'odd': {type: 'cat'}
	};
	chart.source(frame,defs);
	chart.tooltip({
	map: {
	  value: 'percent',
	  name: '占比',
	  title: 'question'
	}
	});
	chart.legend(false);
	chart.coord('polar',{inner: 0.1}).transpose();
	chart.interval().position('question*percent')
	.color('odd',function(value){
	return ['rgb(224,74,116)', 'rgb(211,0,57)'][value];
	})
	.label('percent',{offset: -5});
	frame.each(function(obj){
	chart.guide().text([obj.question,0],obj.question + ' ',{
	  textAlign: 'right'
	});
	});
	chart.render();
});

