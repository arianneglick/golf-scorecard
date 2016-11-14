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
        for(var i = 0; i < (selectedCourse.course.holes[0].tee_boxes.length - 1); i++){
            $("#teeType").append("<option value='" + i + "'>"+ selectedCourse.course.holes[0].tee_boxes[i].tee_type +"</option>");
        }
    });
}

for(var pl = 1; pl <= numplayers; pl++ ) {
    playercollection += "<div id='player" + pl + "' class='holebox playerbox'> Player " + pl + " <span onclick='deleteplayer(" + pl + ")' class='deletebtn glyphicon glyphicon-minus-sign'></span></div>";
    grandtotalcollection += "<div id='grand" + pl + "' class='holebox'>0</div>";
}
function calculatescore(theplayer){
    var thetotal = 0;
    for(var t = 1; t <= numholes; t++){
        thetotal += Number($("#player" + theplayer + "hole" + t).val());
    }
    $("#grand" + theplayer).html(thetotal);
}

function deleteplayer(playerid){
    $("#player" + playerid).remove();
    $("#grand" + playerid).remove();
    for(var p = 1; p <= numholes; p++){
        $("#player" + playerid + "hole" + p).remove();
    }
}

function myCreateFunction() {
    var table = document.getElementById("scoreTable");
    var row = table.insertRow(scoreTable.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    var cell12 = row.insertCell(11);
    var cell13 = row.insertCell(12);
    var cell14 = row.insertCell(13);
    var cell15 = row.insertCell(14);
    var cell16 = row.insertCell(15);
    var cell17 = row.insertCell(16);
    var cell18 = row.insertCell(17);
    var cell19 = row.insertCell(18);
    var cell20 = row.insertCell(19);

}

function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
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


