import "./App.css";
import Table1 from "./table1";
import Headers from "./headers";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Alert, Nav, Navbar } from "react-bootstrap";
import Chart from "./chart";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <Headers />
        <Table1 />

        <div className="container">
          <Chart/>
        </div>
        <Alert key={1} variant="danger">
          This is a "danger" alert with{" "}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      </div>
    </div>
  );
}

export default App;
