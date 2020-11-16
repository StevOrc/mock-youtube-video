import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetail";

class App extends Component {
  state = { videos: [], error: null, selectedVideo: null };

  componentDidMount() {
    this.handletermSubmit("The office");
  }

  handletermSubmit = async (term) => {
    try {
      const {
        data: { items: videos },
      } = await youtube.get("", {
        params: { q: term },
      });
      this.setState({ videos, selectedVideo: videos[0] });
    } catch (ex) {
      this.setState({ error: "on error occured" });
    }
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onTermsubmit={this.handletermSubmit} />
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetails video={this.state.selectedVideo} />
          </div>

          <div className="five wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.handleVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
