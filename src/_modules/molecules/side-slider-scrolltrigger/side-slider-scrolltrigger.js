'use strict';

import ScrollTrigger from 'scrolltrigger-classes';
import $ from 'jquery';
import _ from 'lodash';
import debounce from 'lodash/debounce';

export default class SideSliderScrolltrigger {
  constructor() {
    if(!$('.scroll-trigger').lenght) return false;
    this.name = 'side-slider-scrolltrigger';
    console.log('%s module', this.name.toLowerCase());



    //works on the scroll only

    $(document).ready(function () {

      let scope = {};

      let trigger = new ScrollTrigger({
          toggle: {
            visible: 'none',
            hidden: 'none'
          },
          offset: {
            x: 500,
            y: 500
          },
          addHeight: false,
          once: false
        },document.body, window);

      trigger.callScope = scope;

      scope.customFunction = function(value) {
        console.log('test');
      };

      var callback = debounce(function(scrollLeft, scrollTop, width, height){

      });

      trigger.attach(
        debounce(
          callback,
          1000,
          optionsDebounce
        ));

    });


    $(document).ready(function(){

      $(window).scroll(function(){

        $('.slider-scroll-trigger')
          .css(
            'transform',
            'translate3d('
            + $(this).scrollTop()*-1 +
            'px, '
            + $(this).scrollTop()*1 +
            'px, 0)');

      }).scroll();


    });


    // .bind(
      //   document.querySelectorAll('.someClass [data-scroll]')
      // );

    let optionsDebounce = {
      'leading': true,
      'trailing': false
    };

    let debounceScrolling = function () {
                              console.log('scrolling');
                            };
    $(window).on(
      'scroll',
      debounce(
        debounceScrolling,
        5000,
        optionsDebounce
      ));

  }
}
