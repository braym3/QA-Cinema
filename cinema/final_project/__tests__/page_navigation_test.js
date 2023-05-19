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

// navigates to the listings page & gets the listings page header
function goToListings() {
	return new Promise(async (resolve, reject) => {
        // get listings page link from the navbar
        let listingsNavLink = await browser.findElement({id: 'listings-nav-link'});
        listingsNavLink.click();
		let titleElem = await browser.findElement({className: 'listings-title'});
		let titleText = titleElem.getText();
		titleText.then(function(carouselTitle) {
			resolve(carouselTitle);
		})
	})
}



describe("Page Navigation", function() {
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

	// // click the listings link in the nav and check that the listings heading is correct
	// it("Should navigate to the listings page and check the header is correct", function() {
	// 	return new Promise((resolve, reject) => {
	// 	browser
	// 	.get(serverUri)
	// 	.then(goToListings)
	// 	.then(listingsHeader => {
	// 	assert.strictEqual(listingsHeader, "All Listings");
	// 	resolve();
	// 	})
	// 	.catch(err => reject(err));
	// 	});
	// });


	// eslint-disable-next-line no-undef
	after(function() {
		// End of test - close browser
		browser.quit();
	});
});
