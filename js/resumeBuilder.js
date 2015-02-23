var bio = {
	"name" : "Festus Creedlebeast",
	"role" : "Jack of all Trades",
	"contacts" : {
		"mobile" : "123-456-7890",
		"email" : "festus@pirate.com",
		"github" : "festus",
		"twitter" : "@captainfestus",
		"location" : "Caribbean"
	},
	"bioPic" : "images/fry.jpg",
	"WelcomeMsg" : "Hi there!",
	"skills" : ["pirate", "pilot", "builder", "cyclist"]	
}

var education = {
	"schools" : [
	{
		"name" : "Heald",
		"location" : "Concord, CA, US",
		"degree" : "AA",
		"majors" : ["Electronics Engineering Technology"],
		"dates" : "1985",
		"url" : "http://www.heald.edu"
	},
	{
		"name" : "UOP",
		"location" : "Pleasanton, CA, US",
		"degree" : "BSBA",
		"majors" : ["Management","Business Administration"],
		"dates" : "1985-1987",
		"url" : "http://www.phoenix.edu"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Front End Web Developer",
		"school" : "Udacity",
		"dates" : "2015",
		"url" : "http://www.udacity.edu"
	}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Self",
			"title" : "Captain",
			"location" : "Caribbean Sea",
			"dates" : "1775 - 1807",
			"description" : "Plundered, looted and stole from rich merchants."
		},
		{
			"employer" : "Lindbergh Air",
			"title" : "Navigator",
			"location" : "New York, NY, US",
			"dates" : "1930 - 1950",
			"description" : "Flew the Atlantic route between New York and Paris."
		}
	]
}

var projects = {
	"projects" : [
	{
		"title" : "Buried Treasure",
		"dates" : "1806",
		"description" : "Buried several chests of gold bullion many feet deep on many beaches",
		"images" : "images/treasure.png"
	},
	{
		"title" : "New Route",
		"dates" : "1940",
		"description" : "Charted new trans-atlanitc route to go North over Greenland",
		"images" : "images/map.jpg"
	}
	]
}

bio.display = function() {

	var formattedName=HTMLheaderName.replace("%data%",bio.name);
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedbioPic = HTMLbioPic.replace('%data%',bio.bioPic);
	$("#header").append(formattedbioPic);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%',bio.WelcomeMsg);
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill);
	}

}
bio.display();

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedShoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedShoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedShoolNameDegree = formattedShoolName + formattedShoolDegree;
		$(".education-entry:last").append(formattedShoolNameDegree);
		var formattedShoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedShoolDates);
		var formattedShoolLoc = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedShoolLoc);
		if (education.schools[school].majors.length > 0){
			var majors = education.schools[school].majors.join(", ");
			var formattedShoolMajor = HTMLschoolMajor.replace("%data%",majors);
			$(".education-entry:last").append(formattedShoolMajor);
		}
	}

	for(course in education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses)
		var formattedCourseTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedCourseSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedTitleSchool = formattedCourseTitle + formattedCourseSchool
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedCourseDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedCourseDates);
		var formattedCourseURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedCourseURL);
	}
}
education.display();

work.display =  function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer); 
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDesc);
	}
}
work.display();

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDesc = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDesc);
		var formattedProjectImg = HTMLprojectImage.replace("%data%",projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectImg);
	}
}
projects.display();

$("#main").append(internationalizeButton);

function inName(name) {
	console.log(name);
	name = name.trim().split(" ");

	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	var internationalName = name.join(" ");

	return internationalName;
}


$("#mapDiv").append(googleMap);

function locationizer(work_obj) {
	var workLoc = [];
	for(job in work_obj.jobs) {
		workLoc.push(work_obj.jobs[job].location);
	}
	return workLoc;
}
console.log(locationizer(work));