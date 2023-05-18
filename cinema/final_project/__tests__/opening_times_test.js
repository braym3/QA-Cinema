const assert = require("assert").strict;
const { title } = require("process");
const webdriver = require("selenium-webdriver");


const serverUri = "http://localhost:3000/findus/opening-times"; // App Server

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
let browser = new webdriver.Builder()
 	.usingServer()
 	.withCapabilities({ browserName: "chrome" })
 	.build();



// gets the opening times page header
function getOpeningTimesTitle() {
	return new Promise((resolve, reject) => {
		let titleElem = browser.findElement({id: 'opening-times-title'});
		let titleText = titleElem.getText();
		titleText.then(function(openingTimesTitle) {
			resolve(openingTimesTitle);
		})
	})
}

describe("Opening Times Page", function() {
	this.timeout(5000);

	// check the opening times page header
	it("Should check that the title on the opening times page is correct", function() {
		return new Promise((resolve, reject) => {
		browser
		.get(serverUri)
		.then(getOpeningTimesTitle)
		.then(title => {
		assert.strictEqual(title, "Opening Times");
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