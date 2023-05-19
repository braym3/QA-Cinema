const assert = require("assert").strict;
const { title } = require("process");
const webdriver = require("selenium-webdriver");


const serverUri = "http://localhost:3000/"; // App Server
const appTitle = "React App"; // App title to check against

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
let browser = new webdriver.Builder()
 	.usingServer()
 	.withCapabilities({ browserName: "chrome" })
 	.build();


/**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
	return new Promise((resolve, reject) => {
		browser.getTitle().then(function(title) {
			resolve(title);
		});
	});
}

// gets the carousel title
function getCarouselTitle() {
	return new Promise((resolve, reject) => {
		let titleElem = browser.findElement({className: 'release-title'});
		let titleText = titleElem.getText();
		titleText.then(function(carouselTitle) {
			resolve(carouselTitle);
		})
	})
}

describe("Home Page", function() {
	this.timeout(5000);

	// check the app title.
	it("Should load the home page and get title", function() {
		return new Promise((resolve, reject) => {
		browser
		.get(serverUri)
		.then(logTitle)
		.then(title => {
		assert.strictEqual(title, appTitle);
		resolve();
		})
		.catch(err => reject(err));
		});
	});

	// check the carousel title
	it("Should check the carousel title is correct", function() {
		return new Promise((resolve, reject) => {
		browser
		.get(serverUri)
		.then(getCarouselTitle)
		.then(carouselTitle => {
		assert.strictEqual(carouselTitle, "New Releases");
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
