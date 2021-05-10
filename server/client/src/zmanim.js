import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const tableDataHandle = (objectData) => {
  let itemToReturn = {};
  for (let item of objectData.items) {
    if (item.category === "candles") {
      itemToReturn.candles = item.title;
    }
    if (item.category === "havdalah") {
      itemToReturn.havdalah = item.title;
    }
    if (item.category === "parashat") {
      itemToReturn.parashat = item.hebrew;
    }
  }
  return itemToReturn;
};
class Zmanim extends React.Component {
  state = {
    times: false,
    arrayvar: [],
    cities: ["תל-אביב", "באר-שבע", "חיפה", "ירושלים"],
  };
  componentDidMount() {
    // 293397 - tel aviv geoNameId
    // Be'er Sheva|295530 geoNameId
    // Haifa|294801 geoNameId
    // geonameid=281184 jerusalem geoNameId
    let locations = ["293397", "295530", "294801", "281184"];
    for (let geonameid of locations) {
      axios
        .get(
          `https://www.hebcal.com/shabbat?cfg=json&geonameid=${geonameid}&M=on&lg=h`
        )
        .then((res) => {
          const persons = res.data;
          this.setState((prevState) => ({
            arrayvar: [...prevState.arrayvar, tableDataHandle(persons)],
          }));
        });
    }
    let currentDate = new Date() 
    currentDate.getMonth() >11&& currentDate.getMonth()
    console.log(currentDate.getTime());
    axios
      .get(`https://www.hebcal.com/converter?cfg=json&gy=${currentDate.getFullYear()}&gm=${currentDate.getMonth()+1}&gd=${currentDate.getDate()}&g2h=1`)
      .then((res) => this.setState({ currentDate: res.data.hebrew }));
    // console.log(heDate, "fff");
    const options = {
      method: 'GET',
      url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
      params: {q: 'tesla', region: 'US'},
      headers: {
        'x-rapidapi-key': '582edbc3f1mshfb36dc48d4201fap18872bjsn40a8b4ff50d7',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="date">זמני שבת </h1>
        <p className="date">
          <span>היום </span>
         {this.state.currentDate}
        </p>
        <Table striped bordered hover className="tabled">
          <thead>
            <tr>
              <th className="parashaHeader" colSpan="3">
                {this.state.arrayvar.length > 0 &&
                  this.state.arrayvar[0].parashat}
              </th>
            </tr>
            <tr>
              <th>צאת השבת</th>
              <th>הדלקת נרות</th>
              <th>עיר</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrayvar.map((x, i) => (
              <tr key={i}>
                <td>{x.havdalah.replace("הַבדָלָה:", "")}</td>
                <td>{x.candles.replace("הַדלָקָת נֵרוֹת:", "")}</td>
                <td>{this.state.cities[i]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Zmanim;
