/**********************************************************************************
*Created by: 
*Description: 
*Project:		Project2 - Freelancer
**********************************************************************************/


module.exports = (function () {
	
	var that = {};
	
		
	/*	//SCROLL FUNCTION
    	that.scrollElemFinderIntoView = function(elemFinder) {
    		var promise = browser.executeScript(function(elem) {
    			elem.scrollIntoView(false);
    		}, elemFinder);
    		return promise;
    	};
    	
    	// Back-to-top locator
	    that.backtoTopLocator = element(by.xpath(''));
	*/   

	// ============================================================================================ check elements are present =======================================================================================================
	// ++++++++++++++++++++++++++++++ Login area ++++++++++++++++++++++++++++++
		
		// check Log In link is displayed
		that.LoginLinkPresent = function (){
			return element(by.xpath('/html/body/app-root/app-logged-out-shell/app-navigation/app-navigation-logged-out/fl-bit/fl-container/fl-bit/fl-link[1]/a')).isDisplayed();
		};
		
		// check Username field is displayed
		that.UserNameFieldPresent = function (){
			return element(by.xpath('/html/body/app-root/app-logged-out-shell/app-login-page/fl-page-layout/main/fl-container/fl-page-layout-single/app-login/fl-card/fl-bit/fl-bit/app-credentials-form/form/fl-input[1]/fl-bit/fl-bit/input')).isDisplayed();
		};
		
		// check Password field is displayed
		that.PasswordFieldPresent = function (){
			return element(by.xpath('/html/body/app-root/app-logged-out-shell/app-login-page/fl-page-layout/main/fl-container/fl-page-layout-single/app-login/fl-card/fl-bit/fl-bit/app-credentials-form/form/fl-input[2]/fl-bit/fl-bit/input')).isCisplayed();	
		};
		
		// check Login buttton is present
		that.LoginButtonPresent = function (){
			return element(by.xpath('/html/body/app-root/app-logged-out-shell/app-login-page/fl-page-layout/main/fl-container/fl-page-layout-single/app-login/fl-card/fl-bit/fl-bit/app-credentials-form/form/app-login-signup-button/fl-button/button')).isPresent();
		};
		
		
	// ++++++++++++++++++++++++++++++ User Profile area ++++++++++++++++++++++++++++++
		
		// user Profile Menu
		that.userProfileMenuButton = element(by.xpath('/html/body/app-root/app-logged-in-shell/div/app-navigation/app-navigation-primary/fl-bit/fl-container/fl-callout[5]/fl-callout-trigger/fl-button[2]/button'));
		
		// Account list popup
		that.accountListPopup = element(by.xpath('/html/body/div[2]/div/fl-callout-content/div/div[2]/app-user-settings/app-account/app-account-list/fl-list[1]'));
		// check account list popup is displayed
		that.accountListPopupDisplayed = function(){
			return accountListPopup.isDisplayed();
		};	
		
		// check user Profile Menu is present
		that.userProfileMenuButtonPresent = function (){
			return element(by.xpath('/html/body/app-root/app-logged-in-shell/div/app-navigation/app-navigation-primary/fl-bit/fl-container/fl-callout[5]/fl-callout-trigger/fl-button[2]/button')).isPresent();
		};
		
		// check user Settings Link is present
		that.userSettingsLinkPresent = function (){
			return element(by.xpath('/html/body/div[13]/div/fl-callout-content/div/div[2]/app-user-settings/app-account/app-account-list/fl-list[1]/fl-list-item[3]/fl-bit/fl-bit/fl-bit[1]/fl-bit[1]/fl-link/a'))
		};
		
		
	// ++++++++++++++++++++++++++++++ Logout area ++++++++++++++++++++++++++++++
	
		// check Logout link is displayed
		that.LogoutLinkPresent = function (){
			return element(by.xpath('/html/body/div[2]/div/fl-callout-content/div/div[2]/app-user-settings/app-account/app-account-list/fl-list[1]/fl-list-item[6]/fl-bit/fl-bit/fl-bit[1]/fl-bit[1]/fl-link/button')).isDisplayed();
		};	
		
		
		// ++++++++++++++++++++++++++++++ User Settings area (Profile Details) ++++++++++++++++++++++++++++++
		
		// First Name field 
		
		// Last Name field
		
		// Address field - input-box 1
		
		// Address field - input-box 2
		
		// City field
		
		// Zip/Post Code field
		
		// State/Provice field
		
		// Company field
		
		// Time zone drop-down
		
		// Location drop-down
		
		// Language settings browsing website language drop-down
		
		// Language settings browsing projects language drop-down
	
	
	// ================================================================================= fill in data and define actions for elements  ==============================================================================================================	
	// ++++++++++++++++++++++++++++++ Login area ++++++++++++++++++++++++++++++
		
		// click Login Link
		that.LoginLinkClick = function (){
			return element(by.xpath('/html/body/app-root/app-logged-out-shell/app-navigation/app-navigation-logged-out/fl-bit/fl-container/fl-bit/fl-link[1]/a')).click();
		};
				
		// fill username
		that.insertUserName = function (username){
			return element(by.xpath('/html/body/app-root/app-logged-out-shell/app-login-page/fl-page-layout/main/fl-container/fl-page-layout-single/app-login/fl-card/fl-bit/fl-bit/app-credentials-form/form/fl-input[1]/fl-bit/fl-bit/input')).sendKeys(username);
		};
		
		// fill password
		that.insertPassword = function (password){
			return element(by.xpath('/html/body/app-root/app-logged-out-shell/app-login-page/fl-page-layout/main/fl-container/fl-page-layout-single/app-login/fl-card/fl-bit/fl-bit/app-credentials-form/form/fl-input[2]/fl-bit/fl-bit/input')).sendKeys(password);
		};
		
		// click Log In button
		that.LoginButtonClick = function (){
			return element(by.xpath('/html/body/app-root/app-logged-out-shell/app-login-page/fl-page-layout/main/fl-container/fl-page-layout-single/app-login/fl-card/fl-bit/fl-bit/app-credentials-form/form/app-login-signup-button/fl-button/button')).click();
		};
		
				
	// ++++++++++++++++++++++++++++++ User Profile Menu area ++++++++++++++++++++++++++++++
		// click user Profile Menu
		that.userProfileMenuButtonClick = function (){
			return element(by.xpath('/html/body/app-root/app-logged-in-shell/div/app-navigation/app-navigation-primary/fl-bit/fl-container/fl-callout[5]/fl-callout-trigger/fl-button[2]/button')).click();
		};
		
		// click user Settings Link
		that.userSettingsLinkClick = function (){
			return element(by.xpath('/html/body/div[13]/div/fl-callout-content/div/div[2]/app-user-settings/app-account/app-account-list/fl-list[1]/fl-list-item[3]/fl-bit/fl-bit/fl-bit[1]/fl-bit[1]/fl-link/a')).click();
		};
		
		
	//	++++++++++++++++++++++++++++++ Logout area ++++++++++++++++++++++++++++++
		// click Logout link
		that.LogoutLinkClick = function (){
			return element(by.xpath('/html/body/div[2]/div/fl-callout-content/div/div[2]/app-user-settings/app-account/app-account-list/fl-list[1]/fl-list-item[6]/fl-bit/fl-bit/fl-bit[1]/fl-bit[1]/fl-link/button')).click();
		};
		
		
	// ++++++++++++++++++++++++++++++ User Settings area (Profile Details) ++++++++++++++++++++++++++++++
		
		// First Name field 
		
		// Last Name field
		
		// Address field - input-box 1
		
		// Address field - input-box 2
		
		// City field
		
		// Zip/Post Code field
		
		// State/Provice field
		
		// Company field
		
		// Time zone drop-down
		
		// Location drop-down
		
		// Language settings browsing website language drop-down
		
		// Language settings browsing projects language drop-down
		
		
				
		
		
				
	return that;
	
})();