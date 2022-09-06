var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

if (mm == "01") {
  today = `January ${dd}, ${yyyy}`;
}
else if (mm == "02") {
  today = `February ${dd}, ${yyyy}`;

}
else if (mm == "03") {
  today = `March ${dd}, ${yyyy}`;
}
else if (mm == "04") {
  today = `April ${dd}, ${yyyy}`;
}
else if (mm == "05") {
  today = `May ${dd}, ${yyyy}`;
}
else if (mm == "06") {
  today = `June ${dd}, ${yyyy}`;
}
else if (mm == "07") {
  today = `July ${dd}, ${yyyy}`;
}
else if (mm == "08") {
  today = `August ${dd}, ${yyyy}`;
}
else if (mm == "09") {
  today = `September ${dd}, ${yyyy}`;
}
else if (mm == "10") {
  today = `October ${dd}, ${yyyy}`;
}
else if (mm == "11") {
  today = `November ${dd}, ${yyyy}`;
}
else if (mm == "12") {
  today = `December ${dd}, ${yyyy}`;
}


let date = document.getElementById("date");
date.innerHTML = today;

function enterName() {
  let text;
  let person = prompt("Please enter your name:", "");
  if (person == null || person == "") {
    text = "Cleared to enter the campus";
  } else {
    document.cookie = `${person}; SameSite=None; Secure; expires=Sat, 05 Aug 2023 23:00:00 UTC; path=/";`;
    text = `${person} <br> Cleared to enter the campus`;
  }
  document.getElementById("name").innerHTML = text;
}



let nameCookie = document.cookie;
if (nameCookie == ""){
  enterName();
} else {
  document.getElementById("name").innerHTML = `${nameCookie} <br> Cleared to enter the campus`;
}



