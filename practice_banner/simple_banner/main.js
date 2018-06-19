function animate(){
var tl  = new TimelineMax();
var text1       = document.getElementsByClassName("text1");
var text2       = document.getElementsByClassName("text2");
var balls1      = document.getElementsByClassName("balls1");
var secondFrame = document.getElementById("secondFrame");
var text3       = document.getElementsByClassName("text3");
var sqr1        = document.getElementsByClassName("square1");
var sqr2        = document.getElementsByClassName("square2");
var sqr3        = document.getElementsByClassName("square3");
var sqr4        = document.getElementsByClassName("square4");
var sqr5        = document.getElementsByClassName("square5");
var sqr6        = document.getElementsByClassName("square6");
var sqr7        = document.getElementsByClassName("square7");
var sqr8        = document.getElementsByClassName("square8");
var thirdFrame  = document.getElementById("thirdFrame");
var computer1   = document.getElementsByClassName("computer1");
var computer2   = document.getElementsByClassName("computer2");
var computer3   = document.getElementsByClassName("computer3");
var text4       = document.getElementsByClassName("text4");
var fourthFrame = document.getElementById("fourthFrame");
var text5       = document.getElementsByClassName("text5");
var text6       = document.getElementsByClassName("text6");
var lines       = document.getElementsByClassName("lines");
var obj1        = document.getElementsByClassName("object1");
var obj2        = document.getElementsByClassName("object2");
var obj3        = document.getElementsByClassName("object3");
var obj4        = document.getElementsByClassName("object4");
var obj5        = document.getElementsByClassName("object5");
var obj6        = document.getElementsByClassName("object6");
var lastFrame   = document.getElementById("lastFrame");
var balls2      = document.getElementsByClassName("balls2");
var balls3      = document.getElementsByClassName("balls3");
var text7       = document.getElementsByClassName("text7");
var cta         = document.getElementsByClassName("cta");

window.tl = tl;

    tl.addLabel('intro')
      .staggerTo([text1,text2], 0.5, {opacity:1}, 0.5, 'intro+=0.4')
      .to(balls1, 0.3, {clip: 'rect(0,118px,364px,0)'}, 'intro+=0.4')

      .addLabel('squares')
      .to(secondFrame, 0.3, {scale:1}, 'squares+=1')
      .to(text3, 0.5, {opacity:1}, 'squares+=1.5')
      .staggerTo([sqr1,sqr4,sqr7,sqr3,sqr5,sqr8,sqr2,sqr6], 0.2, {scale: 1, ease: Back.easeOut.config(2)}, 0.1, 'squares+=2')

      .addLabel('computer')
      .to(thirdFrame, 1, {opacity:1}, 'computer+=0.7')
      .from(computer1, 1, {x:300, ease: Power1.easeIn}, 'computer+=1.2')
      .to(computer2, 1, {opacity:1}, 'computer+=2.2')
      .to(text4, 1, {opacity:1}, 'computer+=2.7')
      .to(computer3, 1, {opacity:1}, 'computer+=3.2')
      .to([computer1,computer2,computer3], 1, {x:-284, force3D:true}, 'computer+=4.2')

      .addLabel('object')
      .to(fourthFrame, 1, {opacity:1}, 'object')
      .to(lines, 0.3, {clip: 'rect(0,300px,468px,0'}, 'object+=1')
      .staggerTo([text5,text6], 1, {opacity:1}, 0.5, 'object+=1')
      .staggerTo([obj1,obj2,obj3,obj4,obj5,obj6], 0.1, {scale: 1, ease: Back.easeOut.config(2)}, 0.1, 'object+=1.5')

      .addLabel('lastFrame')
      .to(lastFrame, 1, {opacity:1}, 'lastFrame+=1')
      .to(balls2, 0.3, {clip: 'rect(0,74px,375px,0)'}, 'lastFrame+=1.5')
      .to(balls3, 0.3, {clip: 'rect(0,133px,226px,0)'}, 'lastFrame+=1.5')
      .to(text7, 0.5, {opacity:1}, 'lastFrame+=2')
      .to(cta, 0.5, {scale:1, ease: Back.easeOut.config(2)}, 'lastFrame+=2.5')

      console.log("Total duration " + tl.duration() + " seconds");
};