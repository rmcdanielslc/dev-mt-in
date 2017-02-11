angular.module('socialApp').controller('mainController', function($scope){
  var pages = ['initial', 'home', 'view', 'find' , 'update'];
  $scope.initial = true;

$scope.togglePage = function(displayView){
  pages.forEach(function(page) {
    if (page === displayView) {
      $scope[page] = true;
    } else {
      $scope[page] = false;
    }
  })
  }
 $scope.createUser = function(user) {
   $scope.defaultUser = user;
   $scope.user = {};
 }




  $scope.profiles = [{
     fullName: 'Dog',
     tagline: 'Woof Woof',
     profileUrl: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg',
     bio: 'I like to eat run and bark at things I think moved'
   },
  {
    fullName: 'Cat',
    tagline: 'Meow Meow',
    profileUrl: 'http://wanna-joke.com/wp-content/uploads/2015/06/cat-laptop-evil1.jpg',
    bio: 'I like to be an asshole for no apparent reason'
  }];


})
