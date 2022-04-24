import React from "react";
import ReactMarkdown from "react-markdown";
import components from "../components/MarkdownComponents";
import { Link } from "gatsby";
import ModalRoutingContext from "../components/ModalRoutingContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { Theme } from "@rebass/preset";

// @ts-ignore
const Modal = ({ location }) => {
	const content = <ReactMarkdown children={location.state.description} components={components} />;

	return <ThemeProvider theme={theme as Theme}>
		<ModalRoutingContext.Consumer>
			{/* @ts-ignore */}
			{({ modal, closeTo }) => (
				modal ? (
					<React.Fragment>
						<Link to={closeTo!}>
							<button className="closeButton">
								Close
							</button>
						</Link>
						{content}
					</React.Fragment>
				) : (
					<>
						{content}
					</>
				)
			)}
  	</ModalRoutingContext.Consumer>
	</ThemeProvider>;
}


export default Modal;
