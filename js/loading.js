		//预加载函数
var percent=document.getElementsByClassName("percent")[0];
var img=document.getElementById("water");
var outer=document.getElementById("outer");
var g=0;
var k=0;
		function preload(imgarr,callback){
			//计数器 记录图片加载的个数
			var count = 0;
			for (var i=0;i<imgarr.length;i++) {
				//新建图片对象
				var img1 = new Image();
				img1.onload = function(){
					//图片记载完成后执行
					count++;
					percent.innerHTML=(g=g+r)+"%";
					img.style.backgroundPositionY=(k=k+k1)+"%"
					//console.log(count);
					if(count == imgarr.length){
						percent.innerHTML="100%";
						img.style.backgroundPositionY="-40%";
						callback && callback();
					}
				}
				//图片链接赋值一定要放在后面
				//因为放在前面，有可能不触发onload事件
				img1.src = imgarr[i];
			}
		}
		function preload1(imgarr,callback){
			//计数器 记录图片加载的个数
			var count = 0;
			for (var i=0;i<imgarr.length;i++) {
				//新建图片对象
				var img1 = new Image();
				img1.onload = function(){
					//图片记载完成后执行
					count++;
					//console.log(count);
					if(count == imgarr.length){
						callback && callback();
					}
				}
				//图片链接赋值一定要放在后面
				//因为放在前面，有可能不触发onload事件
				img1.src = imgarr[i];
			}
		}