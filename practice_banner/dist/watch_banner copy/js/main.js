var LTApp=function(){this.INITED=!1};LTApp.prototype={preload:function(e,t){this.sources=e;var n,r=0;if($("*").each(function(e,t){"SCRIPT"!==t.tagName&&"feMergeNode"!==t.tagName&&this.findImageInElement(t)}.bind(this)),0===this.sources.length)t.call();else if(document.images)for(var a=0;a<this.sources.length;a++)n=new Image,n.onload=function(){r++,r===this.sources.length&&t.call()}.bind(this),n.src=this.sources[a];else t.call()},determineUrl:function(e){var t,n="",r=e.currentStyle||window.getComputedStyle(e,null);return""!==r.backgroundImage&&"none"!==r.backgroundImage||""!==e.style.backgroundImage&&"none"!==e.style.backgroundImage?(t=r.backgroundImage||e.style.backgroundImage,t.indexOf("gradient(")===-1&&(n=t.split(","))):"undefined"!=typeof e.getAttribute("src")&&"img"===e.nodeName.toLowerCase()&&(n=e.getAttribute("src")),[].concat(n)},findImageInElement:function(e){var t=this.determineUrl(e),n=navigator.userAgent.match(/msie/i)||navigator.userAgent.match(/Opera/i)?"?rand="+Math.random():"";t.forEach(function(e){e=this.stripUrl(e),""!==e&&this.sources.push(e+n)}.bind(this))},stripUrl:function(e){return e=$.trim(e),e=e.replace(/url\(\"/g,""),e=e.replace(/url\(/g,""),e=e.replace(/\"\)/g,""),e=e.replace(/\)/g,"")}};
"use strict";function App_dream(){return void 0!==App_dream.instance?App_dream.instance:(App_dream.instance=this,LTApp.call(this),App_dream.instance)}App_dream.prototype=new LTApp,App_dream.fn=App_dream.prototype,App_dream.getInstance=function(){return void 0===App_dream.instance&&new App_dream,App_dream.instance},App_dream.fn.init=function(){this.INITED||(this.INITED=!0,this.preload([],this.display.bind(this)))},App_dream.fn.display=function(){this.steps=$(".step"),this.goTo(1),$("body").removeClass("loading"),$("body").addClass("loaded")},App_dream.fn.goTo=function(e){this.steps.each(function(t,a){var s=$(a);s.data("order")==e&&($(".step-active").removeClass("step-active"),s.addClass("step-active"))}),this["step"+e]&&this["step"+e]()},App_dream.fn.goToAndWait=function(e,t){this.steps.each(function(a,s){var r,c=$(s);c.data("order")==e&&(r=$(".step-active"),c.addClass("step-active"),setTimeout(function(){r.removeClass("step-active")},t))}),this["step"+e]&&this["step"+e]()},App_dream.fn.step1=function(){var e=new TimelineMax,t=$(".text1"),a=$(".text2"),s=$(".balls1"),r=$("#secondFrame"),c=$(".text3"),o=$(".square1");square_2=$(".square2"),square_3=$(".square3"),square_4=$(".square4"),square_5=$(".square5"),square_6=$(".square6"),square_7=$(".square7"),square_8=$(".square8"),ThirdFrame=$("#thirdFrame"),hand=$(".hand"),orange=$(".orange"),computer_1=$(".computer1"),computer_2=$(".computer2"),computer_3=$(".computer3"),text_4=$(".text4"),FourthFrame=$("#fourthFrame"),text_5=$(".text5"),lines=$(".lines"),text_6=$(".text6"),object_1=$(".object1"),object_2=$(".object2"),object_3=$(".object3"),object_4=$(".object4"),object_5=$(".object5"),object_6=$(".object6"),LastFrame=$("#lastFrame"),balls_2=$(".balls2"),balls_3=$(".balls3"),text_7=$(".text7"),cta=$(".cta"),window.tl=e,e.addLabel("inicial").from(t,.5,{y:-500},"inicial+=0.5").to(s,.4,{clip:"rect(0, 118px, 364px, 0)"},"inicial+=0.5").to(a,.5,{opacity:1},"intro+=0.9").addLabel("second_screen").to(r,.3,{opacity:1},"second_screen+=1").from(c,.5,{x:-500},"second_screen+=1.5").staggerTo([o,square_3,square_4,square_2,square_6,square_5,square_7,square_8],.3,{scale:1},.1,"second_screen+=2").addLabel("third_screen").to(ThirdFrame,1,{opacity:1},"third_screen+=0.7").to(computer_1,1,{opacity:1},"third_screen+=1").from(text_4,1,{x:-500},"third_screen+=1").to(computer_2,1,{opacity:1},"third_screen+=1.5").to(computer_3,1,{opacity:1},"third_screen+=2").addLabel("four_sceen").to(FourthFrame,1,{opacity:1},"four_sceen").from(text_5,.6,{x:-300},"four_sceen+=0.6").to(lines,.3,"four_sceen+=1").from(text_6,.6,{x:-300},"four_sceen+=0.6").staggerFrom([object_1,object_3,object_2,object_4,object_6,object_5],.3,{x:-300},.1,"four_sceen+=1").addLabel("last_screen").to(LastFrame,1,{opacity:1},"last_screen+=1").to(balls_2,.4,{clip:"rect(0,74px,375px,0)"},"last_screen+=1.5").to(balls_3,.4,{clip:"rect(0,133px,226px,0)"},"last_screen+=1.5").to(text_7,.3,{scale:1,ease:Back.easeOut},"last_screen+=1.8").to(cta,.5,{scale:1,ease:Back.easeOut},"last_screen+=2"),cta.mouseover(function(){var e=new TimelineMax;e.to(cta,.2,{scale:1.1}).to(cta,.2,{scale:1})})};