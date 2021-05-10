import { Table } from "react-bootstrap";
import axios from "axios";
import React from "react";
import TableRow from "./tableRow";
import { FaSortAlphaDown, FaSortAlphaDownAlt, FaSort } from "react-icons/fa";

import "./table1.css";

class Table1 extends React.Component {
  state = {
    iconStatus: { first: false, last: false, age: false },
  
    personsSorted: [],
  
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=25").then((res) => {
      const persons = res.data;
      const personsSorted = [];

      for (let index of persons.results) {
        let objOfArr = {
          phone: index.phone,
          first: index.name.first,
          last: index.name.last,
          email: index.email,
          age: index.dob.age,
          gender: index.gender,
          city: index.location.city,
          country: index.location.country,
        };
        personsSorted.push(objOfArr);
      }
      // console.log(personsSorted);

      this.setState({
        personsSorted: personsSorted,
      });
    });
  }

  render() {
    const iconDisplayer = (titleOfIcon) => {
      return this.state.iconStatus[titleOfIcon] === false ? (
        <FaSort />
      ) : this.state.iconStatus[titleOfIcon] === "AtoZ" ? (
        <FaSortAlphaDown />
      ) : (
        <FaSortAlphaDownAlt />
      );
    };
    const updateIcons = (currentItem) => {
      let keysOfIcons = Object.keys(this.state.iconStatus);
      var index = keysOfIcons.indexOf(currentItem);
      keysOfIcons.splice(index, 1);
      const res = keysOfIcons.reduce((acc,curr)=> (acc[curr]=false,acc),{});
      currentItem = {
        ...res,
        [currentItem]:
          this.state.iconStatus[currentItem] === false
            ? "AtoZ"
            : this.state.iconStatus[currentItem] === "AtoZ"
            ? "ZtoA"
            : false,
      };
      this.setState({ iconStatus: currentItem });
    };
    const sortNameAtoZ = (theArrOfUsers, nameOfRowToChange) => {
      let arrSorted = theArrOfUsers;
      if (this.state.iconStatus[nameOfRowToChange] === false) {
      arrSorted.sort((a, b) =>
      a[nameOfRowToChange] > b[nameOfRowToChange]
      ? 1
      : b[nameOfRowToChange] > a[nameOfRowToChange]
      ? -1
      : 0
      );}
      if (this.state.iconStatus[nameOfRowToChange] === "AtoZ") {
        arrSorted.reverse();
      }
      updateIcons(nameOfRowToChange);
    };
    return (
      <div className="container">
        <br/>
        <br/>
        {this.state.personsSorted.length>0? 
        
       
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>
                <button
                  value="sortFirst"
                  onClick={() => {
                    sortNameAtoZ(this.state.personsSorted, "first");
                  }}
                  className="tButtonStyle"
                >
                  First Name{iconDisplayer("first")}
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    sortNameAtoZ(this.state.personsSorted, "last");
                  }}
                  className="tButtonStyle"
                >
                  Last Name{iconDisplayer("last")}
                </button>
              </th>
              <th>Phone</th>
              <th>Email</th>
              <th>
                {/*  AGE   */}
                <button
                  onClick={() => {
                    sortNameAtoZ(this.state.personsSorted, "age");
                  }}
                  className="tButtonStyle"
                >
                  Age {iconDisplayer("age")}
                </button>
              </th>
              <th>Gender</th>
              <th>Country</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.personsSorted.length > 20
              ? this.state.personsSorted.map((dataOne, i) => (
                <TableRow key={i} numList={i + 1} datar={dataOne} />
                ))
              : ""}
          </tbody>
        </Table>
                :<div className="spinner-border" style={{width:"3rem", height: "3rem", marginTop:"10rem"}} role="status">
          <span className="sr-only"></span>
        </div>}
        <p>{}</p>
      </div>
    );
  }
}
export default Table1;
