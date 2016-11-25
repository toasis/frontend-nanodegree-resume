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
// DONE-----------------------------------------------------------------------------------------------------
var bio = {
      name:"Viki Zhang",
      role:"Front End Developer",
      contacts:contactInfo,
      welcomeMessage:"Welcome to Viki's website",
      skills:["skill1","skill2","skill3","skill4"],
      bioPic:"images/Viki_Zhang.png"
};
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

var contactInfo = {
      mobile:"86-189-2880-0796",
      email:"onlyzj@gmail.com",
      github:"toasis",
      twitter:"toasis",
      blog:"vikizhang.com",
      location:"Guangzhou, China"
};
var realContacts = [
      contactInfo.mobile,
      contactInfo.email,
      contactInfo.twitter,
      contactInfo.github,
      contactInfo.blog,
      contactInfo.location
];

contactInfo.display = replaceAndAppend("#topContacts",defaultContacts,realContacts);

// DONE-----------------------------------------------------------------------------------------------------

var realHTMLbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(realHTMLbioPic);

var newHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(newHTMLwelcomeMsg);

// TODO:Bug need to fix--------------------------------------------------------
$("#header").append(HTMLskillsStart);

for (var i = 0; i < bio.skills.length; i++) {
  var newHTMLskills;
  newHTMLskills += HTMLskills.replace("%data%",bio.skills[i]);
}
$("#header").append(newHTMLskills);
// DONE-----------------------------------------------------------------------------------------------------
$("#workExperience").append(HTMLworkStart);

var defaultWorkDetails = [
      HTMLworkEmployer,
      HTMLworkTitle,
      HTMLworkDates,
      HTMLworkLocation,
      HTMLworkDescription
];

var jobs = [
      job1,
      job2
];

var job1 = {
      employer:"ShenZhen Everjet Co., Ltd",
      title:"Technical Support Engineer",
      location:"Shekou, Shenzhen, China",
      date:"2006-2010",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "+
      "Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris"+
      "nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor"
  };
var realWorkDetails1st = [
      job1.employer,
      job1.title,
      job1.date,
      job1.location,
      job1.description
 ];
job1.display = replaceAndAppend(".work-entry", defaultWorkDetails, realWorkDetails1st);

var job2 = {
      employer:"Hytera Communications Co., Ltd ",
      title:"Oversea Service Manager",
      location:"Nanshan, Shenzhen, China",
      date:"2010-2013",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "+
      "Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris"+
      "nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor"
};
var realWorkDetails2nd = [
      job2.employer,
      job2.title,
      job2.date,
      job2.location,
      job2.description
];
job2.display = replaceAndAppend(".work-entry", defaultWorkDetails, realWorkDetails2nd);

// DONE-----------------------------------------------------------------------------------------------------
$("#projects").append( HTMLprojectStart);

var projects = [
      project1,
      project2
];
var defaultProjectDetails = [
      HTMLprojectTitle,
      HTMLprojectDates,
      HTMLprojectDescription,
      HTMLprojectImage
];

var project1 = {
    title:"A responsive Blog",
    dates:"10-2016",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    image:["images/FeatureWorks_PH1.png"]
};
var realProjectDetails1st = [
      project1.title,
      project1.dates,
      project1.description,
      project1.image
];
project1.display = replaceAndAppend(".project-entry", defaultProjectDetails, realProjectDetails1st);

var project2 = {
      title:"A Javascript based online resume",
      dates:"11-2016",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      image:["images/FeatureWorks_PH1.png"]
};
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

var education = {
      schools:university,
      onlineCourses:[
        udaCity,
        lynda
    ],
};

var university = {
      name:"Xidian University",
      location:"Xi'an",
      degree:"Bachelor",
      majors:["Communication Engineer","Computer Science","ipsum dolor sit amet","ipsum dolor sit amet"],
      dates:"2002-2006",
      url:"http://www.xidian.edu.cn"
};
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
var udaCity = {
      title:"Udacity Front End Nano Degree",
      school:"Udacity",
      degree:"NanoDegree",
      dates:"2016-now",
      url:"http://www.udacity.com"
};
var realOnlineCourses1st = [
      udaCity.title,
      udaCity.school,
      udaCity.degree,
      udaCity.dates,
      udaCity.url
];
udaCity.display = replaceAndAppend(".education-entry", defaultOnlineCoursesDetails, realOnlineCourses1st);

var lynda ={
      title:"Lynda online Course",
      school:"Lynda.com",
      degree:"none",
      dates:"2013-2016",
      url:"http://www.lynda.com"
};
var realOnlineCourses2nd = [
      lynda.title,
      lynda.school,
      lynda.degree,
      lynda.dates,
      lynda.url
];
udaCity.display = replaceAndAppend(".education-entry", defaultOnlineCoursesDetails, realOnlineCourses2nd);
// -----------------------------------------------------------------------------------------------------

$("#map").append(googleMap);

// -----------------------------------------------------------------------------------------------------
replaceAndAppend("#footerContacts",defaultContacts,realContacts);













