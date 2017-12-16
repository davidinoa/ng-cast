angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
      url: '<'
    },
    // controller: function() {
    //   this.url = ''
    // },

    templateUrl: 'src/templates/videoPlayer.html'
  });
