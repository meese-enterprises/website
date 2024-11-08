import Modal from "react-modal";
import "./src/styles/global.css";
import "./src/styles/landing.css";
import "./src/styles/scramble.css";
import "./src/styles/modal.css";
import "./src/styles/imageGlitch.css";

import { wrapPageElement } from "./src/utils/wrapPageElement";

const onClientEntry = (_args) => {
	Modal.setAppElement("#___gatsby");
};
const shouldUpdateScroll = () => false;

export { onClientEntry, wrapPageElement, shouldUpdateScroll };
