/**********************************************************************************
*Created by: 
*Description: 
*Projecct:		Project2 - Freelancer
***********************************************************************************/


var Jasmine2HtmlReporter = require('C:/Users/User1064/eclipse-workspace/ProtractorLibrary/node_modules/protractor-jasmine2-html-reporter');
var timeStamp = new Date().getTime();   


	exports.config = {
		//The address of a running selenium server
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		chromeDriver: 'C:/Users/User1064/eclipse-workspace/ProtractorLibrary/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_83.0.4103.39.exe',
		directConnect: true,
		
		//Capabilities to be passed to the webdriver instance.
		capabilities:{
			'browserName':'chrome',
		},
			
		//Framework to use: Jasmine
		framework:'jasmine',
		
		onPrepare: function() {
			//browser.driver.manage().window().maximize();
			browser.waitForAngularEnabled(false);
			//browser.driver.manage().window().maximize();
			
            jasmine.getEnv().addReporter(
              new Jasmine2HtmlReporter({
                savePath: 'C:/Users/User1064/eclipse-workspace/Project2_Freelancer/target/screenshots',
                         showSummary: true,
                         showQuickLinks: true,
                         showConfiguration: true,
                         screenshotsFolder: 'images',
                         takeScreenshots: true,
                         takeScreenshotsOnlyOnFailures: true,
                         fixedScreenshotName: true,
                         ignoreSkippedSpecs: true,
                         cleanDestination: true,
                         consolidate: true,
                         consolidateAll: true,
                         preserveDirectory: true,                                                                                                          
                         fileName: 'Protractor-Execution-Report-' + timeStamp                                          
              })
            );
         },
		
		 // Options to be passed to Jasmine.
		 jasmineNodeOpts: {
			 showColors: true,
			 isVerbose: true,
			 realtimeFailure: true,
			 includeStackTrace: true,
			 defaultTimeoutInterval: 500000,
		 },
		    	  
		    	  
		//specs: ['../Project1/01_Scenarios/spec_LoadPage.js'],
				
				
		suites:{		    	  
		  	suite:[
		  		'../Project2_Freelancer/01_Scenarios_P2F/spec_FreelancerLoginUserSettingsLogout.js',
		  		//'../',

		  	] 
		},

};