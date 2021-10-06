var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // creates an <iframe> (and YouTube player) after the API code downloads
      // by default, <iframe> displays as inline-block
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '195',
          width: '320',
          videoId: 'h7BTVFOAwkQ',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // API will call this function when the video player is ready
      function onPlayerReady(event) {
        event.target.playVideo();
        // grab select from html then add change.eventlistener
        // when changes, grab video code, call player.loadVideoById()
        let selectButtons = document.querySelector("#btn-group")
          selectButtons.addEventListener("click", changedVideo)
            return;
        
        // let dropDown = document.querySelector("select")
        //     dropDown.addEventListener("change", changedVideo) 
      }

      // the API calls this function when the player's state changes
      //    the function indicates that when playing a video (state=1),
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 100000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
      function changedVideo(event) {
          player.loadVideoById(event.target.value)
      }