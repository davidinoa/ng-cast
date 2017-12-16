angular.module('video-player')
  .component('app', {
    // bindings: {
    //   videos: '<'
    // },

    controller: function () {
      this.videos = window.exampleVideoData;
      this.onClick = () => console.log('hello');
    },

    templateUrl: 'src/templates/app.html'
  });
