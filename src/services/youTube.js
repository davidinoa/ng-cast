angular.module('video-player')
  .service('youTube', function($http) {
    this.getVideos = (query, cb) => {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          q: query,
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: true,
          type: 'video'
        }
      }).then(function successCallback(response) {
        // console.log(`response success: ${JSON.stringify(response.data.items, null, 2)}`);
        // console.log(data.data.items)
        console.log(cb);
        cb(response.data.items);
        // return response.data.items;
      }, function errorCallback(response) {
        console.log(`response fail: ${JSON.stringify(response, null, 2)}`);
      });
    };
  });
