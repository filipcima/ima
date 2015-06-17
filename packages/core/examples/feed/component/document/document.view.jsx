import ns from 'imajs/client/core/namespace.js';

ns.namespace('App.Component.Document');

/**
 * Master Layout.
 * @class View
 * @namespace App.Component.Document
 * @module App
 * @submodule Component
 */
class View extends ns.Core.Abstract.Component {
	render() {
		var appCssFile = this.utils.$Settings.$Env !== 'dev' ? 'app.bundle.min.css' : 'app.css';

		return (
			<html>
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

					<meta name="description" content={this.props.metaManager.getMetaName('description')} />
					<meta name="keywords" content={this.props.metaManager.getMetaName('keywords')} />

					<meta property="og:title" content={this.props.metaManager.getMetaProperty('og:title')} />
					<meta property="og:description" content={this.props.metaManager.getMetaProperty('og:description')} />
					<meta property="og:type" content={this.props.metaManager.getMetaProperty('og:type')} />
					<meta property="og:url" content={this.props.metaManager.getMetaProperty('og:url')} />
					<meta property="og:image" content={this.props.metaManager.getMetaProperty('og:image')} />

					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="stylesheet" href={"/static/css/"+appCssFile} />
					<title>
						{this.props.metaManager.getTitle()}
					</title>
				</head>
				<body>
					<div id="fb-root" />
					<div id="page" dangerouslySetInnerHTML={{__html: this.props.page}} />
					<div id="scripts" dangerouslySetInnerHTML={{__html: this.props.scripts}} />
				</body>
			</html>
		);
	}
}

ns.App.Component.Document.View = View;
