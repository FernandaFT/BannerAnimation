'use strict';

// Main Application
function App_dream() {
    if (App_dream.instance !== undefined) {
        return App_dream.instance;
    } else {
        App_dream.instance = this;
    }
    LTApp.call(this);
    return App_dream.instance;
}
App_dream.prototype = new LTApp();
App_dream.fn = App_dream.prototype;

// Singleton thing
App_dream.getInstance = function() {
    if (App_dream.instance === undefined) {
        new App_dream();
    }
    return App_dream.instance;
}

//Initialize your app, surcharge with whatever needed
App_dream.fn.init = function() {
    if (!this.INITED) {
        this.INITED = true;

        // Add the images url you want to preload in the empty array on the first parameter
        this.preload([], this.display.bind(this));
    }
};

// Shows everything, start animating
App_dream.fn.display = function() {
    this.steps = $('.step');
    this.goTo(1);
    $('body').removeClass('loading');
    $('body').addClass('loaded');
};

// Display the given step
App_dream.fn.goTo = function(stepNumber) {
    this.steps.each(function(i, el) {
        var $el = $(el);

        if ($el.data('order') == stepNumber) {
            $('.step-active').removeClass('step-active');
            $el.addClass('step-active');
        }
    });

    if (this['step' + stepNumber]) {
        this['step' + stepNumber]();
    }
};

// Display the given step
App_dream.fn.goToAndWait = function(stepNumber, seconds) {
    this.steps.each(function(i, el) {
        var $el = $(el);
        var $old;

        if ($el.data('order') == stepNumber) {
            $old = $('.step-active');
            $el.addClass('step-active');

            setTimeout(function() {
                $old.removeClass('step-active');
            }, seconds);
        }
    });

    if (this['step' + stepNumber]) {
        this['step' + stepNumber]();
    }
};


App_dream.fn.step1 = function() {

// Global variables
    var tl = new TimelineMax();

// debug animation from console
window.tl = tl;
  tl.addLabel('inicial')
  .to(logo, 0.5, 'inicial+=0.5')

  .addLabel('second_screen')
  .to(secondFrame, 0.5, {opacity:1}, 'second_screen+=1.8')
  .to(girlSitting, 2, {x:-160}, 'second_screen+2.5')
  .to(firstText, 2, {opacity:0, y:100}, 'second_screen+=2.5')
  .to(fullDesk,1.5,{scale: 1.6,x:-35,y:0}, 'second_screen+=2.5' )

  .addLabel('third-screen')
  .to(thirdFrame, 0.5, {opacity:1}, 'third-screen+=0.5')
  .to(flyGirl2, 3 , {scale:1, x:700,y:-30,ease:Power2.easeInOut}, 'third-screen+=0.5')

  .addLabel('fourth_screen')
  .to(fourthFrame, 1, {opacity:1}, 'fourth__screen+=0.6')
  .to(secondText, 1, {opacity:1}, 'fourth__screen+=2')

  .addLabel('last_screen')
  .to(fiveFrame, 0.3, {opacity:1}, 'last_screen+=1')
  .staggerTo([text3, text4, logo2], 0.3, {opacity:1}, 0.2, 'last_screen+=2.4')
  .to(cta, 0.5, {scale:1, ease: Back.easeOut},'last_screen+=2.6')

  cta.mouseover(function(){
      var ctaHover = new TimelineMax();
      ctaHover.to(cta, 0.2, {scale:1.1})
              .to(cta, 0.2, {scale:1});
  });
};