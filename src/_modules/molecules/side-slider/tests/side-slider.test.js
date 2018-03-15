'use strict';

import SideSlider from '../side-slider';

describe('SideSlider View', function() {

  beforeEach(() => {
    this.sideSlider = new SideSlider();
  });

  it('Should run a few assertions', () => {
    expect(this.sideSlider).toBeDefined();
  });

});
