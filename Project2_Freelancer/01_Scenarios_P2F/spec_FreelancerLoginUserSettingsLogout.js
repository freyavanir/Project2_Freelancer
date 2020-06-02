/**********************************************************************************
*Created by: 
*Description: 
*Project:		Project2 - Freelancer
**********************************************************************************/

describe('spec_FreelancerLoginUserSettingsLogout', function () {
	
	var loginFreelancer = require('../03_Pages_P2F/Freelancer_Login.js');
	var logoutFreelancer = require('../03_Pages_P2F/Freelancer_Logout.js');
	var testdata = require('../04_InputData_P2F/InputData_P2F.json');
		testdata.forEach (function (data) {
			
	it('Login and Logout', function () {
		
		//do login freelancer
		loginFreelancer.loginFreelancerPage (data.URL, data.username, data.password);
		
		//do logout freelancer
		logoutFreelancer.logoutFreelancerPage();

	});
	
		}); // close data

}); //close main function