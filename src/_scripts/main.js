// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import _ from 'lodash';

//elemets
import Link from '../_modules/link/link';

//molescules
import SideSlider from '../_modules/molecules/side-slider/side-slider';
import SideSliderMagicscroll from '../_modules/molecules/side-slider-magicscroll/side-slider-magicscroll';
import SideSliderScrolltrigger from '../_modules/molecules/side-slider-scrolltrigger/side-slider-scrolltrigger';

//organism
import Header from '../_modules/organisms/header/header';


$(() => {
  new Link(); // Activate Link modules logic
  new Header(); // Activate Header modules logic

  new SideSlider(); // Activate SideSlider modules logic
  new SideSliderMagicscroll(); // Activate SideSlider modules logic
  new SideSliderScrolltrigger(); // Activate SideSlider modules logic

  let $body = $('body');

  $(document).ready(function(){
    // $body.addClass('no-overflow');
  });



});


// document.addEventListener('DOMContentLoaded', () => {
//   const scroller = new SweetScroll(
//     {
//       trigger: '[data-scroll]',       // Selector for trigger (must be a valid css selector)
//       header: '[data-scroll-header]', // Selector or Element for fixed header (Selector of must be a valid css selector)
//       duration: 1000,                 // Specifies animation duration in integer
//       easing: 'easeOutQuint',         // Specifies the pattern of easing
//       offset: 0,                      // Specifies the value to offset the scroll position in pixels
//       vertical: true,                 // Enable the vertical scroll
//       horizontal: false,              // Enable the horizontal scroll
//       cancellable: true,              // When fired wheel or touchstart events to stop scrolling
//       updateURL: false,               // Update the URL hash on after scroll (true | false | 'push' | 'replace')
//       preventDefault: true,           // Cancels the container element click event
//       stopPropagation: true,          // Prevents further propagation of the container element click event in the bubbling phase
//       quickMode: false,               // Instantly scroll to the destination! (It's recommended to use it with `easeOutExpo`)
//
//       // Callbacks
//       before: null,
//       after: null,
//       cancel: null,
//       complete: null,
//       step: null,
//     },
//     '.yeogurt-info');
// }, false);
