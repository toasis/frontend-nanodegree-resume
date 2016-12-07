/**
 * @description Replace %data% and prepend or append the string with information to index.html.
 * @param {string} cssSelector
 * @param {string} HTMLstring
 * @param {string} realInfo in the object
 */
function replaceAndPrepend(cssSelector, HTMLstring, realInfo) {
    'use strict';
    for (var i = 0; i < HTMLstring.length; i += 1) {
        var newHTMLstring = [];
        newHTMLstring = HTMLstring[i].replace("%data%", realInfo[i]);
        $(cssSelector).prepend(newHTMLstring);
    }

}

function replaceAndAppend(cssSelector, HTMLstring, realInfo) {
    'use strict';
    for (var i = 0; i < HTMLstring.length; i += 1) {
        var newHTMLstring = [];
        newHTMLstring = HTMLstring[i].replace("%data%", realInfo[i]);
        $(cssSelector).append(newHTMLstring);
    }

}
/**
 * @description Replace %data% in HTMLskills and HTML contacts with my real info.
 */
function appendContactsAndSkills() {
    'use strict';
    for (var i = 0; i < bio.skills.length; i += 1) {
        var newHTMLskills = [];
        newHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(newHTMLskills);
    }
    $("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts,#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts,#footerContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
    $("#topContacts,footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}



// Viki's Personal Objects-----------------------------------------------------------------------------------------------------
var bio = {
    name: "Viki Zhang",
    role: "Front End Developer",
    contacts: {
        mobile: "86-189-2880-0796",
        email: "onlyzj@gmail.com",
        github: "toasis",
        twitter: "toasis",
        blog: "vikizhang.com",
        location: "Guangzhou, China"
    },
    welcomeMessage: "Welcome to Viki's website",
    skills: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
        "SublimeText"
    ],
    biopic: "images/Viki_Zhang.png"
};

var work = {
    jobs: [{
        employer: "ShenZhen Everjet Co., Ltd",
        title: "Technical Support Engineer",
        location: "Shenzhen,China",
        dates: "2006-2010",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris" +
            "nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor"
    }, {
        employer: "Hytera Communications Co., Ltd ",
        title: "Oversea Service Manager",
        location: "Nanshan, Shenzhen, China",
        dates: "2010-2013",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris" +
            "nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor"
    }]
};
var projects = {
    projects: [{
        title: "A responsive Blog",
        dates: "10-2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        images: ["images/FeatureWorks_PH1.png"]
    }, {
        title: "A Javascript based online resume",
        dates: "11-2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        images: ["images/FeatureWorks_PH1.png"]
    }]

};

var education = {
    schools: [{
        name: "Xidian University",
        location: "Xi'an",
        degree: "Bachelor",
        majors: [
            "Communication Engineer",
            "Computer Science",
            "ipsum dolor sit amet",
            "ipsum dolor sit amet"
        ],
        dates: "2002-2006",
        url: "http://www.xidian.edu.cn"
    }, {
        name: "HighSchool",
        location: "Gui'Yang",
        degree: "High School",
        majors: [
            "Math",
            "Chinese",
            "ipsum dolor sit amet",
            "ipsum dolor sit amet"
        ],
        dates: "1999-2002",
        url: "http://www.xidian.edu.cn"
    }],
    onlineCourses: [{
        title: "Udacity Front End Nano Degree",
        school: "Udacity",
        degree: "NanoDegree",
        dates: "2016-now",
        url: "http://www.udacity.com"
    }, {
        title: "Lynda online Course",
        school: "Lynda.com",
        degree: "none",
        dates: "2013-2016",
        url: "www.lynda.com"
    }]
};

// Header-----------------------------------------------------------------------------------------------------

$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

$("#name").after(internationalizeButton);

var realHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(realHTMLbioPic);

var newHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(newHTMLwelcomeMsg);

$("#header").append(HTMLskillsStart);

bio.display = appendContactsAndSkills();

// Work Experience-----------------------------------------------------------------------------------------------------
$("#workExperience").append(HTMLworkStart);

var defaultWorkDetails = [
    HTMLworkEmployer,
    HTMLworkTitle,
    HTMLworkDates,
    HTMLworkLocation,
    HTMLworkDescription
];

var realWorkDetails1st = [
    work.jobs[0].employer,
    work.jobs[0].title,
    work.jobs[0].dates,
    work.jobs[0].location,
    work.jobs[0].description
];

work.jobs[0].display = replaceAndAppend(".work-entry", defaultWorkDetails, realWorkDetails1st);

var realWorkDetails2nd = [
    work.jobs[1].employer,
    work.jobs[1].title,
    work.jobs[1].dates,
    work.jobs[1].location,
    work.jobs[1].description
];

work.jobs[1].display = replaceAndAppend(".work-entry", defaultWorkDetails, realWorkDetails2nd);

// Projects-----------------------------------------------------------------------------------------------------
$("#projects").append(HTMLprojectStart);

var defaultProjectDetails = [
    HTMLprojectTitle,
    HTMLprojectDates,
    HTMLprojectDescription,
    HTMLprojectImage
];

var realProjectDetails1st = [
    projects.projects[0].title,
    projects.projects[0].dates,
    projects.projects[0].description,
    projects.projects[0].images
];

projects.projects[0].display = replaceAndAppend(".project-entry", defaultProjectDetails, realProjectDetails1st);

var realProjectDetails2nd = [
    projects.projects[1].title,
    projects.projects[1].dates,
    projects.projects[1].description,
    projects.projects[1].images
];
projects.projects[1].display = replaceAndAppend(".project-entry", defaultProjectDetails, realProjectDetails2nd);

// Education-----------------------------------------------------------------------------------------------------
$("#education").append(HTMLschoolStart);

var defaultSchoolDetails = [
    HTMLschoolName,
    HTMLschoolDegree,
    HTMLschoolDates,
    HTMLschoolLocation,
    HTMLschoolMajor
];

var realSchoolDetails1st = [
    education.schools[0].name,
    education.schools[0].degree,
    education.schools[0].dates,
    education.schools[0].location,
    education.schools[0].majors
];

var realSchoolDetails2nd = [
    education.schools[1].name,
    education.schools[1].degree,
    education.schools[1].dates,
    education.schools[1].location,
    education.schools[1].majors
];

education.schools[0].display = replaceAndAppend(".education-entry", defaultSchoolDetails, realSchoolDetails1st);
education.schools[1].display = replaceAndAppend(".education-entry", defaultSchoolDetails, realSchoolDetails2nd);
// Education.onlineCourse-----------------------------------------------------
$(".education-entry").append(HTMLonlineClasses);
var formattedonlineTitle1 = HTMLonlineTitle.replace("#", education.onlineCourses[0].url).replace("%data%", "Udacity");
var formattedonlineTitle2 = HTMLonlineTitle.replace("#", education.onlineCourses[1].url).replace("%data%", "Lynda");
var defaultOnlineCoursesDetails = [
    HTMLonlineTitle,
    HTMLonlineSchool,
    HTMLonlineDates,
    HTMLonlineURL
];

var realOnlineCourses1st = [
    formattedonlineTitle1,
    education.onlineCourses[0].school,
    education.onlineCourses[0].degree,
    education.onlineCourses[0].dates,
    education.onlineCourses[0].url
];

education.onlineCourses[0].display = replaceAndAppend(".education-entry", defaultOnlineCoursesDetails, realOnlineCourses1st);

var realOnlineCourses2nd = [
    formattedonlineTitle2,
    education.onlineCourses[1].school,
    education.onlineCourses[1].degree,
    education.onlineCourses[1].dates,
    education.onlineCourses[1].url
];
education.onlineCourses[1].display = replaceAndAppend(".education-entry", defaultOnlineCoursesDetails, realOnlineCourses2nd);

// Google Map-----------------------------------------------------------------------------------------------------

$("#mapDiv").append(googleMap);
