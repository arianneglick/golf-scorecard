/**
 * Created by arianneglick on 10/27/16.
 */
//var numPlayers = 5;


    //CHECK OUT TOASTR

var numberOfHoles = 18;
var geoLocation = {latitude: 40.4426135, longitude: -111.8631116, radius: 100};
var nearCourses;
var selectedCourse;

//blah blah blah

$( document ).ready(function() {
    $.post("http://golf-courses-api.herokuapp.com/courses/", geoLocation, function(data, status){
        nearCourses = JSON.parse(data);
        for(var p in nearCourses.courses){
            var selectInput = "<option value='" + nearCourses.courses[p].id + "'>"+ nearCourses.courses[p].name +"</option>";
            $("#courseSelect").append(selectInput);
        }
    });
});

function loadCourses(theid){
    $.get("http://golf-courses-api.herokuapp.com/courses/" + theid, function(data, status){
        selectedCourse = JSON.parse(data);
        $("#courseName").html(selectedCourse.course.name);
        for(var t = 0; t < (selectedCourse.course.holes[0].tee_boxes.length - 1); t++) {
            $("#teeType").append("<option value='" + t + "'>" + selectedCourse.course.holes[0].tee_boxes[t].tee_type + "</option>");
        }
        for (var p = 0; p < (selectedCourse.course.holes[0].tee_boxes.length - 1); p++) {
            $(".par").append("<option value='" + p + "'>" + selectedCourse.course.holes[0].tee_boxes[p].par + "</option>");
        }
        for (var y = 0; y < (selectedCourse.course.holes[0].tee_boxes.length - 1); y++) {
            $(".yards").append("<option value='" + y + "'>" + selectedCourse.course.holes[0].tee_boxes[y].yards + "</option>");
        }
    });
}
/*function loadPar(theid) {
    $.get("http://golf-courses-api.herokuapp.com/courses/" + theid, function (data, status) {
        selectedCourse = JSON.parse(data);
        for (var p = 0; p < (selectedCourse.course.holes[0].tee_boxes.length - 1); p++) {
        $(".par").append("<option value='" + p + "'>" + selectedCourse.course.holes[0].tee_boxes[i].par + "</option>");
        }
    });
 }
 function yardage(theid) {
 $.get("http://golf-courses-api.herokuapp.com/courses/" + theid, function (data, status) {
 for (var i = 0; i < (selectedCourse.course.holes[0].tee_boxes.length - 1); i++) {
 $(".yards").append("<option value='" + i + "'>" + selectedCourse.course.holes[0].tee_boxes[i].yards + "</option>");
 }
 });
 }*/

function myCreateFunction() {
    var table = document.getElementById("scoreTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
        var element1 = document.createElement('input');
        element1.type="text";
        element1.className="nameBox";
        cell1.appendChild(element1);
    var cell2 = row.insertCell(1);
        var element2 = document.createElement('input');
        element2.type="text";
        element2.className="textBox";
        cell2.appendChild(element2);
    var cell3 = row.insertCell(2);
        var element3 = document.createElement('input');
        element3.type="text";
        element3.className="textBox";
        cell3.appendChild(element3);
    var cell4 = row.insertCell(3);
        var element4 = document.createElement('input');
        element4.type="text";
        element4.className="textBox";
        cell4.appendChild(element4);
    var cell5 = row.insertCell(4);
        var element5 = document.createElement('input');
        element5.type="text";
        element5.className="textBox";
        cell5.appendChild(element5);
    var cell6 = row.insertCell(5);
        var element6 = document.createElement('input');
        element6.type="text";
        element6.className="textBox";
        cell6.appendChild(element6);
    var cell7 = row.insertCell(6);
        var element7 = document.createElement('input');
        element7.type="text";
        element7.className="textBox";
        cell7.appendChild(element7);
    var cell8 = row.insertCell(7);
        var element8 = document.createElement('input');
        element8.type="text";
        element8.className="textBox";
        cell8.appendChild(element8);
    var cell9 = row.insertCell(8);
        var element9 = document.createElement('input');
        element9.type="text";
        element9.className="textBox";
        cell9.appendChild(element9);
    var cell10 = row.insertCell(9);
        var element10 = document.createElement('input');
        element10.type="text";
        element10.className="textBox";
        cell10.appendChild(element10);
    var cell11 = row.insertCell(10);
        /*var element11 = element2 + element3 + element4 + element5 + element6 + element7 + element8 + element9 + element10;
        cell11.appendChild(element11);
        document.getElementById('frontTotal').innerHTML = element11;*/
    var cell12 = row.insertCell(11);
        var element12 = document.createElement('input');
        element12.type="text";
        element12.className="textBox";
        cell12.appendChild(element12);
    var cell13 = row.insertCell(12);
        var element13 = document.createElement('input');
        element13.type="text";
        element13.className="textBox";
        cell13.appendChild(element13);
    var cell14 = row.insertCell(13);
        var element14 = document.createElement('input');
        element14.type="text";
        element14.className="textBox";
        cell14.appendChild(element14);
    var cell15 = row.insertCell(14);
        var element15 = document.createElement('input');
        element15.type="text";
        element15.className="textBox";
        cell15.appendChild(element15);
    var cell16 = row.insertCell(15);
        var element16 = document.createElement('input');
        element16.type="text";
        element16.className="textBox";
        cell16.appendChild(element16);
    var cell17 = row.insertCell(16);
        var element17 = document.createElement('input');
        element17.type="text";
        element17.className="textBox";
        cell17.appendChild(element17);
    var cell18 = row.insertCell(17);
        var element18 = document.createElement('input');
        element18.type="text";
        element18.className="textBox";
        cell18.appendChild(element18);
    var cell19 = row.insertCell(18);
        var element19 = document.createElement('input');
        element19.type="text";
        element19.className="textBox";
        cell19.appendChild(element19);
    var cell20 = row.insertCell(19);
        var element20 = document.createElement('input');
        element20.type="text";
        element20.className="textBox";
        cell20.appendChild(element20);
    var cell21 = row.insertCell(20);
    var cell22 = row.insertCell(21);

}

function myDeleteFunction() {
    document.getElementById("scoreTable").deleteRow(-1);
}


function beginCard(){

    $("#leftCard").html("");
    $("#wholeCard").css("display","flex");
    for(var c = 1; c <= numberOfHoles; c++){
        $("#rightCard").append("<div id='column" + c +"' class='holeColumn'><div class='columnHeader'>" + c +"</div></div>");
    }
}
/*function calculatescore(theplayer){
 var thetotal = 0;
 for(var t = 1; t <= numholes; t++){
 thetotal += Number($("#player" + theplayer + "hole" + t).val());
 }
 $("#grand" + theplayer).html(thetotal);
 }*/