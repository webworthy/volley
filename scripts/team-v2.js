let employees = {
    
    allEmployees : { 
        employee : [
            document.getElementById('employee-0'),
            document.getElementById('employee-1'),
            document.getElementById('employee-2'),
            document.getElementById('employee-3'),
            document.getElementById('employee-4'),
            document.getElementById('employee-5'),
            document.getElementById('employee-6'),
            document.getElementById('employee-7'),
            document.getElementById('employee-8'),
            document.getElementById('employee-9'),
            document.getElementById('employee-10'),
            document.getElementById('employee-11')
        ] },
    
    allNames : { 
        name : [
            document.getElementById('name-0'),
            document.getElementById('name-1'),
            document.getElementById('name-2'),
            document.getElementById('name-3'),
            document.getElementById('name-4'),
            document.getElementById('name-5'),
            document.getElementById('name-6'),
            document.getElementById('name-7'),
            document.getElementById('name-8'),
            document.getElementById('name-9'),
            document.getElementById('name-10'),
            document.getElementById('name-11')
        ] },
    
    allbio : {
        bio : [
            document.getElementById('bio-0'),
            document.getElementById('bio-1'),
            document.getElementById('bio-2'),
            document.getElementById('bio-3'),
            document.getElementById('bio-4'),
            document.getElementById('bio-5'),
            document.getElementById('bio-6'),
            document.getElementById('bio-7'),
            document.getElementById('bio-8'),
            document.getElementById('bio-9'),
            document.getElementById('bio-10'),
            document.getElementById('bio-11')
        ] },
    
    allimg : {
        img : [
            document.getElementById('img-0'),
            document.getElementById('img-1'),
            document.getElementById('img-2'),
            document.getElementById('img-3'),
            document.getElementById('img-4'),
            document.getElementById('img-5'),
            document.getElementById('img-6'),
            document.getElementById('img-7'),
            document.getElementById('img-8'),
            document.getElementById('img-9'),
            document.getElementById('img-10'),
            document.getElementById('img-11')
        ] },
    
    allIsEmployeeClicked : { 
        isEmployeeClicked : [ false, false, false, false, false, false, false, false, false, false, false, false ] }
    
};

var gridElement = document.getElementById('team-grid').children;

//get target by mouse over or mobile click
employees.allEmployees.employee[0].addEventListener('mouseover', function() { target = 0; hoverStyle(); } );
employees.allEmployees.employee[1].addEventListener('mouseover', function() { target = 1; hoverStyle(); } );
employees.allEmployees.employee[2].addEventListener('mouseover', function() { target = 2; hoverStyle(); } );
employees.allEmployees.employee[3].addEventListener('mouseover', function() { target = 3; hoverStyle(); } );
employees.allEmployees.employee[4].addEventListener('mouseover', function() { target = 4; hoverStyle(); } );
employees.allEmployees.employee[5].addEventListener('mouseover', function() { target = 5; hoverStyle(); } );
employees.allEmployees.employee[6].addEventListener('mouseover', function() { target = 6; hoverStyle(); } );
employees.allEmployees.employee[7].addEventListener('mouseover', function() { target = 7; hoverStyle(); } );
employees.allEmployees.employee[8].addEventListener('mouseover', function() { target = 8; hoverStyle(); } );
employees.allEmployees.employee[9].addEventListener('mouseover', function() { target = 9; hoverStyle(); } );
employees.allEmployees.employee[10].addEventListener('mouseover', function() { target = 10; hoverStyle(); } );
employees.allEmployees.employee[11].addEventListener('mouseover', function() { target = 11; hoverStyle(); } );

//on click function 
var i;
for (i = 0; i < gridElement.length; i++) {
    gridElement[i].addEventListener('click', function() { toggleInfo(); });
}

//on leave event
for (i = 0; i < gridElement.length; i++) {
    gridElement[i].addEventListener('mouseleave', function() { toggleInfoOut(); } );
}

//on hover style change
function hoverStyle() {
    employees.allimg.img[target].style.opacity = "0.7";
}

//after click style change
function changeStyleUp() {
    employees.allNames.name[target].style.top = "20px";
    employees.allbio.bio[target].style.top = "-140px";
    employees.allimg.img[target].style.opacity = "0.7";
}

//after mouse leave or unclick style change
function changeStyleDown() {
    employees.allNames.name[target].style.top = "180px";
    employees.allbio.bio[target].style.top = "50px";
    employees.allimg.img[target].style.opacity = "1";
}

function toggleInfo() {
    if (employees.allIsEmployeeClicked.isEmployeeClicked[target] != true) {
        changeStyleUp();
        employees.allIsEmployeeClicked.isEmployeeClicked[target] = true;
    } else {
        changeStyleDown();
        employees.allIsEmployeeClicked.isEmployeeClicked[target] = false;
    }
}

function toggleInfoOut() {
    if (employees.allIsEmployeeClicked.isEmployeeClicked[target] != false) {
        changeStyleDown();
        employees.allIsEmployeeClicked.isEmployeeClicked[target] = false;
    } 
}





