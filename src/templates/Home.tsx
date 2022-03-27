import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Writing from "../sections/Writing";
import Footer from "../components/Footer";

// TODO: `Services` section detailining things like `Networking`, `Web Development`, `Graphic Design`, etc.
const Home = () => (
	<Layout>
		<Header />
		<Landing />
		<About />
		<Services />
		<Projects />
		{/*<Writing />*/}
		<Footer />
	</Layout>
);

export default Home;
