/**
 * @description Replace %data% and prepend or append the string with information to index.html.
 * @param {string} cssSelector
 * @param {string} HTMLstring
 * @param {string} realInfo in the object
 */
function replaceAndPrepend(cssSelector, HTMLstring, realInfo) {
    'use strict';
    for (i = 0; i < HTMLstring.length; i += 1) {
        var newHTMLstring = [];
        newHTMLstring = HTMLstring[i].replace("%data%", realInfo[i]);
        $(cssSelector).prepend(newHTMLstring);
    }

}

function replaceAndAppend(cssSelector, HTMLstring, realInfo) {
    'use strict';
    for (i = 0; i < HTMLstring.length; i += 1) {
        var newHTMLstring = [];
        newHTMLstring = HTMLstring[i].replace("%data%", realInfo[i]);
        $(cssSelector).append(newHTMLstring);
    }

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
    bioPic: "images/Viki_Zhang.png"
};

var work = {
    jobs: [{
        employer: "ShenZhen Everjet Co., Ltd",
        title: "Technical Support Engineer",
        location: "Shenzhen,China",
        date: "2006-2010",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris" +
            "nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor"
    }, {
        employer: "Hytera Communications Co., Ltd ",
        title: "Oversea Service Manager",
        location: "Nanshan, Shenzhen, China",
        date: "2010-2013",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris" +
            "nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor"
    }]
};
var projects = {
    project1: {
        title: "A responsive Blog",
        dates: "10-2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        image: ["images/FeatureWorks_PH1.png"]
    },
    project2: {
        title: "A Javascript based online resume",
        dates: "11-2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        image: ["images/FeatureWorks_PH1.png"]
    }

};

var education = {
    schools: {
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
    },
    onlineCourses: {
        udaCity: {
            title: "Udacity Front End Nano Degree",
            school: "Udacity",
            degree: "NanoDegree",
            dates: "2016-now",
            url: "http://www.udacity.com"
        },
        lynda: {
            title: "Lynda online Course",
            school: "Lynda.com",
            degree: "none",
            dates: "2013-2016",
            url: "http://www.lynda.com"
        }
    }
};

// DONE-----------------------------------------------------------------------------------------------------

var defaultHeader = [
    HTMLheaderName,
    HTMLheaderRole
];
var realHeader = [
    bio.name,
    bio.role
];
bio.display = replaceAndPrepend("#header", defaultHeader, realHeader);
$("#name").after(internationalizeButton);

// DONE-----------------------------------------------------------------------------------------------------
var defaultContacts = [
    HTMLmobile,
    HTMLemail,
    HTMLtwitter,
    HTMLgithub,
    HTMLblog,
    HTMLlocation
];

var realContacts = [
    bio.contacts.mobile,
    bio.contacts.email,
    bio.contacts.twitter,
    bio.contacts.github,
    bio.contacts.blog,
    bio.contacts.location
];

bio.contacts.display = replaceAndAppend("#topContacts", defaultContacts, realContacts);

// DONE-----------------------------------------------------------------------------------------------------

var realHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(realHTMLbioPic);

var newHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(newHTMLwelcomeMsg);

// DONE--------------------------------------------------------
$("#header").append(HTMLskillsStart);

for (var i = 0; i < bio.skills.length; i++) {
    var newHTMLskills = [];
    newHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#header").append(newHTMLskills);
}

// DONE-----------------------------------------------------------------------------------------------------
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
    work.jobs[0].date,
    work.jobs[0].location,
    work.jobs[0].description
];

work.jobs[0].display = replaceAndAppend(".work-entry", defaultWorkDetails, realWorkDetails1st);

var realWorkDetails2nd = [
    work.jobs[1].employer,
    work.jobs[1].title,
    work.jobs[1].date,
    work.jobs[1].location,
    work.jobs[1].description
];

work.jobs[1].display = replaceAndAppend(".work-entry", defaultWorkDetails, realWorkDetails2nd);

// DONE-----------------------------------------------------------------------------------------------------
$("#projects").append(HTMLprojectStart);

var defaultProjectDetails = [
    HTMLprojectTitle,
    HTMLprojectDates,
    HTMLprojectDescription,
    HTMLprojectImage
];

var realProjectDetails1st = [
    projects.project1.title,
    projects.project1.dates,
    projects.project1.description,
    projects.project1.image
];

projects.project1.display = replaceAndAppend(".project-entry", defaultProjectDetails, realProjectDetails1st);

var realProjectDetails2nd = [
    projects.project2.title,
    projects.project2.dates,
    projects.project2.description,
    projects.project2.image
];
projects.project2.display = replaceAndAppend(".project-entry", defaultProjectDetails, realProjectDetails2nd);

// DONE-----------------------------------------------------------------------------------------------------
$("#education").append(HTMLschoolStart);

var defaultSchoolDetails = [
    HTMLschoolName,
    HTMLschoolDegree,
    HTMLschoolDates,
    HTMLschoolLocation,
    HTMLschoolMajor
];

var realSchoolDetails = [
    education.schools.name,
    education.schools.degree,
    education.schools.dates,
    education.schools.location,
    education.schools.majors
];

education.schools.display = replaceAndAppend(".education-entry", defaultSchoolDetails, realSchoolDetails);
// ---------------------------------------------------------------
var defaultOnlineCoursesDetails = [
    HTMLonlineClasses,
    HTMLonlineTitle,
    HTMLonlineSchool,
    HTMLonlineDates,
    HTMLonlineURL
];

var realOnlineCourses1st = [
    education.onlineCourses.udaCity.title,
    education.onlineCourses.udaCity.school,
    education.onlineCourses.udaCity.degree,
    education.onlineCourses.udaCity.dates,
    education.onlineCourses.udaCity.url
];

education.onlineCourses.udaCity.display = replaceAndAppend(".education-entry", defaultOnlineCoursesDetails, realOnlineCourses1st);

var realOnlineCourses2nd = [
    education.onlineCourses.lynda.title,
    education.onlineCourses.lynda.school,
    education.onlineCourses.lynda.degree,
    education.onlineCourses.lynda.dates,
    education.onlineCourses.lynda.url
];
education.onlineCourses.lynda.display = replaceAndAppend(".education-entry", defaultOnlineCoursesDetails, realOnlineCourses2nd);
// -----------------------------------------------------------------------------------------------------


$("#mapDiv").append(googleMap);

// -----------------------------------------------------------------------------------------------------
replaceAndAppend("#footerContacts", defaultContacts, realContacts);
