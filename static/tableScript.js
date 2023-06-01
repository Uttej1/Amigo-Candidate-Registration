
function createFamTable(){
    var rows = document.getElementById("family-rows").value;
    const div = document.getElementById("fields1");
    if(rows==0){
        return null;
    }
    else{
    var tbl = document.createElement("table");
    tbl.className = "family-table";
    var tblBody = document.createElement("tbody");

    for (let i = 0; i < rows; i++) {
      var row = document.createElement("tr");
      for (let j = 0; j < 5; j++) {
        var cell = document.createElement("td");
        if(i==0){
            var arr = ["Name", "Relation", "Profession", "Age", "Dependent?"];
            var cellText = document.createElement('label');
            cellText.innerHTML = arr[j];
            cell.appendChild(cellText);
            row.appendChild(cell);
            tblBody.appendChild(row);
            continue;
          }
        switch(j){
            case j=0:
                var cellText = document.createElement('input');
                cellText.placeholder = "Enter Name";
                cell.appendChild(cellText);
                break;
            case j=1:
                var cellText = document.createElement('input');
                cellText.placeholder = "Enter Relation";
                cell.appendChild(cellText);
                break;
            case j=2:
                var cellText = document.createElement('input');
                cellText.placeholder = "Enter Profession";
                cell.appendChild(cellText);
                break;
            case j=3:
                var cellText = document.createElement('input');
                cellText.placeholder = "Enter Age";
                cell.appendChild(cellText);
                break;
            case j=4:
                var cellText = document.createElement('select');
                var arr = ["Dependent on You ?","Yes","No"];
                for (var k=0;k<=2;k++){
                    var opt = document.createElement('option');
                    opt.value = arr[k];
                    opt.text = arr[k];
                    cellText.appendChild(opt);
                }
                cell.appendChild(cellText);
                break;
        }
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    div.appendChild(tbl);
}
}

function createEduTable(){
var rows = document.getElementById("edu-rows").value;
const div = document.getElementById("fields2");
if(rows<3){
    alert("Minimum 3 qualifications required");
}
else{
var tbl = document.createElement("table");
tbl.className = "edu-table";
var tblBody = document.createElement("tbody");

for (let i = 0; i < rows; i++) {
  var row = document.createElement("tr");
  for (let j = 0; j < 5; j++) {
    var cell = document.createElement("td");
    if(i==0){
        var arr = ["Standard", "Board/University", "specialization/Stream", "Year of Passing", "Percentage/GPA"];
        var cellText = document.createElement('label');
        cellText.innerHTML = arr[j];
        cell.appendChild(cellText);
        row.appendChild(cell);
        tblBody.appendChild(row);
        continue;
      }
    switch(j){
        case j=0:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Standard";
            cell.appendChild(cellText);
            break;
        case j=1:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Board/University";
            cell.appendChild(cellText);
            break;
        case j=2:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Stream";
            cell.appendChild(cellText);
            break;
        case j=3:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Year";
            cell.appendChild(cellText);
            break;
        case j=4:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Percentage/GPA";
            cell.appendChild(cellText);
            break;
    }
    row.appendChild(cell);
  }
  tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
var loc = document.getElementsByClassName("fields");
div.appendChild(tbl);
}
}

function createCourseTable(){
var rows = document.getElementById("course-rows").value;
const div = document.getElementById("fields3");
var tbl = document.createElement("table");
tbl.className = "course-table";
var tblBody = document.createElement("tbody");

for (let i = 0; i < rows; i++) {
  var row = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    var cell = document.createElement("td");
    if(i==0){
        var arr = ["Course Name", "Course Duration", "Institute Name & Place", "Year of Passing"];
        var cellText = document.createElement('label');
        cellText.innerHTML = arr[j];
        cell.appendChild(cellText);
        row.appendChild(cell);
        tblBody.appendChild(row);
        continue;
      }
    switch(j){
        case j=0:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Course Name";
            cell.appendChild(cellText);
            break;
        case j=1:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Course Duration";
            cell.appendChild(cellText);
            break;
        case j=2:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Institute Name & Place";
            cell.appendChild(cellText);
            break;
        case j=3:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Year of Passing";
            cell.appendChild(cellText);
            break;
    }
    row.appendChild(cell);
  }
  tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
div.appendChild(tbl);
}

function createExpTable(){
var rows = document.getElementById("exp-rows").value;
const div = document.getElementById("fields4");
var tbl = document.createElement("table");
tbl.className = "exp-table";
var tblBody = document.createElement("tbody");

for (let i = 0; i < rows; i++) {
  var row = document.createElement("tr");
  for (let j = 0; j < 8; j++) {
    var cell = document.createElement("td");
    if(i==0){
        var arr = ["Tenure / Duration", "Location", "Organization Name", "Designation","Salary Per Month","Reason for Leaving"];
        var cellText = document.createElement('label');
        if(j==0 || j==4){
            cell.colSpan = "2";
        }
        if(j==6 || j==7){continue}
        cellText.innerHTML = arr[j];
        cell.appendChild(cellText);
        row.appendChild(cell);
        tblBody.appendChild(row);
        continue;
      }
    switch(j){
        case j=0:
            var cellText = document.createElement('input');
            cellText.placeholder = "From";
            cell.appendChild(cellText);
            break;
        case j=1:
            var cellText = document.createElement('input');
            cellText.placeholder = "To";
            cell.appendChild(cellText);
            break;
        case j=2:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Location";
            cell.appendChild(cellText);
            break;
        case j=3:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Organization Name";
            cell.appendChild(cellText);
            break;
        case j=4:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Designation";
            cell.appendChild(cellText);
            break;
        case j=5:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Starting Salary";
            cell.appendChild(cellText);
            break;
        case j=6:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Leaving Salary";
            cell.appendChild(cellText);
            break;
        case j=7:
            var cellText = document.createElement('input');
            cellText.placeholder = "Enter Reason for leaving";
            cell.appendChild(cellText);
            break;
    }
    row.appendChild(cell);
  }
  tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
div.appendChild(tbl);
}
