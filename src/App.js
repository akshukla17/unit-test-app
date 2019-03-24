import React, { Component } from "react";
import "./App.css";
import MyHeader from "./components/header/header";
import Headline from "./components/headline/headline";

const tempArr = [
  {
    fName: "ajay",
    lName: "shukla",
    email: "ajayshukla.bhu@gmail.com",
    onlineStatus: true,
    exp: 7
  }
];
// {
//   fName: "samuel",
//   lName: "decosta",
//   email: "samuelD@gmail.com",
//   onlineStatus: false,
//   yearsOfExperience: 2
// }
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <MyHeader />
        </div>
        <div className='headlines'>
          <Headline
            header='Post'
            desc='display POST button here'
            tempArr={tempArr}
          />
        </div>
      </div>
    );
  }
}

export default App;
