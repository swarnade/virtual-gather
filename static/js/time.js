`use strict`
let min = 0
let initial = 0
var past = 0
function update() {
  // Detect Time
  var datetime = new Date();
  date = `${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()}`;
  time = `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()} `
  document.getElementById("time").innerText = `${time}`;

  if (initial == 60) {
    min = min + 1;
    initial = initial - 60
  }
  else {

  }
  document.getElementById("duration").innerText=`${min}:${initial}`
  initial = initial + 1;

  var container = document.getElementById('video-streams');

  //Number Of Participants
  var elements = container.getElementsByClassName('video-container');
  document.getElementById("participants-num").innerText = elements.length;

  //Name Of Partipants
  var divs = container.getElementsByClassName('user-name');
  var innerTextArray = [];
  if (past != elements.length) {
    del_par_id = document.getElementById('participants');
    del_div_id = document.getElementById('class-participants');
    del_par_id.removeChild(del_div_id);

    par_id = document.getElementById('participants');
    div_sub = document.createElement('div');
    div_sub.id = 'class-participants';
    par_id.appendChild(div_sub);
    sub_par_id = document.getElementById('class-participants');

    for (var i = 0; i < divs.length; i++) {
      hello = document.createElement('p1');
      hello.className = 'participants-name'
      hello.innerText = divs[i].innerText;
      sub_par_id.appendChild(hello);
    }
    past = elements.length;
  }

  // document.getElementById("time").innerText= innerTextArray;




}
var total_duration = 0
function duration() {
  total_duration++;
}
setInterval(update, 1000);
update();


const toggleButton = document.getElementById('toggleButton');
const toggleableDiv = document.getElementById('participants');

// Add click event listener to the button
toggleButton.addEventListener('click', function () {
  // Toggle the visibility of the div
  if (toggleableDiv.style.display === 'none') {
    toggleableDiv.style.display = 'block';
  } else {
    toggleableDiv.style.display = 'none';
  }
});



















