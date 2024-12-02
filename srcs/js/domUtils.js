//domUtils.js
import { imgFiles } from "./data";

// Append multiple child elements (through an array of children) to a parent
function appendElements(parent, childsArr) {
  childsArr.forEach((child) => {
    parent.appendChild(child);
  });
}

// Set any attribute of a dom element
function setAttributes(elem, attrs) {
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") {
      // Handle 'class' by adding classes as a list
      elem.classList.add(...value.split(" "));
    } else if (key === "textContent" || key === "innerHTML") {
      // Handle 'textContent' or 'innerHTML' as direct properties
      elem[key] = value;
    } else {
      // Set other attributes normally
      elem.setAttribute(key, value);
    }
  }
}

// Need 'imgFiles' import. Creates and returns an 'img' dom element with the img with filename 'imageKey' (without extension)
function getImageforDiv(imageKey, attributes) {
  const myImg = document.createElement("img");
  myImg.src = imgFiles[imageKey];
  setAttributes(myImg, attributes);
  return myImg;
}

function createElement(tag, attrs = {}, children = [], events = {}) {
  const element = document.createElement(tag);
  setAttributes(element, attrs);
  children.forEach((child) => element.appendChild(child));
  for (const [event, handler] of Object.entries(events)) {
    element.addEventListener(event, handler);
  }
  return element;
}
//Usage example:
/*
1. Create children, then the parent, and then link the two
const inputName = createElement('input', { type: 'text', id: 'name', name: 'name' required: true });
const labelName = createElement('label', { for: 'name', textContent: 'Name:' });
const form = createElement('form', {}, [labelName, inputName]);

2. Create children recursively
const newDiv = createElement('div',
	{ class: 'container', id: 'main', textContent: 'Hello, World!' },
	[
		createElement('span', { class: 'highlight', textContent: 'Highlighted text' }),
		createElement('button', { class: 'btn', textContent: 'Click Me' })
	]
);

3. Use the event listeners functionality
const button = createElement('button', { class: 'btn', textContent: 'Click Me' }, [], { click: () => alert('Button clicked!') });
document.body.appendChild(button);
*/

const domUtils = {
  appendElements,
  setAttributes,
  getImageforDiv,
  createElement,
};

export default domUtils;
