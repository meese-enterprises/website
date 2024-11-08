import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Landing from "../sections/Landing";
const staticEffect = true;

const Home = () => (
	<Layout>
		{staticEffect && <div className="static" />}
		<Header />
		<Landing />
	</Layout>
);

export default Home;
