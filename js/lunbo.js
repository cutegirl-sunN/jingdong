$(function(){
	/**/
	var bb=jQuery.noConflict();
	bb("img").lazyload({
		threshold:100,
		event:"scroll",
		effect:"fadeIn",
	});
	var lunbo=$(".lb")[0];
	var left=$("#lunbo-left");
	var Right=$("#lunbo-right");
	var Width=parseInt(getStyle($(".lb-right-box")[0],"width"));
	var imgBox=$(".lb-right")[0];
	$(".lb-right-box")[0].onmouseover=function(){
		left.style.display="block";
		Right.style.display="block";
	}
	$(".lb-right-box")[0].onmouseout=function(){
		left.style.display="none";
		Right.style.display="none";
	}
	left.onclick=function(){
		var last=getLast(imgBox);
		var first=getFirst(imgBox);
		insertBefore(last,first);
		imgBox.style.left=-Width+"px";
		animate(imgBox,{left:0},600)
	}
	Right.onclick=function(){
		animate(imgBox,{left:-Width},600,function(){
			var imgfirst=getFirst(imgBox);
			imgBox.appendChild(imgfirst)
			imgBox.style.left=0+"px";
		});
	}
// 	// banner
	function banner(obj){
		var box=obj;
		var img=$('.ban-pic',box);
		var left=$('.bannerleft',box)[0];
		var right=$('.bannerright',box)[0];
		var circle=$('.bannerlist',box);
		var n=0;
		var flag=true;
		var t=setInterval(move,3000);
		function move(type){
			type=type||'right';
			if(type=='right'){
				if(!flag){
					return;
				}
				flag=false;
				n++;
				if(n>=img.length){
					n=0;
				}
				for(var i=0;i<img.length;i++){
					animate(img[i],{opacity:0},1000)
					circle[i].style.background='#3E3E3E'
				}
			}else if(type=='left'){
				if(!flag){
					return;
				}
				flag=false;
				n--;
				if(n<0){
					n=img.length-1;
				}
				for(var i=0;i<img.length;i++){
					animate(img[i],{opacity:0},1000)
					circle[i].style.background='#3E3E3E'
				}
			}
			animate(img[n],{opacity:1},1000,function(){flag=true});
			circle[n].style.background='#B61B1F';
		}
		box.onmouseover=function(){
			clearInterval(t);
		}
		box.onmouseout=function(){
			t=setInterval(move,3000);
		}
		right.onclick=function(){
			move('right');
		}
		left.onclick=function(){
			move('left')
		}
		for(var i=0;i<circle.length;i++){
			circle[i].index=i;
			circle[i].onclick=function(){
				if(this.index>n){
					n++;
					if(n>=img.length){
						n=0;
					}
					for(var i=0;i<img.length;i++){
						animate(img[i],{opacity:0},1000);
						circle[i].style.background='#3E3E3E';
					}
				}else if(this.index<n){
					n--;
					if(n<=0){
						n=img.length-1;
					}
					for(var i=0;i<img.length;i++){
						animate(img[i],{opacity:0},1000);
						circle[i].style.background='#3E3E3E';
					}	
				}
				animate(img[this.index],{opacity:1},1000);
				circle[this.index].style.background='#B61B1F';
				n=this.index;
			}
		}
	}
	banner($('.banner-box-center')[0])


// 一楼
	var imgs1=$('.yilou');
	var list1=$('.circle-li');
	var Box1=$('.Clothes-right-top andCenter')[0];
	var width1=parseInt(getStyle(Box1,"width"));
	var yilouleft=$('.yilouleft')[0];
	var yilouright=$('.yilouright')[0];
	// console.log(width);
	var now1=0;
	var next1=0;
	var flag1=true;
	var TIME=setInterval(fun,3000);
	function fun(){
		next1=now1+1;
		if(next1>=imgs1.length){
			next1=0;
		}
		imgs1[next1].style.left=width1+'px';
		
		animate(imgs1[now1],{left:-width1},600);
		animate(imgs1[next1],{left:0},600);
		list1[now1].style.background='#3E3E3E';
		list1[next1].style.background='#B61B1F';
		now1=next1;
	}

	Box1.onmouseover=function(){
		clearInterval(TIME);
	}
	Box1.onmouseout=function(){
		TIME=setInterval(fun,3000)
	}
	yilouright.onclick=function(){
		fun();
	}
	yilouleft.onclick=function(){
		next1=now1-1;
		// console.log(next);
		if(next1<0){
			next1=imgs1.length-1;
		}
		imgs[next1].style.left=-width1+'px';
		animate(imgs1[now1],{left:width1},600);
		animate(imgs1[next1],{left:0},600);
		list1[now1].style.background='#3E3E3E';
		list1[next1].style.background='#B61B1F';
		now1=next1;
	}
	for(i=0;i<list1.length;i++){
		list1[i].index=i;
		list1[i].onclick=function(){
			if(this.index>now){
				imgs1[this.index].style.left=width1+'px';
				animate(imgs1[now1],{left:-width1},600);
			}else if(this.index<now1){
				imgs1[this.index].style.left=-width1+'px';
				animate(imgs1[now1],{left:width1},600);
			}
			animate(imgs1[this.index],{left:0},600);
			list1[now1].style.background='#3E3E3E';
			list1[this.index].style.background='#B61B1F';
			now1=this.index;
		}
	}



var xiaolunbo=function(obj){
	var fashion=obj;
	var firstbox=$('.firstbox',fashion);
	var Circle_li=$('.circle-li',fashion);
	var box=$('.food-right-two')[0];
	var width=parseInt(getStyle(box,"width"));
	var foodleft=$('.foodleft',fashion)[0];
	var foodright=$('.foodright',fashion)[0];
	// console.log(firstbox.length)
	var now=0;
	var next=0;
	var flag=true;
	var T=setInterval(fun,2000);
	function fun(){
		next=now+1;
		if(next>=firstbox.length){
			next=0;
		}
		firstbox[next].style.left=width+'px';
		
		animate(firstbox[now],{left:-width},600);
		animate(firstbox[next],{left:0},600);
		Circle_li[now].style.background='#3E3E3E';
		Circle_li[next].style.background='#B61B1F';
		now=next;
	}

	firstbox.onmouseover=function(){
		clearInterval(T);
	}
	firstbox.onmouseout=function(){
		T=setInterval(fun,2000)
	}
	foodright.onclick=function(){
		fun();
	}
	foodleft.onclick=function(){
		next=now-1;
		if(next<0){
			next=firstbox.length-1;
		}
		firstbox[next].style.left=-width+'px';
		animate(firstbox[now],{left:width},600);
		animate(firstbox[next],{left:0},600);
		Circle_li[now].style.background='#3E3E3E';
		Circle_li[next].style.background='#B61B1F';
		now=next;
	}
	for(i=0;i<Circle_li.length;i++){
		Circle_li[i].index=i;
		Circle_li[i].onclick=function(){
			if(this.index>now){
				firstbox[this.index].style.left=width+'px';
				animate(firstbox[now],{left:-width},600);
			}else if(this.index<now){
				firstbox[this.index].style.left=-width+'px';
				animate(firstbox[now],{left:width},600);
			}
			animate(firstbox[this.index],{left:0},600);
			Circle_li[now].style.background='#3E3E3E';
			Circle_li[this.index].style.background='#B61B1F';
			now=this.index;
			next=this.index;
		}
	}
}
xiaolunbo($('.food-right-two')[0]);
xiaolunbo($('.sport-box')[0]);
xiaolunbo($('.life-right-two')[0]);
xiaolunbo($('.maternal-right-two')[0]);	
xiaolunbo($('.foods-right-two')[0]);

	// 楼层lunbo
	function xiaolunbo2(obj){
		var banner=obj;
		var width3=parseInt(getStyle(banner,'width'));
		var img3=$('.threehouse',obj);
		var lis3=$('.Circle-li',obj);
		var sanlouleft=$('.sanlouleft',obj)[0];
		var sanlouright=$('.sanlouright',obj)[0];
		var n=0;
		var next=0;
		var flag=true;
		var t=setInterval(move,2000);
		function move(type){
			var type=type||'right';
			if(!flag){
				return;
			}
			flag=false;
			if(type=='right'){
				next=n+1;
				if(next>=img3.length){
					next=0;
				}
				img3[next].style.left=width3+'px';
				animate(img3[n],{left:-width3},600,Tween.Quad.easeInOut);
			}else if(type=='left'){
				next=n-1;
				if(next<0){
					next=img3.length-1;
				}
				img3[next].style.left=-width3+'px';
				animate(img3[n],{left:width3},600,Tween.Quad.easeInOut);
			}
			animate(img3[next],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
			lis3[n].style.background="#3E3E3E";
			lis3[next].style.background='#B61B1F';
			n=next;
		}
		banner.onmouseover=function(){
			clearInterval(t)
		}
		banner.onmouseout=function(){
			t=setInterval(move,2000);
		}
		sanlouleft.onclick=function(){
			move('left')
		}
		sanlouright.onclick=function(){
			move('right');
		}
		for(var i=0;i<lis3.length;i++){
			lis3[i].index=i;
			lis3[i].onclick=function(){
				if(this.index<n){
					if(!flag){
						return;
					}
					flag=false;
					img3[this.index].style.left=-width3+'px';
					animate(img3[n],{left:width3},600,Tween.Quad.easeInOut);
					
				}else if(this.index>n){
					if(!flag){
						return;
					}
					flag=false;
					img3[this.index].style.left=width3+'px';
					animate(img3[n],{left:-width3},600,Tween.Quad.easeInOut);
				}
				animate(img3[this.index],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
				lis3[n].style.background="#3E3E3E";
				lis3[this.index].style.background='#B61B1F';
				n=this.index;
				next=this.index;
			}
			
		}
	}
	xiaolunbo2($('.silid-top')[0]);
	xiaolunbo2($('.silid-top')[1]);
	xiaolunbo2($('.silid-top')[2]);
	xiaolunbo2($('.silid-top')[3]);
	xiaolunbo2($('.silid-top')[4]);
	xiaolunbo2($('.silid-top')[5]);
	xiaolunbo2($('.silid-top')[6]);


	var floor=$(".flo");
	// console.log(floor.length)
	var floor_nav=$("#elevator");
	var floor_lis=$(".Floor");
	var lou=$(".nub");
	var ziti=$(".Lis");
	var now;
	var CHeight=document.documentElement.clientHeight;
	// var nHeight;
	var floor_flag=true;  
  	var floor_flag1=true;
	for(var i=0;i<floor.length;i++){
		floor[i].h=floor[i].offsetTop;
	}
	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var top=obj.scrollTop;
		// console.log(top);
		//如果top大于每一楼的高度时，
		if(top>=floor[0].h-500){
			floor_nav.style.display="block"
			var nHeight=floor_nav.offsetHeight;
			floor_nav.style.top=(CHeight-nHeight)/2+"px";
			// alert(floor_nav.style.top)
			 if(floor_flag){
		      	floor_flag=false;
		     }floor_flag=true;
		}
		if(top<floor[0].h-500){
			floor_nav.style.display="none";
			 if(floor_flag){
		      floor_flag=false;
		      }floor_flag=true;
		}
		for(var i=0;i<floor.length;i++){
			if(top>=floor[i].h-300){
				for(var j=0;j<floor_lis.length;j++){
					floor_lis[j].style.background="#fff";
					lou[j].style.display="block";
					ziti[j].style.display="none";
				}
				floor_lis[i].style.background="red";
				lou[i].style.display="none";
				ziti[i].style.display="block";
				now=i;
			}
		}
	}
	for(var i=0;i<floor_lis.length;i++){
		floor_lis[i].index=i;
		floor_lis[i].onclick=function(){
			animate(document.body,{scrollTop:floor[this.index].h})
			animate(document.documentElement,{scrollTop:floor[this.index].h})
		}
		floor_lis[i].onmouseover=function(){
			if(now==this.index){
				return;
			}else{
				this.style.background="red";
				lou[this.index].style.display="none";
				ziti[this.index].style.display="block";
			}
		}
		floor_lis[i].onmouseout=function(){
			if(now==this.index){
				return;
			}else{
				this.style.background="#fff";
				lou[this.index].style.display="block";
				ziti[this.index].style.display="none";
			}
		}
	}




	//下拉框
	var down=$(".down")[0];
	var beijing=$(".beijing")[0];
	var zhezhao=$(".zhezhao")[0];
	var adress=$(".adress")[0];
	hover(beijing,function(){
		down.style.display="block";
		this.style.background="#fff";
		adress.style.background='#fff';
		zhezhao.style.display="block";
	},function(){
		down.style.display="none";
		this.style.background="";
		adress.style.background='';
		zhezhao.style.display="none";
	})



	//我的京东下拉
	var selectBox=$(".select-one")[0];
	var threeBox=$(".head-box-one three")[0];
	var zhezhao1=$("#zhezhao1");
	hover(threeBox,function(){
		selectBox.style.display="block";
		this.style.background="#fff";
		selectBox.style.border="1px solid #DDDDDD";
		zhezhao1.style.display="block";
	},function(){
		selectBox.style.display="none";
		this.style.background="";
		zhezhao1.style.display="none";
	})


	var select_two=$(".select-two")[0];
	var twoBox=$(".head-box-two")[0];
	hover(twoBox,function(){
		select_two.style.display="block";
		this.style.background="#fff";
	},function(){
		select_two.style.display="none";
		this.style.background="";
	})


	var selectThree=$(".select-three")[0];
	var threeBox=$(".head-box-one three")[1];
	var zhezhao2=$("#zhezhao2");
	hover(threeBox,function(){
		selectThree.style.display="block";
		this.style.background="#fff";
		selectThree.style.border="1px solid #DDDDDD";
		zhezhao2.style.display="block";
	},function(){
		selectThree.style.display="none";
		this.style.background="";
		zhezhao2.style.display="none";
	})


	var selectFour=$(".select-four")[0];
	var threeBox=$(".head-box-one three")[2];
	var zhezhao3=$("#zhezhao3");
	hover(threeBox,function(){
		selectFour.style.display="block";
		this.style.background="#fff";
		selectFour.style.border="1px solid #DDDDDD";
		zhezhao3.style.display="block";
	},function(){
		selectFour.style.display="none";
		this.style.background="";
		zhezhao3.style.display="none";
	})

	var selectFive=$(".select-five")[0];
	var threeBox=$(".head-box-one three")[3];
	var zhezhao4=$("#zhezhao4");
	hover(threeBox,function(){
		selectFive.style.display="block";
		this.style.background="#fff";
		selectFive.style.border="1px solid #DDDDDD";
		zhezhao4.style.display="block";
	},function(){
		selectFive.style.display="none";
		this.style.background="";
		zhezhao4.style.display="none";
	})




	//购物车下拉
	var shoppingBox=$(".shopping-box")[0];
	var shopping_down=$(".shopping-down")[0];
	hover(shoppingBox,function(){
		shopping_down.style.display="block";
		this.style.background="#fff";
		this.style.height="39px";
		shopping_down.style.border="1px solid #DDDDDD";
	},function(){
		shopping_down.style.display="none";
		this.style.background="";
	})

	//banner 下拉
	var commodity=$(".commodity");
	for (var i = 0; i < commodity.length; i++){
		hover(commodity[i],function(){
			var ban_down=$(".ban-down",this)[0];
			ban_down.style.display="block";
		},function(){
			var ban_down=$(".ban-down",this)[0];
			ban_down.style.display="none";
		})
	}
	
	// 选项卡
	function son(obj){
		var nz=$(".NZ",obj);
		var blank=$('.blank',obj);
		// console.log(blank)
		var clothesBox=$(".Clothes-right-box",obj);
		for(var I=0;I<nz.length;I++){
			nz[I].index=I;
			nz[I].onmouseover=function(){
				for(var J=0;J<nz.length;J++){
					clothesBox[J].style.display="none";
					blank[J].style.display='none';
				}
				clothesBox[this.index].style.display="block";
				blank[this.index].style.display='block';
			}
		}
	}
	son($(".Clothes")[0]);
	son($(".flo beauty")[0]);
	son($(".flo beauty")[1]);
	son($(".flo beauty")[2]);
	son($(".flo beauty")[3]);
	son($(".flo car")[0]);
	son($(".flo car")[1]);
	son($(".flo car")[2]);
	son($(".flo car")[3]);
	son($(".flo car")[4]);
	son($(".flo car")[5]);

	
	var price=$("#low-price-right-bot");
	var MWidth=parseInt(getStyle($(".mation")[0],"height"));
	var mationbox=$("#mation-box");
	var t=setInterval(move,3000);
	function move(){
		animate(mationbox,{height:-MWidth},1000,function(){
			var imgfirst=getFirst(mationbox);
			mationbox.appendChild(imgfirst)
			mationbox.style.height=0+"px";
		});

	}
	price.onmouseover=function(){
		clearInterval(t);
	}
	price.onmouseout=function(){
		t=setInterval(move,3000);
	}

	//定位
	// function dingwei(){
		var dingweiOne=$(".dingwei-one");
		var dingweiBox=$(".dingweibox");
		for(var i=0;i<dingweiOne.length;i++){
			dingweiOne[i].index=i;
			dingweiOne[i].onmouseover=function(){
				for(var j=0;j<dingweiBox.length;j++){
					animate(dingweiBox[j],{right:-70},500)
					dingweiOne[j].style.background="";
				}
				dingweiOne[this.index].style.background="#C81623";
				animate(dingweiBox[this.index],{right:35},500)
			}
			dingweiOne[i].onmouseout=function(){
				dingweiOne[this.index].style.background="";
				animate(dingweiBox[this.index],{right:-70},500)
			}	
		}
		
	var hfselect=$(".hfselect");
	var ywSelectBot=$(".yw-select-bot");
	// console.log(ywSelectBot.length)
	for(var i=0;i<hfselect.length;i++){
		hfselect[i].index=i;
		hfselect[i].onmouseover=function(){
			for(var j=0;j<hfselect.length;j++){
				ywSelectBot[j].style.display="none";
				hfselect[j].style.cssText="border-top:0px;height:29px";
			}
			ywSelectBot[this.index].style.display="block";
			hfselect[this.index].style.cssText="border-top:2px solid #c81623;height:27px"
		}
	}



	var ywBox=$(".yw-box")[0];
	var yw=$(".yw")[1];
	var height=parseInt(yw,"height");
	ywBox.onmouseover=function(){
		animate(yw,{height:-height},500)
	}
	animate(yw,{height:0},500)

})
