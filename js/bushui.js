var imgsrc=["img/mask.jpg","img/water.png","img/background.png","img/logo.png","img/add water/1.png","img/add water/2.png","img/add water/4.png","img/add water/box-10.png","img/add water/box-15.png","img/add water/box-5.png"
,"img/add water/icon-0.png","img/add water/icon-10.png","img/add water/icon-15.png","img/add water/icon-20.png","img/add water/icon-5.png","img/add water/show.png","img/add water/CC/body.png","img/add water/CC/tou.png"
,"img/add water/cheng xing yuan/body.png","img/add water/cheng xing yuan/tou.png","img/add water/gang gang/body.png","img/add water/gang gang/tou.png","img/add water/gao min rui/body.png","img/add water/gao min rui/tou.png"
,"img/add water/ge wei yin/body.png","img/add water/ge wei yin/tou.png","img/add water/shao ming ming/body.png","img/add water/shao ming ming/tou.png","img/add water/shi tou/body.png","img/add water/shi tou/tou.png","img/add water/shi wen xiang/body.png","img/add water/shi wen xiang/tou.png"
,"img/add water/wan guo peng/body.png","img/add water/wan guo peng/tou.png","img/add water/xiao bao/body.png","img/add water/xiao bao/tou.png","img/add water/xing fei/body.png","img/add water/xing fei/tou.png","img/add water/yuan yu xuan/body.png","img/add water/yuan yu xuan/tou.png"
,"img/add water/zhang yu xi/body.png","img/add water/zhang yu xi/tou.png","img/add water/zuo yi/body.png","img/add water/zuo yi/tou.png","img/ping/1.png","img/ping/2.png","img/ping/3.png","img/ping/7.png","img/ping/8.png"
,"img/ping/9.png","img/ping/btn.png","img/ping/erweima.png","img/ping/fajiang.png","img/ping/head.png","img/ping/tijiao.png","img/ping/white.png"];
var imgsrc1=["img/mask.jpg","img/water.png","img/ping/offf.png","img/ping/on.png"];
var r=Math.floor(100/imgsrc.length);
var k1=-40/imgsrc.length;
var bushui=document.getElementById("bushui");
var tt=document.getElementsByClassName("timer")[0];
var figure=document.getElementsByClassName("figure")[0];
var tou=figure.getElementsByTagName("img")[0];
var body=figure.getElementsByTagName("img")[1];
var biaoqing=document.getElementsByClassName("biaoqing")[0];
var bimg=biaoqing.getElementsByTagName('img');
var headword=document.getElementsByClassName("headword")[0];
var _number=document.getElementsByClassName("number")[0];
var star=document.getElementById("star");
var starindex=star.getElementsByTagName("img");
var result=document.getElementById("result");
var result_btn=result.getElementsByTagName("img");
var num=document.getElementById("num");
var close=document.getElementById("close");
var bigcode=document.getElementById("bigcode");
preload1(imgsrc1,function(){
	preload(imgsrc,function(){
		setTimeout(function(){
			outer.style.display="none";
			bushui.style.display="block"
		},1000)
	})
})


function timerStart(){
	var t=19;
	var lt=100;
	timer=setInterval(function(){
		lt-=5;
		if(lt<0){
			lt=95;
			t--;
		}
		if(t<20 && t>15){
			bimg[3].style.display="block";
		}else if(t>10 && t<15){
			bimg[3].style.display="none";
			bimg[1].style.display="block";
			bimg[4].style.display="block";
		}else if(t>5 && t<10){
			bimg[1].style.display="none";
			bimg[4].style.display="none";
			bimg[2].style.display="block";
			bimg[5].style.display="block";
		}else if(t>0 && t<5){
			bimg[2].style.display="none";
			bimg[5].style.display="none";
			bimg[3].style.display="block";
			bimg[6].style.display="block";	
		}else if(t==0){
			bimg[3].style.display="none";
			bimg[6].style.display="none";
			bimg[7].style.display="block";
		}
		if(t==0 && lt==0){
			clearInterval(timer);
			bushui.style.display="none";
			star.style.display="block";
			_number.innerText=bcount;
			headword.innerText=namearr[locs]+"的水润星值为";
			if(bcount<50){
				starindex[1].style.display="block";
			}else if(bcount>50&&bcount<100){
				starindex[2].style.display="block";
			}else{
				starindex[3].style.display="block";
			}
		}
		tt.innerText=t+":"+((lt<10)?("0"+lt):lt);
	},50)
}
var bol=true;
function yaotou(){
//	if(bol==true){
		tou.style.transform="rotate("+(-5)+"deg)";
		setTimeout(function(){
			tou.style.transform="rotate("+5+"deg)";
			setTimeout(function(){
				tou.style.transform="rotate("+0+"deg)";
			},100)
		},100)
//		bol=false;
//	}else{
//		
//		bol=true;
//	}
		
}
var hand=document.getElementById("hand");
var bcount=0;
var index=0;
timer1 = setInterval(function(){
		index++;
		if(index>2){
			index=1;
		}
		hand.src="img/add water/"+index+".png";
	},300);
