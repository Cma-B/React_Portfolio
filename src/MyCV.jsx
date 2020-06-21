import React, {Component} from "react";
import axios from "axios";
import MyCVCard from "./MyCVCard";
import { UndrawJobHunt} from "react-undraw-illustrations";

class MyCV extends Component {
  state = {
    mycv: []
  };
  render() {
    const mycv = this.state.mycv;
    let mycvList;

    if (mycv.length > 0) {
      mycvList = mycv.map(cv => {
        return (
          <div id={'cv-' + cv.id} key={cv.id}>
            <MyCVCard cv={cv} />
          </div>
        );
      });
    }

  return (
    <div className="ui main container">
      <div className="ui stackable two column grid">
        <div className="column">
          <UndrawJobHunt primaryColor='#12283a' height='200px'/>
        </div>
        <div className="column">
        <h1 id="mycv-header" className="ui header">My CV</h1>
       <p>
         Let's take a look at my CV
       </p>
        </div>
      </div>
      
      <div className="ui stackable four column grid">{mycvList}</div>
    </div>
  );
};
componentDidMount() {
  axios.get('./src/data/mycv.json')
    .then(response => {
      this.setState({
        mycv: response.data
      });
    });
};
};

export default MyCV;