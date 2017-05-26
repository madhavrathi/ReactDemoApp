import React from 'react';

//{video} below in arguement is equal to
// const video = props.video
//it is like saving prop.video in variable video
//ES6 rocks
const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
 <li onClick={() => onVideoSelect(video)} className="list-group-item">
    <div className="video-list media">
       <div className="media-left">
         <img className="media-object" src ={imageUrl} />
       </div>

       <div className="media-body">
         <div className="media-heading">{video.snippet.title}</div>
       </div>
    </div>
 </li>
  );
};

export default VideoListItem;
