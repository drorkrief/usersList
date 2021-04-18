import { Table } from "react-bootstrap";
import axios from "axios";
import React from "react";
import TableRow from "./tableRow"
class Table1 extends React.Component {
  state = {
    dataUsers: [],
  };

  callfunction(){
    axios
    .get("https://randomuser.me/api/")
    .then((res) => {
      const persons = res.data;
      // this.setState({[...this.state.dataUsers , dataUsers: persons.results[0]]  });
      this.setState(prevState => ({
          dataUsers: [...prevState.dataUsers, persons.results[0]]
        }))
    //   console.log(persons.results[0]);
    });
//   console.log(this.state.dataUsers);
  }
  componentDidMount() {
    for(let x=0; x<20; x++) this.callfunction();
    
  }

  render() {
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
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
              {this.state.dataUsers.length ===20? this.state.dataUsers.map((dataOne, i)=><TableRow key={i} numList={i+1} datar={dataOne}/>):""}
            
          </tbody>
        </Table>
        <p>{}</p>
      </div>
    );
  }
}
export default Table1;
