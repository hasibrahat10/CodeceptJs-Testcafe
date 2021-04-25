Feature('example');

Scenario('Login Test', ({ I }) => {
    I.amOnPage('http://zero.webappsecurity.com/login.html')
    I.waitForElement("#login_form")
    I.fillField('#user_login', 'invalid username')
    I.fillField('#user_password', 'invalid userpassword')
    I.click("input[type='submit']")
    I.waitForText('Login and/or password are wrong')
});



