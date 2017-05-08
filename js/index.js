		var imgsrc1=["img/mask.jpg","img/water.png"];
		var imgsrc = ["img/background.png","img/26.png","img/bottle.png","img/logo.png","img/27.png","img/ganggang.png","img/xingfei.png","img/zuoyi.png","img/CC.png","img/shitou.png"];
		var head=document.getElementsByClassName("head")[0];
		var _button=document.getElementsByClassName("button")[0];
		var _button1=document.getElementsByClassName("button1")[0];
		var youth=document.getElementsByClassName("youth")[0];
		var img2=youth.getElementsByTagName("img");
		var outer1=document.getElementById("outer1");
		var outer2=document.getElementById("outer2");
		var close=document.getElementById("close");
		var r=Math.floor(100/imgsrc.length);
		var k1=Math.ceil(-40/imgsrc.length);
		preload1(imgsrc1,function(){
			preload(imgsrc,function(){
			setTimeout(function(){
				start();
			},1000)
			});
		});
		function start(){
			outer.style.opacity=0;
			outer1.style.opacity=1;
			setTimeout(function(){
				head.style.opacity=1;
				_button.style.opacity=1;
				_button1.style.opacity=1;
			},500);
			setTimeout(function(){
				img2[3].style.webkitAnimation="img1 1s linear forwards";
			},1500);
			setTimeout(function(){
				img2[4].style.webkitAnimation="img2 1s linear forwards";
				img2[5].style.webkitAnimation="img2 1s linear forwards";
			},2500);
			setTimeout(function(){
				img2[6].style.webkitAnimation="img3 1s linear forwards";
				img2[7].style.webkitAnimation="img3 1s linear forwards";
			},3500);
			setTimeout(function(){
				img2[0].style.opacity=1;
			},4500);
			setTimeout(function(){
				img2[1].style.opacity=1;
			},4800);
			setTimeout(function(){
				img2[2].style.webkitAnimation="scale .5s forwards"
			},5000);
		}
		close.addEventListener("click",function(){
			outer2.style.opacity=0;
			outer1.style.opacity=1;
			outer2.style.zIndex=-1;
		},false);
		_button1.addEventListener("click",function(){
			outer1.style.opacity=0;
			outer2.style.opacity=1;
			outer2.style.zIndex=0;
		},false);
		_button.addEventListener("click",function(){
			location.href="student.html";
		})