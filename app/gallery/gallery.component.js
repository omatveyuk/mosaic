'use strict';

// Register `gallery` component, along with its associated controller and template
angular.
  module('gallery').
  component('gallery', {
    templateUrl: 'gallery/gallery.template.html',
    controller: function GalleryController($http) {
      var self = this;

      $http.get('gallery/boardTemplates/boardTemplates.json').then(function(response) {
        self.boardTemplates = response.data;
      });
    }
  });