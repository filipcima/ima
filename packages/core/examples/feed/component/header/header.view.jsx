import ns from 'imajs/client/core/namespace.js';
import oc from 'imajs/client/core/objectContainer.js';
import bootstrap from 'imajs/client/core/bootstrap.js';

bootstrap.addComponent(() => {

	ns.namespace('App.Component.Header');

	/**
	 * Header writing.
	 *
	 * @class View
	 * @namespace App.Component.Header
	 * @module App
	 * @submodule Component
	 */
	/* jshint ignore:start */
	ns.App.Component.Header.View = React.createClass({
		render() {
			var dictionary = oc.get('$Dictionary');

			return (
				<div className='l-header'>
					<a href={'//'+dictionary.get('home.imaLink')} title={dictionary.get('home.imaLink')}>{dictionary.get('home.imaLink')}</a>
					<div className='title-wrapper'>
						<a href='/' title={dictionary.get('home.pageTitle')} className="logo"></a>
						<h1>{dictionary.get('home.pageTitle')}</h1>
					</div>
				</div>
			);
		}
	});
	/* jshint ignore:end */
});