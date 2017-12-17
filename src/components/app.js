angular.module('video-player')
  .component('app', {

    controller: function (youTube) {
      this.getVideos = query => youTube.getVideos(query, this.searchResults);
      this.selectVideo = video => {
        console.log(video);
        this.currentVideo = video;
      };
      this.videos = [];
      this.currentVideo = null;
      this.searchResults = response => {
        console.log(response);
        this.videos = response;
        this.currentVideo = this.videos[0];
      };
      this.getVideos('funny golden retrievers');
    },

    templateUrl: 'src/templates/app.html'
  });


