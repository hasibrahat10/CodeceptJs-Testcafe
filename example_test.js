Feature('example');

// Scenario('Login Test', ({ I }) => {
//     I.amOnPage('http://zero.webappsecurity.com/login.html')
//     I.waitForElement("#login_form")
//     I.fillField('#user_login', 'invalid username')
//     I.fillField('#user_password', 'invalid userpassword')
//     I.click("input[type='submit']")
//     I.waitForText('Login and/or password are wrong')
// });


Scenario('Extract text Test', async ({ I }) => {
    I.slowTest(0.2)
    I.amOnPage('http://www.example.com')
    I.refreshPage()
    let text =await I.grabTextFrom('h1')
    console.log("Text I grab::", text);
    let value = await I.grabValueFrom('h1')
  
});


Scenario('Page objects', ({ I, LoginPage }) => {
 LoginPage.goto()
 LoginPage.fillForm()
 I.waitForText('Login and/or password are wrong')
  
});


