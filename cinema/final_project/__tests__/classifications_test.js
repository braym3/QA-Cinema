const assert = require("assert").strict;
const { title } = require("process");
const webdriver = require("selenium-webdriver");


const serverUri = "http://localhost:3000/findus/classifications"; // App Server

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
let browser = new webdriver.Builder()
 	.usingServer()
 	.withCapabilities({ browserName: "chrome" })
 	.build();



// gets the classifications page header
function getClassificationsHeader() {
	return new Promise((resolve, reject) => {
		let titleElem = browser.findElement({id: 'classifications-title'});
		let titleText = titleElem.getText();
		titleText.then(function(classificationsTitle) {
			resolve(classificationsTitle);
		})
	})
}

describe("Classifications Page", function() {
	this.timeout(5000);

	// check the classifications page title
	it("Should check that the title on the classifications page is correct", function() {
		return new Promise((resolve, reject) => {
		browser
		.get(serverUri)
		.then(getClassificationsHeader)
		.then(title => {
		assert.strictEqual(title, "Film Classifications");
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