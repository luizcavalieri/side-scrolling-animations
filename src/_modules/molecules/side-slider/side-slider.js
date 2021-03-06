'use strict';
import SweetScroll from 'sweet-scroll';
import $ from 'jquery';
import debounce from 'lodash/debounce';

export default class SideSlider {

  constructor() {
    this.name = 'side-slider';
    if(!$('.sweet-scroll').length) return false;
    console.log('%s module', this.name.toLowerCase());

    let scrollObj = new SweetScroll(),
      $body = $('body'),
      step = 0,
      optionsDebounce = {
        'leading': false,
        'trailing': true
      };


    $body.addClass('no-overflow');

    $(window).on( 'DOMMouseScroll mousewheel', debounce(function(){

      console.log('scrolling' + step);

      scrollObj.to(
        '.step-'+ step,
        {
          header: '.header',
          horizontal: true,
          vertical: true,
          stopPropagation: true,
          updateURL: true,

          before: function (scrollObj) {
            console.log('before: '+ step);
          },

          cancel: function () {

          },

          complete: function () {
            step ++;

          },

          step: function () {

          },

          after: function () {
            console.log('after');
            scrollObj = new SweetScroll();

          }
        })

    }, 200, optionsDebounce));
  }
}


// {
//   trigger: '[data-scroll]',       // Selector for trigger (must be a valid css selector)
//     header: '[data-scroll-header]', // Selector or Element for fixed header (Selector of must be a valid css selector)
//   duration: 1000,                 // Specifies animation duration in integer
//   easing: 'easeOutQuint',         // Specifies the pattern of easing
//   offset: 0,                      // Specifies the value to offset the scroll position in pixels
//   vertical: true,                 // Enable the vertical scroll
//   horizontal: false,              // Enable the horizontal scroll
//   cancellable: true,              // When fired wheel or touchstart events to stop scrolling
//   updateURL: false,               // Update the URL hash on after scroll (true | false | 'push' | 'replace')
//   preventDefault: true,           // Cancels the container element click event
//   stopPropagation: true,          // Prevents further propagation of the container element click event in the bubbling phase
//   quickMode: false,               // Instantly scroll to the destination! (It's recommended to use it with `easeOutExpo`)
//
//   // Callbacks
//   before: null,
//   after: null,
//   cancel: null,
//   complete: null,
//   step: null,
// }
