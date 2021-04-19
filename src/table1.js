import { Table } from "react-bootstrap";
import axios from "axios";
import React from "react";
import TableRow from "./tableRow";
import { FaSortAmountDownAlt, FaSortAmountDown } from "react-icons/fa";
import "./table1.css";

class Table1 extends React.Component {
  state = {
    dataUsers: [],
    upsideSort: false,
    personsSorted: [],
  };

  componentDidMount() {
    // this.state.dataUsers.length>1?
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
      console.log(personsSorted);

      this.setState({
        dataUsers: persons.results,
        personsSorted: personsSorted,
      });
    });
  }

  render() {
    const sortNameAtoZ = (theArrOfUsers) => {
      let arrSorted = theArrOfUsers;
      arrSorted.sort((a, b) =>
        a.first > b.first ? 1 : b.first > a.first ? -1 : 0
      );

      console.log(arrSorted);
      // this.setState({dataUsers: theArrOfUsers})
    };
    return (
      <div>
        <br />
        <br />
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>
                <button
                  onClick={(e) => {
                    sortNameAtoZ(this.state.personsSorted);
                    this.setState((prevState) => ({
                      upsideSort: !prevState.upsideSort,
                    }));
                  }}
                  className="tButtonStyle"
                >
                  First Name{" "}
                  {this.state.upsideSort ? (
                    <FaSortAmountDownAlt />
                  ) : (
                    <FaSortAmountDown />
                  )}
                </button>
              </th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Age</th>
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
        <p>{}</p>
      </div>
    );
  }
}
export default Table1;
