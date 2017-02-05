var g44 = ["Alexandra Tooley", "Christian Taggart", "Delaney Patterson", "Derek Jones", "Emily Ringoen", "Erica Epperson", "Garrick George", "Grace Li", "Haley Kalb", "Heather Gloria", "Jennifer Winer", "John Gallagher", "Joshua Lerner", "Kaiti Johnson", "Ken Kotch", "Kevin Conrad", "Kevin Seagraves", "Lauren Risberg", "Matthew Albrecht", "Megan Gross", "Nicolas Roldos", "Rhys Goehring", "Ryan Frazier", "Samuel Miller", "Sean Kelly", "Steven Hendricks", "Thomas Conchie", "Thomas Garrison", "Timothy Cutter"];

for (var i = 0; i < g44.length; i++) {
  var currentName = g44[i];
  if (currentName.includes('Conrad')){
  console.log('Kevin wins!');
  break;
}else{
  console.log(currentName);
}
};

var car = {
  make: 'Toyota',
  model: '4Runner',
  year: 2005,
  color: 'black'
}
console.log(car.model);
