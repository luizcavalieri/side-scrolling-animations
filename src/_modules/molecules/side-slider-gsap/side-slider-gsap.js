'use strict';

import $ from "jquery";

import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap';

import debounce from "lodash/debounce";
import SweetScroll from "sweet-scroll";

export default class SideSliderGsap {
  constructor() {
    if(!$('.gsap').length) return false;
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
      tweenMax = new TweenMax(),
      isForward = true,
      numOfSteps = 0;


    getStepNumber();
    scrollTrigger();
    // $body.addClass('no-overflow');
    scrollingDown(0, isForward);
    horizontalScroll();


    function getStepNumber(){

      $('div.step').each(function(){
          numOfSteps++;
          console.log(numOfSteps);
      });
    }


    function scrollTrigger(){

      $(window).on('DOMMouseScroll mousewheel wheel', debounce(function(event){
        console.log('scrolling');

        if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
          console.log('scrolling down: '+ step);
          console.log('Num of steps: '+ numOfSteps);
          step >= numOfSteps ? step = numOfSteps-1 : step++;
          scrollingDown(step, isForward);
        } else {
          console.log('scrolling up: '+ step);
          step < 1 ? step = 0 : step--;
          scrollingDown(step, isForward);
        }

      }, 400, optionsDebounce));
    }

    function scrollingDown(stepNum, isForwardScope) {

      TweenMax.to(window, 1, {
        scrollTo:
          {
            y:"#image3",
            offsetY:70
          }
        }
      );

      let image = $('#image3');
      TweenMax.to(image, 2, {scrollTo:{y:400, autoKill:false}, ease:Power2.easeOut});



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
        // $(window).scroll(function(){
        //
        //   $('.horizontal-scroll')
        //     .css(
        //       'transform',
        //       'translate3d('
        //       + $(this).scrollTop()*-1 +
        //       'px, '
        //       + $(this).scrollTop()*1 +
        //       'px, 0)');
        //
        // }).scroll();
    }
  }
}
