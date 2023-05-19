const assert = require("assert").strict;
const { title } = require("process");
const webdriver = require("selenium-webdriver");


const serverUri = "http://localhost:3000/about"; // App Server

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
let browser = new webdriver.Builder()
 	.usingServer()
 	.withCapabilities({ browserName: "chrome" })
 	.build();



// gets the about page subtitle
function getAboutTitle() {
	return new Promise((resolve, reject) => {
		let titleElem = browser.findElement({id: 'about-title'});
		let titleText = titleElem.getText();
		titleText.then(function(aboutTitle) {
			resolve(aboutTitle);
		})
	})
}

describe("About Page", function() {
	this.timeout(5000);

	// check the page title
	it("Should check that the subtitle on the about page is correct", function() {
		return new Promise((resolve, reject) => {
		browser
		.get(serverUri)
		.then(getAboutTitle)
		.then(title => {
		assert.strictEqual(title, "About QA Cinemas");
		resolve();
		})
		.catch(err => reject(err));
		});
	});


	// eslint-disable-next-line no-undef
	after(function() {
		// End of test - close browser
		browser.quit();
	});
});