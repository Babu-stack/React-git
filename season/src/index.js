import React from "react";
import ReactDOM from "react-dom";
import ComponentDisplay from './ComponentDisplay'
import Loader from "./Loader";

class App extends React.Component {

  state = { lat: null, errorMsg: "" };
componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat:position.coords.latitude }),
        
        err =>  this.setState({ errorMsg: err.message })
        
      );

};
  render() {
    if (this.state.lat && !this.state.errorMsg) {
      return <div>
        <ComponentDisplay
        lat={this.state.lat}
        />
        </div>;
    }
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error : {this.state.errorMsg} </div>;
    }
    return (<div>
      <Loader msg="Please accept Location Permission"/>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
