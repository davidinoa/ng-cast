angular.module('video-player')
  .component('app', {
    // bindings: {
    //   videos: '<'
    // },

    controller: function () {
      this.videos = window.exampleVideoData;
      this.video = this.videos[0];
      this.onClick = (video) => {
        this.video = video;
      };
    },

    templateUrl: 'src/templates/app.html'
  });
