Feature('example');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://www.example.com')
    I.wait(1)
    I.waitForElement('h1')
    I.see('example')
    I.dontSeeElement('.login-form')
    I.seeInCurrentUrl("example.com")
});


Scenario('test item two', ({ I }) => {
    I.amOnPage('https://www.example.com')
    I.wait(1)
    I.dontSeeElement('.login-form')
    I.seeInCurrentUrl("example.com")
});

Scenario('test item three', ({ I }) => {
    I.amOnPage('https://www.example.com')
    I.wait(1)
   
    I.seeInCurrentUrl("example.com")
});


Scenario('Full page screen shot', ({ I }) => {
    I.amOnPage('https://www.example.com')
    I.wait(1)
    I.seeInCurrentUrl("example.com")
    I.saveScreenshot('test.png', true)
});


Scenario('single element screenshot', ({ I }) => {
    I.amOnPage('https://www.example.com')
    I.wait(1)
    I.seeInCurrentUrl("example.com")
   
});


