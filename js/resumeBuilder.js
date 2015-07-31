/*General Vars*/
var dat = "%data%";
var url = "%url%";
var contact = "%contact%";

/*Generic replace function*/
function replaceData(el, info, data){
	if(data){
		return el.replace(data, info);
	}else{
		return el.replace(dat, info);
	}
}

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
	"biopic": "images/my_picture.jpg",
	"display": function(){
		/*Format Bio Header*/
		var formattedName = replaceData(HTMLheaderName, bio.name);
		var formattedRole = replaceData(HTMLheaderRole, bio.role);

		/*Append Bio header*/
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		/*Format Bio Contact*/
		var formattedGenericCont = replaceData(HTMLcontactGeneric, "Contact Info:", contact);
		var formattedGeneric = replaceData(formattedGenericCont, bio.contacts.generic);
		var formattedMobile = replaceData(HTMLmobile, bio.contacts.mobile);
		var formattedEmail = replaceData(HTMLemail, bio.contacts.email);
		var formattedTwitter = replaceData(HTMLtwitter, bio.contacts.github);
		var formattedGithub = replaceData(HTMLgithub, bio.contacts.twitter);
		var formattedBlog =  replaceData(HTMLblog, bio.contacts.blog);
		var formattedLocation = replaceData(HTMLlocation, bio.contacts.location);

		/*Append Bio Contact*/
		$("#topContacts").append(formattedGeneric);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedBlog);
		$("#topContacts").append(formattedLocation);

		/*Format Bio Pic and Welcome*/
		formattedBioPic = replaceData(HTMLbioPic, bio.biopic);
		formattedWelcomeMsg = replaceData(HTMLwelcomeMsg, bio.welcomeMessage);

		/*Append Bio pic and Welcome*/
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);

		/*Format Bio Skills*/
		formattedSkills = replaceData(HTMLskills, bio.welcomeMessage);

		/*Append Skill Start*/
		$("#header").append(HTMLskillsStart);

		/*Format and append Skills*/
		for(skill in bio.skills){
			$("#skills:last").append(replaceData(HTMLskills, bio.skills[skill]));
		}
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
			"description": "I work as a developer for CSS/JS solutions applied to DNN websites and Mobile Applications."
		},
		{
			"employer": "Axyoma",
			"title": "PHP and CSS Developer",
			"location": "Rosario, Argentina",
			"dates": "January 2009 - October 2011",
			"description": "I worked as a developer for PHP backend solutions and CSS stylesheets for websites."
		}
	],
	"display": function(){
		/*Iterate Work*/
		for(job in work.jobs){
			/*Append Work Start*/
			$("#workExperience").append(HTMLworkStart);

			/*Format Work*/
			var formattedEmployer = replaceData(HTMLworkEmployer, work.jobs[job].employer);
			var formattedTitle = replaceData(HTMLworkTitle, work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = replaceData(HTMLworkDates, work.jobs[job].dates);
			var formattedLocation = replaceData(HTMLworkLocation, work.jobs[job].location);
			var formattedDescription = replaceData(HTMLworkDescription, work.jobs[job].description);

			/*Append Work*/
			$('.work-entry:last').append(formattedEmployerTitle);
			$('.work-entry:last').append(formattedDates);
			$('.work-entry:last').append(formattedLocation);
			$('.work-entry:last').append(formattedDescription);
		}
	}
}

/*Projects JSON*/
var projects = {
	"projects": [
		{
			"title": "ITX.com",
			"dates": "January 2015 - March 2015",
			"description": "Responsive website for the ITX company.",
			"images": ["images/itx1.jpg", "images/itx2.jpg"]
		},
		{
			"title": "Youth Villages",
			"dates": "October 2014 - November 2014",
			"description": "Responsive website for the Youth Villages caritative organization",
			"images": ["images/yv1.jpg", "images/yv2.jpg"]
		}
	],
	"display": function(){
		/*Iterate Projects*/
		for(proj in projects.projects){
			/*Append Projects Start*/
			$("#projects").append(HTMLprojectStart);

			/*Format Projects*/
			var formattedTitle = replaceData(HTMLprojectTitle, projects.projects[proj].title);
			var formattedDates = replaceData(HTMLprojectDates, projects.projects[proj].dates);
			var formattedDescription = replaceData(HTMLprojectDescription, projects.projects[proj].description);

			/*Append Projects*/
			$('.project-entry:last').append(formattedTitle);
			$('.project-entry:last').append(formattedDates);
			$('.project-entry:last').append(formattedDescription);

			/*Format and Append Projects Images*/
			for(img in projects.projects[proj].images){
				$('.project-entry:last').append(replaceData(HTMLprojectImage, projects.projects[proj].images[img]));
			}
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
		/*Iterate Education*/
		for(school in education.schools){
			/*Append Education Start*/
			$("#education").append(HTMLschoolStart);

			/*Format Education*/
			var formattedSchoolName = replaceData(HTMLschoolName, education.schools[school].name);
			var formattedSchoolNameAndUrl = replaceData(formattedSchoolName, education.schools[school].url, url);
			var formattedSchoolDegree = replaceData(HTMLschoolDegree, education.schools[school].degree);
			var formattedNameUrlDeg = formattedSchoolNameAndUrl + formattedSchoolDegree;
			var formattedSchoolDates = replaceData(HTMLschoolDates, education.schools[school].dates);
			var formattedSchoolLocation = replaceData(HTMLschoolLocation, education.schools[school].city);
			var formattedSchoolMajor = replaceData(HTMLschoolMajor, education.schools[school].majors);

			/*Append Education*/
			$('.education-entry:last').append(formattedNameUrlDeg);
			$('.education-entry:last').append(formattedSchoolDates);
			$('.education-entry:last').append(formattedSchoolLocation);
			$('.education-entry:last').append(formattedSchoolMajor);
		}

		/*Append Online Classes title*/
		$("#education").append(HTMLonlineClasses);

		/*Iterate Online Courses*/
		for(course in education.onlineCourses){
			/*Append Online Courses*/
			$("#education").append(HTMLschoolStart);

			/*Format Online Courses*/
			var formattedOnlineTitle = replaceData(HTMLonlineTitle, education.onlineCourses[course].title);
			var formattedOnlineTitleAndUrl = replaceData(formattedOnlineTitle, education.onlineCourses[course].url, url);
			var formattedOnlineSchool = replaceData(HTMLonlineSchool, education.onlineCourses[course].school);
			var formattedTitleUrlSchool = formattedOnlineTitleAndUrl + formattedOnlineSchool;
			var formattedOnlineDates = replaceData(HTMLonlineDates, education.onlineCourses[course].dates);

			/*Append Online Courses*/
			$('.education-entry:last').append(formattedTitleUrlSchool);
			$('.education-entry:last').append(formattedOnlineDates);
		}
	}
}

/*Run Bio display*/
bio.display();

/*Run Work display*/
work.display();

/*Run Projects display*/
projects.display();

/*Run Education display*/
education.display();


