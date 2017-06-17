'use strict';

angular.
  module('playground').
  component('playground', {
    templateUrl: 'playground/playground.template.html',
    controller: function PlaygroundController($scope, palleteService, galleryService) {
      var self = this;
      $scope.shared = palleteService;
      $scope.sharedTemplate = galleryService;
      console.log($scope.sharedTemplate);
      
      $scope.range = [];
      for(var i = 0;i < 20; i++) {
        $scope.range.push(i);
      }

      $scope.board = [];
      for (i = 0; i < 20; i++) {
        $scope.board.push([]);
        for (var j =0; j < 20; j++) {
          $scope.board[i].push("#FFFFFF");
        }
      }

      self.setColor = function setColor(codeColor, row, col) {
        if ($scope.board[row][col] == codeColor) {
          $scope.board[row][col] = "#FFFFFF";
        } else {
          $scope.board[row][col] = codeColor;
        }
      };

      self.clearBoard = function clearBoard() {
        for (var i = 0; i < 20; i++) {
          for (var j =0; j < 20; j++) {
            $scope.board[i][j] = "#FFFFFF";
          }
        }
      };

      self.saveBoard = function saveBoard() {
        console.log($scope.board);
        var b = '[';
        for (var i = 0; i < 20; i++) {
          b += '[';
          for (var j =0; j < 20; j++) {
            b += '"'+$scope.board[i][j]+'",';
          }
          b += '],';
        }
        b += ']';
        console.log(b);
      };
    }

  });


      
      
      
      
      
      
