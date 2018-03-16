'use strict';
import SweetScroll, { Offset } from 'sweet-scroll';
import $ from 'jquery';

export default class SideSlider {

  constructor() {
    this.name = 'side-slider';
    if(!$('.sweet-scroll')) return false;

    let scrollObj = new SweetScroll(),
        $body = $('body');


    $(window).on('mousewheel', function(){

      // scrollObj.to(
      //   '.image2',
      //   {
      //     header: '.header',
      //     horizontal: true,
      //     vertical: false,
      //     stopPropagation: true,
      //
      //     before: function (scrollObj) {
      //       console.log('before');
      //     },
      //
      //     cancel: function () {
      //
      //     },
      //
      //     complete: function () {
      //       $('.image2').removeClass('image2');
      //       $('.background__green').addClass('image2');
      //
      //     },
      //
      //     step: function () {
      //
      //     },
      //
      //     after: function () {
      //       console.log('after');
      //       scrollObj.destroy();
      //
      //       scrollObj = new SweetScroll();
      //
      //     }
      //   })
      });
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
