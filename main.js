////////////////////////////////////////////
/////////// AJAX REQUEST NO. 1 /////////////
////////////////////////////////////////////

// Step 1: Create new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Step 2: Create callback function
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        // console.log(typeof xhr.responseText);
        var employees = JSON.parse(xhr.responseText);
        // console.log(employees);
        var statusHTML = '<ul class="bulleted">';
        for (var i = 0; i < employees.length; i += 1) {
            if (employees[i].inoffice === true) {
              statusHTML += '<li class="in">';
            } else {
              statusHTML += '<li class="out">';
            }
          statusHTML += employees[i].name;
          statusHTML += '</li>';
        }
      statusHTML += '</ul>';
      document.getElementById('employeeList').innerHTML = statusHTML;
    }
};

// Step 3: Open request
xhr.open('GET', 'data/employees.json');

// Step 4: Send request
xhr.send();



////////////////////////////////////////////
/////////// AJAX REQUEST NO. 2 /////////////
////////////////////////////////////////////

// Step 1: Create new XMLHttpRequest object
var roomRequest = new XMLHttpRequest();

// Step 2: Create callback function
roomRequest.onreadystatechange = function () {
  if(roomRequest.readyState === 4 && roomRequest.status === 200) {
    var rooms = JSON.parse(roomRequest.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};

// Step 3: Open request
roomRequest.open('GET', '../data/rooms.json');

// Step 4: Send request
roomRequest.send();