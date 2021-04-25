import React from "react";
import axios from "axios";

class Zmanim extends React.Component {
    componentDidMount() {
        axios.get("https://www.hebcal.com/shabbat?cfg=json&geonameid=281184&M=on&lg=h").then((res) => {
          const persons = res.data;
         
          this.setState({
            persons: persons,
          });
        });
      }
    render() {
      return <h1>Hello,</h1>;
    }
  }

  export default Zmanim;
  