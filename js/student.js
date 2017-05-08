var imgsrc = ["img/mask.jpg","img/water.png","img/background.png","img/logo.png","img/ganggang/2.png",
"img/ganggang/1.png","img/ganggang/3.png","img/ganggang/4.png","img/student/7.png","img/student/8.png","img/student/kt.png",
"img/CC/1.png","img/CC/2.png","img/CC/3.png","img/CC/4.png","img/cheng xing yuan/2.png","img/cheng xing yuan/1.png","img/cheng xing yuan/3.png",
"img/cheng xing yuan/4.png","img/gao min rui/2.png","img/gao min rui/1.png","img/gao min rui/3.png","img/gao min rui/4.png","img/ge wei yin/3.png",
"img/ge wei yin/1.png","img/ge wei yin/2.png","img/ge wei yin/4.png","img/shao ming ming/2.png","img/shao ming ming/1.png","img/shao ming ming/3.png","img/shao ming ming/4.png",
"img/shitou/1.png","img/shitou/2.png","img/shitou/3.png","img/shitou/4.png","img/shi wen xiang/2.png","img/shi wen xiang/1.png","img/shi wen xiang/4.png","img/shi wen xiang/3.png",
"img/wan guo peng/2.png","img/wan guo peng/1.png","img/wan guo peng/3.png","img/wan guo peng/4.png","img/xiao bao/2.png","img/xiao bao/1.png","img/xiao bao/4.png","img/xiao bao/3.png","img/xing fei/3.png",
"img/xing fei/1.png","img/xing fei/4.png","img/xing fei/2.png","img/yuan yu xuan/2.png","img/yuan yu xuan/1.png","img/yuan yu xuan/3.png","img/yuan yu xuan/4.png","img/zhang yu xi/2.png","img/zhang yu xi/1.png",
"img/zhang yu xi/3.png","img/zhang yu xi/4.png","img/zuo yi/1.png","img/zuo yi/2.png","img/zuo yi/3.png","img/zuo yi/4.png"];
var imgsrc1=["img/mask.jpg","img/water.png"];
var r=Math.floor(100/imgsrc.length);
var k1=-40/imgsrc.length;
var sw=document.getElementsByClassName("swiper-wrapper")[0];
var logo=document.getElementById("student");
var prev=document.getElementsByClassName("swiper-button-prev")[0];
var next=document.getElementsByClassName("swiper-button-next")[0];
var gg=document.getElementsByClassName("gg")[0];
var gang=gg.getElementsByTagName("img");
var s_co=document.getElementsByClassName("swiper-container")[0];
var a;
var btn=logo.getElementsByTagName("img")[1];
preload1(imgsrc1,function(){
	preload(imgsrc,function(){
		setTimeout(function(){
			start();
			s_co.style.opacity=1;
		},1500)
	});
})

var mySwiper=new Swiper('.swiper-container',{
	loop:true,
	direction:"horizontal",
	nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    onInit: function(swiper){ 
    	swiperAnimateCache(swiper); //隐藏动画元素 
    	swiperAnimate(swiper); //初始化完成开始动画
	}, 
  	onSlideChangeEnd: function(swiper){ 
  		swiperAnimate(swiper);
    	swiperAnimate(swiper);
    	a = swiper.activeIndex;
    	//每个slide切换结束时也运行当前slide动画
  	} 
});
function start(){
	outer.style.opacity=0;
	logo.style.opacity=1;
	prev.style.opacity=1;
	next.style.opacity=1;
}
btn.addEventListener("click",function(){
	localStorage.setItem("renwu",a);
	location.href="bushui.html";
},false);
