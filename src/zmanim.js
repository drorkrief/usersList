import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

class Zmanim extends React.Component {
  state={
    times:false
  }
  componentDidMount() {
    axios
      .get("https://www.hebcal.com/shabbat?cfg=json&geonameid=281184&M=on&lg=h")
      .then((res) => {
        const persons = res.data;

        this.setState({
          times: persons,
        });
      });
  }
  render() {
    if(this.state.times){
      let results = this.state.times.items.filter((x)=>x.category === "candles" );
      console.log(results[0].title);
    }
    return (
      <div className="container">
        <h1>זמני שבת בעברית</h1>
        {}
        <Table striped bordered hover>
  <thead>
    <tr>
      <th colSpan="3">פרשת: </th>
    </tr>
    <tr>
      <th>הדלקת נרות</th>
      <th>צאת השבת</th>
      <th>עיר</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>3</td>
      <td>3</td>

    </tr>
  </tbody>
</Table>
      </div>
    );
  }
}

export default Zmanim;
