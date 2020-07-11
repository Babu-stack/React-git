import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from './ImangeList'
class App extends React.Component {
  state = { images: [] };
  OnSearchSubmit = async (term) => {
    //console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    //console.log(this.state.images)
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.OnSearchSubmit} />
        <ImageList  images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
