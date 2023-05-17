const assert = require("assert").strict;
const { title } = require("process");
const webdriver = require("selenium-webdriver");


const serverUri = "http://localhost:3000/discussion"; // App Server

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
let browser = new webdriver.Builder()
 	.usingServer()
 	.withCapabilities({ browserName: "chrome" })
 	.build();



// gets the discussion page heading
function getDiscussionHeading() {
	return new Promise((resolve, reject) => {
		let headerElem = browser.findElement({id: 'st'});
		let headerText = headerElem.getText();
		headerText.then(function(discussionHeading) {
			resolve(discussionHeading);
		})
	})
}

describe("Discussion Page", function() {
	this.timeout(5000);

	// check the discussion page heading
	it("Should check that the heading on the discussion page is correct", function() {
		return new Promise((resolve, reject) => {
		browser
		.get(serverUri)
		.then(getDiscussionHeading)
		.then(heading => {
		assert.strictEqual(heading, "Discussion Board");
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