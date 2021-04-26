import { Jumbotron } from "react-bootstrap";


const Home = () => (
<div>

<h1>Welcome To Users List Project</h1>
<div className="container" style={{textAlign:"left"}}>
<Jumbotron style={{paddingLeft:"15%", fontSize:"2rem"}}>

<p>In this project I show you how I use API Calls to 3rd services<br/>
and present it on designed tables 
<ol style={{paddingLeft:"10%"}}>
    <li>users data</li>
    <li>shabbat times</li>
</ol>
</p>
</Jumbotron>
</div>
</div>

);
export default Home 