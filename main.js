// Step 1: Create new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Step 2: Create callback function
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
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