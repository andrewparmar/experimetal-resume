var bio =  {
	"name": "Andrew Parmar",
	"age": 29,
	"skills": ["python","flask","sql","javascript"],
	"contact": {
		"email": "andrew.parmar@gmail",
		"github": "andrewparmar",
		"location": "Redwood City"
	},
	"bioPic": "https://avatars0.githubusercontent.com/u/4754795?v=3&s=460"
};


var work = {
	"jobs": [{
		"Company": "OnRule",	
		"Title": "Head of Customer Success and Appications Engineer",
		"description": "Handled all customer success, onboarding and sales support duties, in addition to deep involvement in product development. Lead a staff of 5 (2 local and 3 offshore). Worked closesly with engineering to define product scope and requirments based on customer feedback. Created Python tools for internal team to use during the onboarding process. Onboarded 4 $1B plus size enterprise customers, 15 midcap customers and 10 smallcap customers onto the OnRule platform. Handled all training, training material creation, trade shows, explainer videos, product videos and tutorial videos for marketing and customers."},
		{"Company": "Vavi",	
		"Title": "Mechanical Design Engineer",
		"description": "Developed mechanical design systems."}
		]
	
};

var education = {
	"schools": {
		"name": "San Jose State University",
		"city": "San Jose",
		"degree": "Bachelors",
		"major": "Mechanical Engineering"
	},
	"onlineCourses": {
		"title": "Udacity Full Stack Nanodegee",
		"school": "Udacity",
		"dates": "2016",
		"url": "Mechanical Engineering"
	}
};

var projects = {
	"projects": [{"title":"123","dates":"234","description":"345","images":"456","link":"567"}, 2]
};



var formattedName = HTMLheaderName.replace('%data%',"Andrew Parmar");
var formattedRole = HTMLheaderRole.replace('%data%',"Web Developer");	

$("#header").append(formattedName);
$("#header").append(formattedRole);
// console.log(bio.skills[0])

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace('%data%',bio.skills[0]);
	$("#skills").append(formattedSkills)


};

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].Company);
	var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[job].Title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);


}