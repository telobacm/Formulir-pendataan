import React, { Component } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

export class Comp2 extends Component {
  // componentWillUnmount(){
  //   this.props.closeAnak()
  // }
  render() {
    return <div>
      <h2>TAMPILKAN:</h2>
      {JSON.stringify(this.props.biodata)}
      <p/>
      {/* <button onClick={()=>this.props.closeHasil()}>Close</button> */}
    </div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "budi",
    };
    console.log(document.URL);
  }
  componentDidMount() {}
  gantiNama = (value) => {
    this.setState({ nama: value });
  };
  render() {
    console.log("render");
    const { nama } = this.state;
    return (
      <div className="parentComponent">
        <ChildComponent nama={nama} ganti={this.gantiNama} />
      </div>
    );
  }
}
export default App;
