"use strict";

/** Remove the old style, and emulate the React App */
window.addEventListener('load', () => {
    /** creating a new iframe */
    const iframe = document.createElement('iframe');

    /** clearing the body */
    document.body.innerHTML = '';
    /** putting iframe parameters */
    iframe.src = chrome.runtime.getURL("index.html");
    iframe.id = "intranet-redesign";
    /** append the iframe to the body */
    document.body.appendChild(iframe);
});
