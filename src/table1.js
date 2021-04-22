import { Table } from "react-bootstrap";
import axios from "axios";
import React from "react";
import TableRow from "./tableRow";
import { FaSortAlphaDown, FaSortAlphaDownAlt, FaSort } from "react-icons/fa";
import "./table1.css";

class Table1 extends React.Component {
  state = {
    iconStatus = {first: false , last: false , age: false },
    sortAge: false,
    sortFirst: false,
    sortLast: false,
    lastnameSort: false,
    changeIconAge: false,
    personsSorted: [],
    firstNameSorted: true,
    lastNameSorted: true,
    ageSorted: true,
    ageNameSorted: true,
    iniFirstName: true,
    iniLastName: true,
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
      return titleOfIcon === false ? (
        <FaSort />
      ) : titleOfIcon === "AtoZ" ? (
        <FaSortAlphaDown />
      ) : (
        <FaSortAlphaDownAlt />
      );
    };
    const resetIconsAndStates = () => {};
    const sortNameAtoZ = (theArrOfUsers, nameOfRowToChange , valueOfButton) => {
      // console.log(nameOfRowToChange.name);
      this.setState({[valueOfButton]:"AtoZ"})
      // valueOfButton = "AtoZ"
      let arrSorted = theArrOfUsers;
      arrSorted.sort((a, b) =>
        a[nameOfRowToChange] > b[nameOfRowToChange]
          ? 1
          : b[nameOfRowToChange] > a[nameOfRowToChange]
          ? -1
          : 0
      );
      if (this.state[nameOfRowToChange + "NameSorted"] === false) {
        arrSorted.reverse();
      }
      if (nameOfRowToChange === "age") {
        this.state.ageSorted && arrSorted.reverse();
      }
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
                value="sortFirst"
                  onClick={() => {
                    sortNameAtoZ(this.state.personsSorted, "first");
                    resetIconsAndStates();
                    this.setState((prevState) => ({
                      firstNameSorted: !prevState.firstNameSorted,
                    }));
                  }}
                  className="tButtonStyle"
                >
                  First Name{iconDisplayer(this.state.sortFirst)}
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    sortNameAtoZ(this.state.personsSorted, "last");
                    resetIconsAndStates();
                    this.setState((prevState) => ({
                      lastNameSorted: !prevState.lastNameSorted,
                      lastnameSort: !prevState.lastnameSort,
                    }));
                  }}
                  className="tButtonStyle"
                >
                  Last Name{iconDisplayer(this.state.sortLast)}
                </button>
              </th>
              <th>Phone</th>
              <th>Email</th>
              <th>
                {/*  AGE   */}
                <button
                  onClick={() => {
                    sortNameAtoZ(this.state.personsSorted, "age");
                    resetIconsAndStates();
                    this.setState((prevState) => ({
                      ageSorted: !prevState.ageSorted,
                      changeIconAge: !prevState.changeIconAge,
                      sortAge: !prevState.sortAge,
                    }));
                  }}
                  className="tButtonStyle"
                >
                  Age {iconDisplayer(this.state.sortAge)}
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
        <p>{}</p>
      </div>
    );
  }
}
export default Table1;
