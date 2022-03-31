import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Footer from "../components/Footer";
const staticEffect = false;

const Home = () => (
	<Layout>
		{staticEffect && <div className="static" />}
		<Header />
		<Landing />
		<About />
		<Services />
		<Projects />
		<Footer />
	</Layout>
);

export default Home;
