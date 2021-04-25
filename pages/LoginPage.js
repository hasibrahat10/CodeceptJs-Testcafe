const { I } = inject();

module.exports = {

  // insert your locators and methods here
  goto(){
    I.amOnPage('http://zero.webappsecurity.com/login.html')
  },

  fillForm(){
    I.waitForElement("#login_form")
    I.fillField('#user_login', 'invalid username')
    I.fillField('#user_password', 'invalid userpassword')
    I.click("input[type='submit']")
  }
}
