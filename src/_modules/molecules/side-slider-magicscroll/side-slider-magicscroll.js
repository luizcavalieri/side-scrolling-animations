'use strict';

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import setTween from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import addIndicators from 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import TweenMax from 'gsap';
import $ from 'jquery';

export default class SideSliderMagicscroll {
  constructor() {
    if(!$('.magic-scroll').length) return false;
    this.name = 'side-slider-magicscroll';
    console.log('%s module', this.name.toLowerCase());

    let controller = new ScrollMagic.Controller();

    // let svgContainer = $('object.background-slider');
    //   // svgDoc = svgContainer.contentDocument;
    //
    //
    // $('object').hover(function () {
    //
    //   $(svgDoc).find('Oval-Copy-5').css('r', '100');
    //
    // });



    // define movement of panels
    var wipeAnimation = new TimelineMax()
    // animate to second panel
    //   .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
      .to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
      // .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
      // // animate to third panel
      // .to("#slideContainer", 0.5, {z: -150, delay: 1})
      .to("#slideContainer", 1,   {x: "-50%"})
      // .to("#slideContainer", 0.5, {z: 0})
      // // animate to forth panel
      // .to("#slideContainer", 0.5, {z: -150, delay: 1})
      .to("#slideContainer", 1,   {x: "-75%"})
      // .to("#slideContainer", 0.5, {z: 0});

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "header",
      triggerHook: "onLeave",
      duration: "400%"
    })
      .setPin("#pinContainer", {pushFollowers: false})
      .setTween(wipeAnimation)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "header",
      triggerHook: "onLeave",
      duration: "200%"
    })
      .setPin(".slider-scrollmagic")
      .setTween(wipeAnimation)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

  }
}
