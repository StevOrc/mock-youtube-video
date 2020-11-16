import React, { Component } from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item video-item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        onClick={() => onVideoSelect(video)}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
