angular.module('video-player')
  .component('app', {

    controller: function (youTube) {
      this.selectVideo = (video) => {
        console.log(video);
        this.currentVideo = video;
      };
      this.videos = [];
      this.currentVideo = null;
      this.searchResults = (response) => {
        console.log(response);
        this.videos = response;
        this.currentVideo = this.videos[0];
      };
      youTube.getVideos('funny golden retrievers', this.searchResults);
    },

    templateUrl: 'src/templates/app.html'
  });


