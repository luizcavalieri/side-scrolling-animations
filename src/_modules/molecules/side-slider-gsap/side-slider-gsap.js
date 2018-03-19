'use strict';

import $ from "jquery";

import TweenMax from 'gsap';
import TweenLite from 'gsap';
import TimelineMax from 'gsap';
import ScrollToPlugin from 'gsap';

import debounce from "lodash/debounce";
import SweetScroll from "sweet-scroll";

export default class SideSliderGsap {
  constructor() {
    if(!$('.slider-gsap').lenght) return false;
    this.name = 'side-slider-gsap';
    console.log('%s module', this.name.toLowerCase());


    let scrollObj = new SweetScroll(),
      $body = $('body'),
      step = 0,
      optionsDebounce = {
        'trailing': true,
        'leading': false
      },
      tlOptions = {
        delay: 2, // Number of seconds before animation start
        paused: false, // Default value is false
        repeat: 2, // Number of repeats or -1 for infinite loop
        repeatDelay: 1, // Number of seconds between repeats
        yoyo: false, // If true > A-B-B-A, if false > A-B-A-B
        smoothChildTiming: false, // Controls child tweens and timelines
        useFrames: true // Set timing based on frames (default seconds)
      },
      tl = new TimelineMax({tlOptions}),
      // tweenMax = new TweenMax(),
      // scrollTo = new ScrollToPlugin(),
      isForward = true,
      numOfSteps = 0,
      scrollPosition = 0;

    getStepNumber();
    scrollTrigger();
    // $body.addClass('no-overflow');
    // scrollingDown(0, isForward);
    horizontalScroll();
    animationScroll();

    function getStepNumber(){

      $('div.step').each(function(){
          numOfSteps++;
          console.log(numOfSteps);
      });
    }

    function scrollTrigger(){

      $(window).on('DOMMouseScroll mousewheel wheel', function(event){
        event.preventDefault();

        console.log('scrolling');
        if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
          scrollPosition++;
          step >= numOfSteps ? step = numOfSteps-1 : step++;
          scrollingDown(step, scrollPosition);

          console.log('scrolling down: '+ step);
          console.log('Num of steps: '+ numOfSteps);
          console.log('Scroll position: '+ scrollPosition);
        } else {
          scrollPosition--;
          step < 1 ? step = 0 : step--;
          scrollingDown(step, scrollPosition);

          console.log('scrolling up: '+ step);
          console.log('Num of steps: '+ numOfSteps);
          console.log('Scroll position: '+ scrollPosition);
        }
        return false;

      });
    }

    function animationScroll(){

      let image = $('.step-3');

      // TweenMax
      //   .to($(window), 1, {scrollTo:{y:'.step-3', offsetX:600}});

      $(window).scroll(function(event){
        event.preventDefault();

        let winPos = $(this).scrollTop()*1;

        console.log(winPos);

        // $('.horizontal-scroll')
        //   .css(
        //     'transform',
        //     'translate3d('
        //     + $(this).scrollTop()*-1 +
        //     'px, '
        //     + $(this).scrollTop()*1 +
        //     'px, 0)');

      }).scroll();

    }

    function scrollingDown(stepNum, scrollPosition) {

      let image = $('.step-3');
      // TweenMax.to(image, 2, {
      //   left: scrollPosition*100
      // });

      // TweenMax
      //   .to(image, 2, {scrollTo:{y:400, autoKill:false}, ease:Power2.easeOut});



      // scrollObj.to(
      //   '.step-'+ stepNum,
      //   {
      //     header: '.header',
      //     horizontal: true,
      //     vertical: true,
      //     stopPropagation: true,
      //     updateURL: true,
      //
      //     before: function (scrollObj) {
      //       console.log('before: '+ step);
      //     },
      //
      //     cancel: function () {
      //
      //     },
      //
      //     complete: function () {
      //
      //
      //     },
      //
      //     step: function () {
      //
      //     },
      //
      //     after: function () {
      //       console.log('after');
      //       scrollObj = new SweetScroll();
      //
      //     }
      // })
    }

    function horizontalScroll() {
        $(window).scroll(function(){
          // $('.horizontal-scroll')
          //   .css(
          //     'transform',
          //     'translate3d('
          //     + $(this).scrollTop()*-1 +
          //     'px, '
          //     + $(this).scrollTop()*1 +
          //     'px, 0)');

        }).scroll();

    }


  }
}
