import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
		</div>
	);
};

export default Home;
