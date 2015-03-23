import ns from 'core/namespace/ns.js';

ns.namespace('Core.Helper');

/**
 * @class ClientWindow
 * @extends ns.Core.Interface.Window
 * @namespace Core.Helper
 * @module Core
 * @submodule Core.Helper
 */
class ClientWindow extends ns.Core.Interface.Window {

	/**
	 * @method constructor
	 * @constructor
	 */
	constructor() {
		super();
	}

	/**
	 * Return true if is client side code.
	 *
	 * @method isClient
	 * @return {boolean}
	 */
	isClient() {
		return true;
	}

	/**
	 * Return true if is session storage supported.
	 *
	 * @method hasSessionStorage
	 * @return {boolean}
	 */
	hasSessionStorage() {
		return typeof window.sessionStorage !== 'undefined' && window.sessionStorage !== null;
	}

	/**
	 * Return true if websocket is supported.
	 *
	 * @method hasWebSocket
	 * @return {boolean}
	 */
	hasWebSocket() {
		return window.WebSocket || window.MozWebSocket;
	}

	/**
	 * Return true if history API is supported.
	 *
	 * @method hasHistoryAPI
	 * @return {boolean}
	 */
	hasHistoryAPI() {
		return !!(window.history) && !!(window.history.pushState);
	}

	/**
	 * Get WebSocket interface.
	 *
	 * @method getWebSocket
	 * @return {WebSocket}
	 */
	getWebSocket() {
		return window.WebSocket || window.MozWebSocket;
	}

	/**
	 * Return window object.
	 *
	 * @method getWindow
	 * @return {Window}
	 */
	getWindow() {
		return window;
	}

	/**
	 * Return current domain.
	 *
	 * @method getDomain
	 * @return {string}
	 */
	getDomain() {
		return window.location.protocol + '//' + window.location.host;
	}

	/**
	 * Return current path.
	 *
	 * @method getPath
	 * @return {string}
	 */
	getPath() {
		return decodeURI(window.location.pathname + window.location.search);
	}

	/**
	 * Return current url.
	 *
	 * @method getUrl
	 * @return {string}
	 */
	getUrl() {
		return decodeURI(window.location.href);
	}

	/**
	 * Return body element.
	 *
	 * @method getBody
	 * @return {HTMLElement}
	 */
	getBody() {
		return document.body;
	}

	/**
	 * Redirect to url.
	 *
	 * @method redirect
	 * @param {string} url
	 */
	redirect(url) {
		window.location.href = url;
	}

	/**
	 * Push state to history API.
	 *
	 * @method pushStateToHistoryAPI
	 * @param {Object} state
	 * @param {string} title
	 * @param {string} url
	 */
	pushStateToHistoryAPI(state, title, url) {
		window.history.pushState(state, title, url);
	}

	/**
	 * Add event listener.
	 *
	 * @method addEventListener
	 * @param {NodeElement} element
	 * @param {string} event
	 * @param {function} listener
	 * @param {boolean} [useCapture=false]
	 */
	addEventListener(element, event, listener, useCapture=false) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, useCapture);
		} else {
			if (element.attachEvent) {
				element.attachEvent(`on${event}`, listener);
			}
		}
	}

	/**
	 * PreventDefault action.
	 *
	 * @method preventDefault
	 * @param {Event} e
	 */
	preventDefault(e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	}
}

ns.Core.Helper.ClientWindow = ClientWindow;