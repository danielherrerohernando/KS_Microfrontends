const path = require('path');
const express = require('express');

module.exports = () => {
	const start = async ({ app }) => {
		/**
     * This endpoint serves the app as a standalone version
     * @route GET /
     * @group Content - Everything about serving the app
     * @returns 200 - Sucessful response
     * @returns {ErrorServer.model} 500 - Server error
     */
		app.get('/', (req, res) => res.sendFile(path.resolve(`${__dirname}/../../vue-app/public/index_public.html`)));

		app.use(express.static(path.resolve(`${__dirname}/../../vue-app/public`)));

		/**
     * This endpoint serves the bundle of the app to use it as a microfrontend
     * @route GET /bundle
     * @group Content - Everything about serving the app
     * @returns 200 - Sucessful response
     * @returns {ErrorServer.model} 500 - Server error
     */
		app.get('/bundle', (req, res) => res.sendFile(path.resolve(`${__dirname}/../../vue-app/microBundle/microApp.js`)));

		return Promise.resolve();
	};

	return { start };
};
