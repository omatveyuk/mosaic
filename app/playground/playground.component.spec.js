'use strict';

describe('pallete', function() {

  // Load the module that contains the `pallete` component before each test
  beforeEach(module('pallete'));

  // Test the controller
  describe('PalleteController', function() {

    it('should create a `pallete` model with 18 colors', inject(function($componentController) {
      var ctrl = $componentController('pallete');

      expect(ctrl.colors.length).toBe(18);
    }));

  });

});