'use strict';

// Register `pallete` component, along with its associated controller and template
angular.
  module('pallete').
  component('pallete', {
    templateUrl: 'pallete/pallete.template.html',
    controller: function PalleteController($scope, palleteService) {
      var self = this;
      $scope.codeColor = "#FFFFFF";
      self.colors = [
        {
          name: 'pink',
          code: '#FF99C2'
        }, {
          name: 'red',
          code: '#FF0000'
        }, {
          name: 'dark red',
          code: '#CC0000'
        }, {
          name: 'orange',
          code: '#FF6600'
        }, {
          name: 'light yellow',
          code: '#FFFE00'
        }, {
          name: 'yellow',
          code: '#FFCC00'
        }, {
          name: 'dark yellow',
          code: '#FF9900'
        }, {
          name: 'light green',
          code: '#CCFF33'
        }, {
          name: 'green',
          code: '#70A300'
        }, {
          name: 'dark green',
          code: '#336600'
        }, {
          name: 'light blue',
          code: '#CCEEFF'
        }, {
          name: 'blue',
          code: '#66CCFF'
        }, {
          name: 'dark blue',
          code: '#0000FF'
        }, {
          name: 'navy',
          code: '#000099'
        }, {
          name: 'violet',
          code: '#6600CC'
        }, {
          name: 'light brown',
          code: '#CC6600'
        }, {
          name: 'dark brown',
          code: '#663300'
        }, {
          name: 'black',
          code: '#000000'
        }, {
          name: 'white',
          code: '#FFFFFF'
        }
      ];

      self.setColor = function setColor(codeColor) {
          self.codeColor = codeColor;
          palleteService.codeColor = codeColor;
 
      };
    }
  });




      
      
      
      
      
      
