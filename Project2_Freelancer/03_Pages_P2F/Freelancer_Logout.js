/**********************************************************************************
*Created by: 
*Description: 
*Project:		Project2 - Freelancer
**********************************************************************************/

module.exports = (function (logoutFreelancer) {
	
	logoutFreelancer.logoutFreelancerPage = function () {
		
		
		// check User Profile Menu button is present
		logoutFreelancer.userProfileMenuButtonPresent();
		browser.sleep(8000);	
		
		// click User Profile Menu
		logoutFreelancer.userProfileMenuButtonClick();
		browser.sleep(8000);
		
		// click Logout link
		logoutFreelancer.LogoutLinkClick();
		browser.sleep(6000);
		
			
	};

	return logoutFreelancer;
	
})(require('../02_Functions_P2F/basePageObj.js'));