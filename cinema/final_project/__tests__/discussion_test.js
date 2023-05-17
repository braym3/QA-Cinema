const assert = require("assert").strict;
const webdriver = require("selenium-webdriver");

// Application Server
const serverUri = "http://localhost:3000/discussion";
const appTitle = "React App";

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
var browser = new webdriver.Builder().usingServer().withCapabilities({ browserName: "chrome" }).build();

/**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
  return new Promise((resolve, reject) => {
    browser.getTitle().then(function (title) {
      resolve(title);
    });
  });
}
function logHeading() {
  return new Promise((resolve, reject) => {
    // setTimeout(function () {
    const heading = browser.findElement({ id: "st" });
    const text = heading.getText();
    text.then(function (discussionHeading) {
      resolve(discussionHeading);
    });
    // }, 5000);

    // browser.wait(webdriver.until.elementLocated({ id: "st" })).then((el) => el.getText().then((x) => resolve(x)));
    // const heading = browser.wait(webdriver.until.elementLocated(webdriver.By.xpath("//div[text() = 'Save']")), 5000);
    // browser.wait(until.elementIsVisible(heading), 5000).click();
  });
}

describe("Home Page", function () {
  /**
   * Test case - load the application & check the title.
   */
  this.timeout(10000);
  it("Should load the discussion page and get title", function () {
    return new Promise((resolve, reject) => {
      browser
        .get(serverUri)
        .then(logTitle)
        .then((title) => {
          assert.strictEqual(title, appTitle);
          resolve();
        })
        .catch((err) => reject(err));
    });
  });

  it("Should load the discussion page and get the heading", function () {
    return new Promise((resolve, reject) => {
      browser
        .get(serverUri)
        .then(logHeading)
        .then((discussionHeading) => {
          assert.strictEqual(discussionHeading, "Discussion Board");
        })
        .catch((err) => reject(err));
    });
  });

  // eslint-disable-next-line no-undef
  after(function () {
    // End of test - close browser
    browser.quit();
  });
});
