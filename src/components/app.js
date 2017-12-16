angular.module('video-player')
  .component('app', {
    // bindings: {
    //   videos: '<'
    // },

    controller: function () {
      this.videos = window.exampleVideoData;
      this.video = this.videos[0];
      this.url = `https://www.youtube.com/embed/${this.video.id.videoId}`;
      this.onClick = (video) => {
        debugger;
        console.log(video);
        this.video = video;
        this.url = `https://www.youtube.com/embed/${this.video.id.videoId}`;
        console.log(this.url);
      };
    },

    templateUrl: 'src/templates/app.html'
  });
