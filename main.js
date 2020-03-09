window.onload=function(){
    var style=[],
        link=document.getElementById('link'),
        date=new Date(),
        now=date.getHours();
        if(now<12){alert('亲，早上好！'); }
                else if (now<19) {alert('亲，下午好！');}
                    else{alert('亲，晚上好！');}

    //为button绑定点击函数；
    for(var i=1;i<4;i++){
        style.push(document.getElementById('style'+i));
        style[i-1].onclick=function(i){		//利用立即执行函数创建简单的闭包来传递i；
                                    function clickToChangeStyle(){
                                        link.href="style_"+i+".min.css";
                                        console.log(link.href);
                                    }
                                return clickToChangeStyle;
        }(i);
    }
}