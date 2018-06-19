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

// global variables
    var tl = new TimelineMax(),
        text_1 = $('.text1'),
        text_2 = $('.text2'),
        balls_1 = $('.balls1'),

        SecondFrame = $('#secondFrame'),
        text_3 = $('.text3'),
        square_1 = $('.square1')
        square_2 = $('.square2'),
        square_3 = $('.square3'),
        square_4 = $('.square4'),
        square_5 = $('.square5'),
        square_6 = $('.square6'),
        square_7 = $('.square7'),
        square_8 = $('.square8'),

        ThirdFrame = $('#thirdFrame'),
        hand = $('.hand'),
        orange = $('.orange'),
        computer_1 = $('.computer1'),
        computer_2 = $('.computer2'),
        computer_3 = $('.computer3'),
        text_4 = $('.text4'),

        FourthFrame = $('#fourthFrame'),
        text_5 = $('.text5'),
        lines = $('.lines'),
        text_6 = $('.text6'),
        object_1 = $('.object1'),
        object_2 = $('.object2'),
        object_3 = $('.object3'),
        object_4 = $('.object4'),
        object_5 = $('.object5'),
        object_6 = $('.object6'),

        LastFrame = $('#lastFrame'),
        balls_2 = $('.balls2'),
        balls_3 = $('.balls3'),
        text_7 = $('.text7'),
        cta = $('.cta');

// debug animation from console
window.tl = tl;
    tl.addLabel('inicial')
      .from(text_1, 0.5, {y: -500}, 'inicial+=0.5')
      .to(balls_1, 0.4, {clip: 'rect(0, 118px, 364px, 0)'}, 'inicial+=0.5')
      .to(text_2, 0.5, {opacity:1}, 'intro+=0.9')

      .addLabel('second_screen')
      .to(SecondFrame, 0.3, {opacity:1}, 'second_screen+=1')
      .from(text_3, 0.5, {x: -500}, 'second_screen+=1.5')
      .staggerTo([square_1,square_3,square_4,square_2,square_6,square_5,square_7,square_8], 0.3, {scale: 1}, 0.1, 'second_screen+=2')

      .addLabel('third_screen')
      .to(ThirdFrame, 1, {opacity:1}, 'third_screen+=0.7')
      .to(computer_1, 1, {opacity: 1}, 'third_screen+=1')
      .from(text_4, 1, {x: - 500}, 'third_screen+=1' )
      .to(computer_2, 1, {opacity:1}, 'third_screen+=1.5')
      .to(computer_3, 1, {opacity:1}, 'third_screen+=2')
      
      .addLabel('four_sceen')
      .to(FourthFrame, 1, {opacity:1}, 'four_sceen')
      .from(text_5, 0.6, {x: -300}, 'four_sceen+=0.6')
      .to(lines, 0.3, 'four_sceen+=1')
      .from(text_6, 0.6, {x: -300}, 'four_sceen+=0.6')
      .staggerFrom([object_1,object_3,object_2,object_4,object_6,object_5], 0.3,{x: -300}, 0.1, 'four_sceen+=1')

      .addLabel('last_screen')
      .to(LastFrame, 1, {opacity:1}, 'last_screen+=1')
      .to(balls_2, 0.4, {clip: 'rect(0,74px,375px,0)'}, 'last_screen+=1.5')
      .to(balls_3, 0.4, {clip: 'rect(0,133px,226px,0)'}, 'last_screen+=1.5')
      .to(text_7, 0.3, {scale:1, ease: Back.easeOut}, 'last_screen+=1.8')
      .to(cta, 0.5, {scale:1, ease: Back.easeOut},'last_screen+=2')

      cta.mouseover(function(){
          var ctaHover = new TimelineMax();
          ctaHover.to(cta, 0.2, {scale:1.1})
                  .to(cta, 0.2, {scale:1});
      });
};