angular.module('video-player')
  .component('app', {
    // bindings: {
    //   videos: '<'
    // },

    controller: function () {
      this.videos = window.exampleVideoData;
    },

    templateUrl: 'src/templates/app.html'
  });
