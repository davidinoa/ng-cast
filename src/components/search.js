angular.module('video-player')

  .component('search', {
    bindings: {
      getVideos: '<',
      newQuery: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
