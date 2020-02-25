import React, {Component} from 'react';
import YouTube from 'react-youtube';

class Video extends Component {

  render() {
     const opts = {
       // height: '390',
       // width: '640',
       playerVars: { // https://developers.google.com/youtube/player_parameters
         autoplay: 1,
         // controls: 0,
         rel: 0,
         showinfo: 0
       }
     };

     return (
    <div className="video-background">
      <div className="video-foreground">
       <YouTube
         videoId="egGUqv8LTkw"
         opts={opts}
         onReady={this._onReady}
         className="video-iframe"
          onEnd={this._onEnd}
       />
      </div>
    </div>
     );
   }

   _onReady(event) {
     // access to player in all event handlers via event.target
     event.target.pauseVideo();
    event.target.mute();
   }

    _onEnd(event) {
     event.target.playVideo();
    }
 }

export default Video;