biaoqing.addEventListener("touchstart",function(){
	bcount++;
	clearInterval(timer1);
	hand.style.display="none";
	yaotou();
	if(bol==true){
	timerStart();
	}
	bol=false;
})
tou.addEventListener("touchstart",function(){
	bcount++;
	clearInterval(timer1);
	hand.style.display="none";
	yaotou();
	if(bol==true){
	timerStart();
	}
	bol=false;
})
var wh=document.documentElement.clientHeight;
starindex[4].addEventListener("click",function(){
	star.style.display="none";
	result.style.display="block";
	btnFn();
})
result_btn[2].addEventListener("click",function(){
	var phone=/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	if(phone.test(num.value)==true){
		result.style.display="none";
		bigcode.style.display="block";
	}else{
		alert("请输入正确格式");
	}
})
result_btn[3].addEventListener("click",function(){
	result.style.display="none";
	outer2.style.display="block";
})
close.addEventListener("click",function(){
	outer2.style.display="none";
	result.style.display="block";
	btnFn();
})
function btnFn(){
	setTimeout(function(){
		result_btn[2].style.opacity=0;
		setTimeout(function(){
			result_btn[2].style.opacity=1;
			setTimeout(function(){
				result_btn[2].style.opacity=0;
				setTimeout(function(){
					result_btn[2].style.opacity=1;
				},300)
			},300)
		},300)
	},300)
}
var locs=localStorage.getItem("renwu")
var imglocstou=["img/add water/zuo yi/tou.png","img/add water/gang gang/tou.png","img/add water/CC/tou.png","img/add water/cheng xing yuan/tou.png","img/add water/gao min rui/tou.png","img/add water/ge wei yin/tou.png",
"img/add water/shao ming ming/tou.png","img/add water/shi tou/tou.png","img/add water/shi wen xiang/tou.png","img/add water/wan guo peng/tou.png","img/add water/xiao bao/tou.png","img/add water/xing fei/tou.png",
"img/add water/yuan yu xuan/tou.png","img/add water/zhang yu xi/tou.png","img/add water/zuo yi/tou.png","img/add water/gang gang/tou.png"]
var imglocsbody=["img/add water/zuo yi/body.png","img/add water/gang gang/body.png","img/add water/CC/body.png","img/add water/cheng xing yuan/body.png","img/add water/gao min rui/body.png","img/add water/ge wei yin/body.png",
"img/add water/shao ming ming/body.png","img/add water/shi tou/body.png","img/add water/shi wen xiang/body.png","img/add water/wan guo peng/body.png","img/add water/xiao bao/body.png","img/add water/xing fei/body.png",
"img/add water/yuan yu xuan/body.png","img/add water/zhang yu xi/body.png","img/add water/zuo yi/body.png","img/add water/gang gang/body.png"]
tou.src=imglocstou[locs];
body.src=imglocsbody[locs];
var namearr=["左溢","吕绍聪","宋研霏","程星源","高旻睿","葛洧吟","绍明明","佟梦实","史文翔","万国鹏","赵顺然","刑菲","袁雨萱","张予曦","左溢","吕绍聪"]
if(locs==2||locs==5||locs==11||locs==12){
	tou.style.webkitTransformOrigin="50% 80%";
}
var sd=document.getElementById("sd");
var ad=document.getElementsByTagName("audio")[0];
var bolimg=true;
sd.addEventListener("click",function(){
	if(bolimg==true){
		sd.src="img/ping/on.png";
		ad.play();
		bolimg=false;
	}else{
		sd.src="img/ping/offf.png"
		ad.pause();
		bolimg=true;
}
})
var high =$("body").height();
$("#result").on("focus","#num",function(){
	setTimeout(function(){
		$("#result").height(high);
	},20)
});
$("#result").on("blur","#num",function(){
	$("#result").css("height","");
})


















