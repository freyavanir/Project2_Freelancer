/**********************************************************************************
*Created by: 
*Description: 
*Project:		Project2 - Freelancer
**********************************************************************************/

module.exports = (function (loginFreelancer) {
	
	loginFreelancer.loginFreelancerPage = function (URL, username, password) {
		
		// open page Freelancer.com
		browser.get(URL);
		browser.sleep(6000);
		
		// click Log In Link
		loginFreelancer.LoginLinkClick();
		browser.sleep(6000);
		
		// fill in username
		loginFreelancer.insertUserName(username);
		browser.sleep(6000);
		
		// fill in password
		loginFreelancer.insertPassword(password);
		browser.sleep(6000);
		
		// click Log In button
		loginFreelancer.LoginButtonClick();
		
		
		
	};

	return loginFreelancer;
	
})(require('../02_Functions_P2F/basePageObj.js'));