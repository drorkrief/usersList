import "./App.css";
import Table1 from "./table1";
import Headers from "./headers";
import Home from "./Home";
import About from "./about";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Chart from "./chart";
import Zmanim from "./zmanim";

function App() {
  return (
    <div className="App">
      
    <Router>
      <div>
        <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link className="links" to="/about">Users-List</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link className="links" to="/about">The List</Link></Nav.Link>
            <Nav.Link><Link className="links" to="/table">Shabbat Ti</Link></Nav.Link>
            <Nav.Link><Link className="links" to="/Home">Home</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
{/*          
              <Link to="/">Home</Link>
          
              <Link to="/about">About</Link>
            
              <Link to="/users">Users</Link>
            */}
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/table">
        <Table1 />
            
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  


      <div className="container">
        <Headers />

        <div className="container">
          <Chart />
        </div>
        <Alert key={1} variant="danger">
          This is a "danger" alert with{" "}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
        <Zmanim />
      </div>
    </div>
  );
}

export default App;
