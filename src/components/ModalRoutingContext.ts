// https://www.npmjs.com/package/gatsby-plugin-modal-routing-3
import React from "react";

const ModalRoutingContext = React.createContext({
	isModal: false,
	closeTo: null,
});

export default ModalRoutingContext;
