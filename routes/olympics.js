var router = require('express').Router();


var randomIndex = function (event) {
  var ranIndex = Math.floor(Math.random() * (event.length - 0) + 0);
  return ranIndex;
}



var boxing = [
{sport:"Boxing",name:"Carlos Balderas",hometown: "Santa Maria, California",img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/balderas_carlos_100x167_2.jpg?la=en'},
{sport:"Boxing",name:"Mikaela Mayer",hometown: "Los Angeles, California",img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/mayer_mikaela_100x167.jpg?la=en'},
{sport:"Boxing",name:"Shakur Stevenson",hometown: "Newark, N.J.",img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/stevenson_shakur_100x167.jpg?h=167&w=100&la=en'},
{sport:"Boxing",name:"Charles Conwell",hometown: "Cleveland Heights",img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/conwell_charles_100x167.jpg?la=en'},
{sport:"Boxing",name:"Gary Russel",hometown: "Washington, D.C.", img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Boxing/Russell_Gary_100x167.jpg?la=en'},
{sport:"Boxing",name:"Antonio Vargas",hometown: "Kissimmee, Florida",img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Boxing/Vargas_Antonio_100x167.jpg?h=167&w=100&la=en'},
{sport:"Boxing",name:"Nico Hernandez",hometown: "Wichita, Kansas",img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/hernandez_nico_100x167.jpg?la=en'},
{sport:"Boxing",name:"Claressa Shields",hometown: "Flint, Michigan",img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/shields_claress_100x167.jpg?h=167&w=100&la=en'},
];

var kayak = [
{sport:"Kayak",name:"Casey Eichfeld",  hometown: "Drums, Pennsylvania",img: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/eichfeld_casey_100x167.jpg?la=en"},
{sport:"Kayak",name:"Ashley Nee",  hometown: "Darnestown, Maryland", img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/nee_ashley_100x167.jpg?la=en'},
{sport:"Kayak",name:"Maggie Hogan",  hometown: "Huntington Beach, California", img:"http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/hogan_maggie_100x167.jpg?la=en"},
{sport:"Kayak",name:"Michal Smolen",  hometown: "Gastonia, North Carolina", img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/smolen_michal_100x167.jpg?h=167&w=100&la=en'},
{sport:"Kayak",name:"Devin McEwan",  hometown: "Salisbury, Connecticut", img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/mcewan_devin_100x167.jpg?h=167&w=100&la=en'},
];

var judo = [
{sport:"Judo",name:'Colton Brown',hometown: 'Piscataway, N.J.',img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/brown_colton_100x167.jpg?h=167&w=100&la=en'},
{sport:"Judo",name:'Angelica Delgado',hometown: 'Miami, Florida',img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/delgado_angelica_100x167.jpg?la=en' },
{sport:"Judo",name:'Nick Delpopolo',hometown: 'Davie, Florida',img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/delpopolo_nick_100x167.jpg?la=en'},
{sport:"Judo",name:'Kayla Harrison',hometown: 'Middletown, Ohio',img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/harrison_kayla_100x167.jpg?la=en'},
{sport:"Judo",name:'Marti Malloy',hometown: 'Oak Harbor, Washington',img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/malloy_marti_100x167.jpg?la=en' },
{sport:"Judo",name:'Travis Stevens',hometown: 'Tacoma Washington',img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/stevens_travis_100x167.jpg?la=en'},
];

var archery = [
{sport:"Archery",name:'Mackenzie Brown',hometown: 'Flint, Texas',img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/brown_mackenzie_100x167.jpg?h=167&w=100&la=en' },
{sport:"Archery",name:'Jake Karminski',hometown: 'Gainsville, Florida',img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/kaminski_jake_100x167.jpg?h=167&w=100&la=en' },
{sport:"Archery",name:'Brady Ellison',hometown: 'Globe, Arizona',img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/ellison_brady_100x167.jpg?h=167&w=100&la=en' },
{sport:"Archery",name:'Zach Garrett',hometown: 'Wellington, Missouri',img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/garrett_zach_100x167.jpg?h=167&w=100&la=en' },
];

var taekwondo = [
{sport:"Taekwondo",name:'Jackie Galloway',hometown: 'Wylie, Texas',img:' http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/galloway_jackie_100x167.jpg?la=en}'},
{sport:"Taekwondo",name:'Stephen Lambdin',hometown: 'Rockwall, Texas',img: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/lambdin_stephen_100x167.jpg?la=en' },
{sport:"Taekwondo",name:'Steven Lopez',hometown: 'Sugar Land, Texas',img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/lopez_steven_100x167.jpg?h=167&w=100&la=en' },
{sport:"Taekwondo",name:'Paige McPherson',hometown: 'Abilene, Texas',img:'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/mcpherson_paige_100x167.jpg?h=167&w=100&la=en' },
];

var all = boxing.concat(kayak, judo, archery, taekwondo);

router.get('/', function (request, respond){
  respond.send("Use /boxing /sport /sport /sport /sport")
});

router.get('/boxing', function (request, respond){
  var indexNumber = randomIndex(boxing);
  respond.send(boxing[indexNumber]);
});

router.get('/kayak', function (request, respond){
  var indexNumber = randomIndex(kayak);
  respond.send(kayak[indexNumber]);
});

router.get('/judo', function (request, respond){
  var indexNumber = randomIndex(judo);
  respond.send(judo[indexNumber]);
});

router.get('/archery', function (request, respond){
  var indexNumber = randomIndex(archery);
  respond.send(archery[indexNumber]);
});

router.get('/taekwondo', function (request, respond){
  var indexNumber = randomIndex(taekwondo);
  respond.send(taekwondo[indexNumber]);
});

router.get('/all', function (request, respond){
  respond.send(all);
});




module.exports = router;
