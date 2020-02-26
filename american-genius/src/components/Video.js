import React, {Component} from 'react';
import YouTube from 'react-youtube';

class Video extends Component {

  _onReady(event) {
    // access to player in all event handlers via event.target
   event.target.pauseVideo();
   event.target.mute();
  }

   _onEnd(event) {
    event.target.playVideo();
   }

  render() {
     const opts = {
       playerVars: { // https://developers.google.com/youtube/player_parameters
         autoplay: 1,
         controls: 0,
         rel: 0,
         showinfo: 0,
         // start: 40,
       }
     };

     return (
    <div className="video-background">
      <div className="video-foreground">
       <YouTube
         videoId="4jtvJrIYaTI"
         opts={opts}
         className="video-iframe"
         onReady={this._onReady}
          onEnd={this._onEnd}
       />
      </div>
    </div>
     );
   }
 }

export default Video;
