'use strict';

import SideSliderGsap from '../side-slider-gsap';

describe('SideSliderGsap View', function() {

  beforeEach(() => {
    this.sideSliderGsap = new SideSliderGsap();
  });

  it('Should run a few assertions', () => {
    expect(this.sideSliderGsap).toBeDefined();
  });

});
