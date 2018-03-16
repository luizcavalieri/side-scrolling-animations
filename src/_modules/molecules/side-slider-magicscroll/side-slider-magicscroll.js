'use strict';

import ScrollMagic from 'scrollmagic';
import TweenMax from 'scrollmagic';
import $ from 'jquery';

export default class SideSliderMagicscroll {
  constructor() {
    this.name = 'side-slider-magicscroll';
    console.log('%s module', this.name.toLowerCase());

    // var controller = new ScrollMagic.Controller();
    //
    // var scene = new ScrollMagic.Scene();


    // init controller
    // var controller = new ScrollMagic.Controller({vertical: false});
    // // build tween
    // var tween = TweenMax.to("#target", 0.5, {backgroundColor: "green", width: "+=400"});
    // // build scene
    // var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500})
    //   .setTween(tween)
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller);


  }
}
