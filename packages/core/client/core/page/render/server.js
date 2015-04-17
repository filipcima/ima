import ns from 'imajs/client/core/namespace.js';
import oc from 'imajs/client/core/objectContainer.js';

ns.namespace('Core.Page.Render');

/**
 * Server-side page renderer. The renderer renders the page into the HTML
 * markup and sends it to the client.
 *
 * @class Server
 * @extends Core.Abstract.PageRender
 * @namespace Core.Page.Render
 * @module Core
 * @submodule Core.Page
 */
class Server extends ns.Core.Abstract.PageRender {

	/**
	 * Initializes the server-side page renderer.
	 *
	 * @method contructor
	 * @constructor
	 * @param {Vendor.Rsvp} Rsvp The RSVP implementation of the Promise API and
	 *        related helpers.
	 * @param {Vendor.React} React React framework instance to use to render the
	 *        page.
	 * @param {Object<string, *>} setting Application setting for the current
	 *        application environment.
	 * @param {Core.Router.Response} response Utility for sending the page markup
	 *        to the client as a response to the current HTTP request.
	 * @param {Core.Interface.Cache} cache Resource cache caching the results of
	 *        HTTP requests made by services used by the rendered page.
	 */
	constructor(Rsvp, React, setting, response, cache) {
		super(Rsvp, React, setting);

		/**
		 * Utility for sending the page markup to the client as a response to the
		 * current HTTP request.
		 *
		 * @property _response
		 * @private
		 * @type {Core.Router.Response}
		 */
		this._response = response;

		/**
		 * The resource cache, caching the results of all HTTP requests made by the
		 * services using by the rendered page. The state of the cache will then be
		 * serialized and sent to the client to re-initialize the page at the
		 * client side.
		 *
		 * @property _cache
		 * @private
		 * @type {Core.Interface.Cache}
		 */
		this._cache = cache;
	}

	/**
	 * Renders the page into HTML markup and sends it to the client using the
	 * response utility provided by router.
	 *
	 * @method render
	 * @param {Core.Abstract.Controller} controller The page controller that
	 *        should have its view rendered.
	 * @param {Vendor.React.Component} view
	 * @return {Promise}
	 */
	render(controller, view) {
		var loadPromises = this._wrapEachKeyToPromise(controller.load());

		return (
			this._Rsvp
				.hash(loadPromises)
				.then((fetchedResources) => {
					controller.setState(fetchedResources);
					controller.setSeoParams(fetchedResources);

					var reactElementView = this._React.createElement(view, controller.getState());

					var pageMarkup = this._React.renderToString(reactElementView);

					var masterView = oc.get(this._setting.$Page.$Render.masterView);
					var appMarkup = this._React.renderToStaticMarkup(masterView({
						page: pageMarkup,
						scripts: this._getScripts(),
						seo: controller.getSeoManager()
					}));

					this._response
						.status(controller.getHttpStatus())
						.send('<!doctype html>\n' + appMarkup);
				})
		);
	}

	/**
	 * Generates the HTML code concontaining all scripts elements to include into
	 * the rendered page. THe HTML code will include the scripts specified in
	 * page renderer's setting and a script setting the "rehydration" data for
	 * the application at the client-side.
	 *
	 * @method _getScripts
	 * @private
	 * @return {string} HTML code containing all scripts elements to include into
	 *         the rendered page.
	 */
	_getScripts() {
		var scripts = [];
		var html = '';

		scripts = this._setting.$Page.$Render.scripts
			.map(script => `<script src="${script}"></script>`);

		scripts.push(
			'<script>' +
			' window.$IMA = window.$IMA || {};' +
			' window.$IMA.Cache = ' + (this._cache.serialize()) + ';' +
			' window.$IMA.$Language = "' + (this._setting.$Language) + '";' +
			' window.$IMA.$Env = "' + (this._setting.$Env) + '";' +
			' window.$IMA.$Protocol = "' + (this._setting.$Protocol) + '";'+
			' window.$IMA.$Domain = "' + (this._setting.$Domain) + '";'+
			' window.$IMA.$Root = "' + (this._setting.$Root) + '";'+
			' window.$IMA.$LanguagePartPath = "' + (this._setting.$LanguagePartPath) + '";'+
			'</script>'
		);
		html = scripts.join('');

		return html;
	}
}

ns.Core.Page.Render.Server = Server;