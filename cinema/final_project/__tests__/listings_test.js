const assert = require("assert").strict;
const { title } = require("process");
const webdriver = require("selenium-webdriver");


const serverUri = "http://localhost:3000/listings"; // App Server

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
let browser = new webdriver.Builder()
 	.usingServer()
 	.withCapabilities({ browserName: "chrome" })
 	.build();



// gets the listings page title
function getListingsTitle() {
	return new Promise((resolve, reject) => {
		let titleElem = browser.findElement({className: 'listings-title'});
		let titleText = titleElem.getText();
		titleText.then(function(carouselTitle) {
			resolve(carouselTitle);
		})
	})
}

describe("Listings Page", function() {
	this.timeout(5000);

	// check the page title
	it("Should check that the title on the listings page is correct", function() {
		return new Promise((resolve, reject) => {
		browser
		.get(serverUri)
		.then(getListingsTitle)
		.then(title => {
		assert.strictEqual(title, "All Cinema Listings");
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