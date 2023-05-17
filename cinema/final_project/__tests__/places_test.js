const assert = require("assert").strict;
const { title } = require("process");
const webdriver = require("selenium-webdriver");


const serverUri = "http://localhost:3000/findus/places-to-go"; // App Server

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
let browser = new webdriver.Builder()
 	.usingServer()
 	.withCapabilities({ browserName: "chrome" })
 	.build();



// gets the about page subtitle
function getPlacesToGoTitle() {
	return new Promise((resolve, reject) => {
		let titleElem = browser.findElement({id: 'places-title'});
		let titleText = titleElem.getText();
		titleText.then(function(placesTitle) {
			resolve(placesTitle);
		})
	})
}

describe("Places To Go Page", function() {
	this.timeout(5000);

	// check the getting here page title
	it("Should check that the title on the getting here page is correct", function() {
		return new Promise((resolve, reject) => {
		browser
		.get(serverUri)
		.then(getPlacesToGoTitle)
		.then(title => {
		assert.strictEqual(title, "Getting Here");
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