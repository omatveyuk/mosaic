'use strict';

// Register `gallery` component, along with its associated controller and template
angular.
  module('gallery').
  component('gallery', {
    templateUrl: 'gallery/gallery.template.html',
    controller: function GalleryController($http, $scope, $window, galleryService) {
      var self = this;

      $http.get('gallery/boardTemplates/boardTemplates.json').then(function(response) {
        $scope.boardTemplates = response.data;
        galleryService.boardTemplate = $scope.boardTemplates[0];
        console.log($scope.boardTemplates);
      });

      self.setBoardTemplate = function setBoard(boardTemplate) {
          self.boardTemplate = boardTemplate;
          galleryService.boardTemplate = boardTemplate;
          // $window.scrollTo(0, 0);
          $window.scrollTo(0, angular.element('pallete').offset().top); 

 
      };
    }
  });