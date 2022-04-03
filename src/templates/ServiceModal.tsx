import React from "react";
import ReactMarkdown from "react-markdown";
import components from "../components/MarkdownComponents";
import { Link } from "gatsby";
import ModalRoutingContext from "../components/ModalRoutingContext";

// @ts-ignore
const ServiceModal = ({ location }) => {
	const content = <ReactMarkdown children={location.state.description} components={components} />;

	return <ModalRoutingContext.Consumer>
		{/* @ts-ignore */}
		{({ modal, closeTo }) => (
      modal ? (
        <React.Fragment>
          <Link to={closeTo!}>
            Close
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
}


export default ServiceModal;
