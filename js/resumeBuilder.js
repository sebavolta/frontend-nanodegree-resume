/*Bio JSON*/
var bio = {
	"name": "Sebastian Volta",
	"role": "Front End Developer",
	"contacts": {
		"generic": "Contact Me!",
		"mobile": "0341 156551457",
		"email": "sebavolta@gmail.com" ,
		"github": "https://github.com/sebavolta",
		"twitter": "https://twitter.com/sebastianvolta",
		"blog":  "blogspot.com/sebastianvolta",
		"location": "Rosario, Santa Fe, Argentina"
	},
	"welcomeMessage": "Welcome to My Resume Page",
	"skills": ["Ninja coder", "Mobile developer", "Front End Developer"],
	"biopic": "/images/my_picture.jpg",
	"display": function(){
		/*Sets Bio Header*/
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		/*Sets Contacts info*/
		for(contact in bio.contacts){
			 
		}
	}
}

/*Education JSON */
var education = {
	"schools": [
		{
			"name": "Belgrano",
			"city": "Rosario",
			"degree": "Analyst",
			"majors": ["Major 1", "Major 2", "Major 3"],
			"dates": 2007,
			"url": "http://www.complejobelgrano.edu.ar"
		},
		{
			"name": "UNR",
			"city": "Rosario",
			"degree": "Designer",
			"majors": ["UNR Major 1", "UNR Major 2", "UNR Major 3"],
			"dates": 2009,
			"url": "http://www.unr.edu.ar"
		},
	],
	"onlineCourses": [
		{
			"title": "HTNL5 Game Development",
			"school": "Udacity",
			"dates": 2012,
			"url": "https://www.udacity.com/course/viewer#!/c-cs255"
		},
		{
			"title": "2D Game Development",
			"school": "Microsoft Virtual Academy",
			"dates": 2013,
			"url": "http://www.microsoftvirtualacademy.com/training-courses/desarrollo-de-videojuegos-2d-para-windows-8-1-con-unity"
		}
	],
	"display": function(){
		//
	}
}

/*Work JSON*/
var work = {
	"jobs": [
		{
			"employer": "ITX Corp.",
			"title": "Front End Developer",
			"location": "Rochester, USA",
			"dates": "November 2011 - Today",
			"description": "I develope CSS/JS solutions for DNN websites and Mobile Applications."
		},
		{
			"employer": "Axyoma",
			"title": "PHP and CSS Developer",
			"location": "Rosario, Argentina",
			"dates": "January 2009 - October 2011",
			"description": "I developed PHP backend solutions and CSS stylesheets for websites."
		}
	],
	"display": function(){
		//
	}
}

/*Projects JSON*/
var projects = {
	"projects": [
		{
			"title": "ITX.com",
			"dates": "January 2015 - March 2015",
			"description": "Responsive website for the ITX company.",
			"images": ["", ""]
		},
		{
			"title": "Youth Villages",
			"dates": "October 2014 - November 2014",
			"description": "Responsive website for the Youth Villages caritative organization",
			"images": ["", ""]
		}
	],
	"display": function(){
		//
	}
} 
      


/*Run Bio display*/
bio.display();




