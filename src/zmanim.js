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
  }

  render() {
    return (
      <div className="container">
        <h1 className="date">זמני שבת בעברית</h1>
        <p className="date">
          <span>היום </span>
          <script
            type="text/javascript"
            charSet="utf-8"
            src="https://www.hebcal.com/etc/hdate-he.js"
          ></script>
          י״ז בְּאִיָיר תשפ״א
        </p>
        {}
        <Table striped bordered hover className="tabled">
          <thead>
            <tr>
              <th colSpan="3">
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
              <tr>
                <td>{x.havdalah.replace("הַבדָלָה:","")}</td>
                <td>{x.candles.replace("הַדלָקָת נֵרוֹת:","")}</td>
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
