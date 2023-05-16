const assert = require("assert").strict;
const webdriver = require("selenium-webdriver");

// Application Server
const serverUri = "http://localhost:3000/";
const appTitle = "React App";

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
var browser = new webdriver.Builder()
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

describe("Home Page", function() {
 /**
  * Test case - load the application & check the title.
  */
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


//  // eslint-disable-next-line no-undef
//  after(function() {
//   // End of test - close browser
//   browser.quit();
//  });
});