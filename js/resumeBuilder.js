/**
* @description Replace %data% and prepend or append the string with information to index.html.
* @param {string} cssSelector
* @param {string} HTMLstring
* @param {string} realInfo in the object
*/
 function replaceAndPrepend(cssSelector,HTMLstring,realInfo){
   'use strict';
  for (i = 0; i < HTMLstring.length; i += 1) {
   var newHTMLstring = [];
    newHTMLstring = HTMLstring[i].replace("%data%",realInfo[i]);
    $(cssSelector).prepend(newHTMLstring);
  }

}

function replaceAndAppend(cssSelector,HTMLstring,realInfo){
   'use strict';
  for (i = 0; i < HTMLstring.length; i += 1) {
    var newHTMLstring = [];
    newHTMLstring = HTMLstring[i].replace("%data%",realInfo[i]);
    $(cssSelector).append(newHTMLstring);
  }

}
// Viki's Personal Objects-----------------------------------------------------------------------------------------------------
var bio = {
      name:"Viki Zhang",
      role:"Front End Developer",
      contacts:{
                mobile:"86-189-2880-0796",
                email:"onlyzj@gmail.com",
                github:"toasis",
                twitter:"toasis",
                blog:"vikizhang.com",
                location:"Guangzhou, China"
      },
      welcomeMessage:"Welcome to Viki's website",
      skills:["HTML","CSS","Javascript","jQuery","SublimeText"],
      bioPic:"images/Viki_Zhang.png"
};

// var contactInfo = {
//       mobile:"86-189-2880-0796",
//       email:"onlyzj@gmail.com",
//       github:"toasis",
//       twitter:"toasis",
//       blog:"vikizhang.com",
//       location:"Guangzhou, China"
// };

var jobs = [
            {
              employer:"ShenZhen Everjet Co., Ltd",
              title:"Technical Support Engineer",
              location:"Shenzhen,China",
              date:"2006-2010",
              description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "+
              "Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris"+
              "nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor"
            },
            {
              employer:"Hytera Communications Co., Ltd ",
              title:"Oversea Service Manager",
              location:"Nanshan, Shenzhen, China",
              date:"2010-2013",
              description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "+
              "Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris"+
              "nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor"
            }
];

var projects = [
      project1,
      project2
];

var project1 = {
    title:"A responsive Blog",
    dates:"10-2016",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    image:["images/FeatureWorks_PH1.png"]
};

var project2 = {
      title:"A Javascript based online resume",
      dates:"11-2016",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      image:["images/FeatureWorks_PH1.png"]
};

var education = {
      schools:university,
      onlineCourses:[
        udaCity,
        lynda
      ]
};
var university = {
      name:"Xidian University",
      location:"Xi'an",
      degree:"Bachelor",
      majors:["Communication Engineer","Computer Science","ipsum dolor sit amet","ipsum dolor sit amet"],
      dates:"2002-2006",
      url:"http://www.xidian.edu.cn"
};

var udaCity = {
      title:"Udacity Front End Nano Degree",
      school:"Udacity",
      degree:"NanoDegree",
      dates:"2016-now",
      url:"http://www.udacity.com"
};

var lynda ={
      title:"Lynda online Course",
      school:"Lynda.com",
      degree:"none",
      dates:"2013-2016",
      url:"http://www.lynda.com"
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
bio.display= replaceAndPrepend("#header",defaultHeader,realHeader);

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

bio.contacts.display = replaceAndAppend("#topContacts",defaultContacts,realContacts);

// DONE-----------------------------------------------------------------------------------------------------

var realHTMLbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(realHTMLbioPic);

var newHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(newHTMLwelcomeMsg);

// DONE--------------------------------------------------------
$("#header").append(HTMLskillsStart);

for (var i = 0; i < bio.skills.length; i++) {
  var newHTMLskills=[];
   newHTMLskills = HTMLskills.replace("%data%",bio.skills[i]);
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
      jobs[0].employer,
      jobs[0].title,
      jobs[0].date,
      jobs[0].location,
      jobs[0].description
 ];

jobs[0].display = replaceAndAppend(".work-entry", defaultWorkDetails, realWorkDetails1st);

var realWorkDetails2nd = [
      jobs[1].employer,
      jobs[1].title,
      jobs[1].date,
      jobs[1].location,
      jobs[1].description
];

jobs[1].display = replaceAndAppend(".work-entry", defaultWorkDetails, realWorkDetails2nd);

// DONE-----------------------------------------------------------------------------------------------------
$("#projects").append( HTMLprojectStart);

var defaultProjectDetails = [
      HTMLprojectTitle,
      HTMLprojectDates,
      HTMLprojectDescription,
      HTMLprojectImage
];

var realProjectDetails1st = [
      project1.title,
      project1.dates,
      project1.description,
      project1.image
];

project1.display = replaceAndAppend(".project-entry", defaultProjectDetails, realProjectDetails1st);

var realProjectDetails2nd = [
      project2.title,
      project2.dates,
      project2.description,
      project2.image
];
project2.display = replaceAndAppend(".project-entry", defaultProjectDetails, realProjectDetails2nd);

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
      university.name,
      university.degree,
      university.dates,
      university.location,
      university.majors
];

university.display = replaceAndAppend(".education-entry", defaultSchoolDetails, realSchoolDetails);
// ---------------------------------------------------------------
var defaultOnlineCoursesDetails = [
      HTMLonlineClasses,
      HTMLonlineTitle,
      HTMLonlineSchool,
      HTMLonlineDates,
      HTMLonlineURL
];

var realOnlineCourses1st = [
      udaCity.title,
      udaCity.school,
      udaCity.degree,
      udaCity.dates,
      udaCity.url
];

udaCity.display = replaceAndAppend(".education-entry", defaultOnlineCoursesDetails, realOnlineCourses1st);

var realOnlineCourses2nd = [
      lynda.title,
      lynda.school,
      lynda.degree,
      lynda.dates,
      lynda.url
];
udaCity.display = replaceAndAppend(".education-entry", defaultOnlineCoursesDetails, realOnlineCourses2nd);
// -----------------------------------------------------------------------------------------------------

$("#mapDiv").append(googleMap);

// -----------------------------------------------------------------------------------------------------
replaceAndAppend("#footerContacts",defaultContacts,realContacts);













