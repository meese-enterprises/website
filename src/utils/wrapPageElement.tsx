// https://www.npmjs.com/package/gatsby-plugin-modal-routing-3
import _ from "lodash"
import { navigate } from "gatsby"
import React from "react"
import Modal from "react-modal"
import ModalRoutingContext from "../components/ModalRoutingContext"

/**
 * Returns the path without a prefix.
 * @param {String} path
 * @returns {String}
 */
const withoutPrefix = (path: string) => {
	// @ts-ignores
	const prefix = typeof __BASE_PATH__ !== `undefined`
		// @ts-ignores
		? __BASE_PATH__
		// @ts-ignores
		: __PATH_PREFIX__

	return path.slice(prefix ? prefix.length : 0)
}

class WrapPageElement extends React.Component {
	state = {
		prevProps: null,
		lastModalProps: null,
		props: null,
		pathname: null,
	}

	// @ts-ignores
	constructor(...args) {
		// @ts-ignores
		super(...args);
	}

	// @ts-ignores
	static getDerivedStateFromProps(props, state) {
		if (props.location.pathname === state.pathname) return null;

		return {
			pathname: props.location.pathname,
			props: props,
			...(_.get(state, "props.location.state.modal") ? {
				// old page was a modal, keep track so we can render the contents while closing
				lastModalProps: state.props,
			} : {
				// old page was not a modal, keep track so we can render the contents under modals
				prevProps: state.props,
			}),
		}
	}

	handleRequestClose = () => {
		navigate(
			// @ts-ignores
			withoutPrefix(this.state.prevProps.location.pathname),
			{
				state: {
					noScroll: true
				}
			}
		)
	}

	render() {
		// render modal if props location has modal
		// @ts-ignores
		const { pageResources, location, modalProps } = this.props;
		const { prevProps, lastModalProps } = this.state;
		const isModal = prevProps && _.get(location, "state.modal");

		// the page is the previous path if this is a modal, otherwise it's the current path
		const pageElement = isModal ? (
			// @ts-ignores
			React.createElement(prevProps.pageResources.component, {
				// @ts-ignores
				...prevProps,
				// @ts-ignores
				key: prevProps.pageResources.page.path,
			})
		) : (
			React.createElement(pageResources.component, {
				...this.props,
				key: pageResources.page.path,
			})
		);

		let modalElement = null;

		if (isModal) {
			// Rendering the current page as a modal, so create an element with the page contents
			modalElement = React.createElement(pageResources.component, {
				...this.props,
				key: pageResources.page.path,
			});
		} else if (lastModalProps) {
			// Not rendering the current page as a modal, but we may be in the process of animating
			// the old modal content to close, so render the last modal content we have cached

			modalElement = React.createElement(_.get(lastModalProps, "pageResources.component"), {
				// @ts-ignores
				...lastModalProps,
				key: _.get(lastModalProps, "pageResources.page.path"),
			});
		}

		return (
			<>
				{pageElement}

				{/* @ts-ignores */}
				<Modal
					onRequestClose={this.handleRequestClose}
					{...modalProps}
					isOpen={!!isModal}
				>
					{modalElement ? (
						<React.Fragment
							// @ts-ignores
							key={this.props.location.key}
						>
							<ModalRoutingContext.Provider
								value={{
									modal: true,
									// @ts-ignores
									closeTo: prevProps ? withoutPrefix(prevProps.location.pathname) : "/"
								}}
							>
								{modalElement}
							</ModalRoutingContext.Provider>
						</React.Fragment>
					) : null}
				</Modal>
			</>
		)
	}
}

// @ts-ignores
const wrapPageElement = ({ props }) => {
	const modalProps = { closeTimeoutMS: 500 };
	return React.createElement(WrapPageElement, { ...props, modalProps });
}

export default wrapPageElement;
