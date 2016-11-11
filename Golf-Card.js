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
            $("#teeType").append("<option value='" + i + "'>"+ selectedCourse.course.holes[0].tee_boxes[i].tee_type +"</option>"); //something here isn't working quite right. "value" is appearing next to the tee
        }
    });
}

function beginCard(){
    var players = $("#playerCount").val();
    $("#leftCard").html("");
    $("#wholeCard").css("display","flex");
    for(var i = 0; i < players; i++){
        var playerLabel = "<div id='playerLabel" + i + "'>" +
                "Player "+ (i + 1) +" " +
                "<span class='glyphicon glypicon-minus-sign' onclick='removePlayer("+ i +")'></span>"
            "</div>";
        $("#leftCard").append(playerLabel);
    }
    for(var c = 1; c <= numberOfHoles; c++){
        $("#rightCard").append("<div id='column" + c +"' class='holeColumn'><div class='columnHeader'>" + c +"</div></div>");
    }
    $(".modalBackground").fadeOut();
}


function removePlayer(theId){
    $("#playerLabel" + theId).remove();
}

//Get the geolocation
/*
function getGeolocation(){
    return new Promise(function (resolve, reject) {
        var options = {
            enableHighAccuracy: true
        };
        function success(pos){
            var coordinates = pos.coords;

            console.log('Your current position is: ');
            console.log('Latitude: ' + coordinates.latitude);
            console.log('Longitude' + coordinates.longitude);
            console.log('More or less ' + coordinates.accuracy + ' meters.');

            resolve(coordinates);
        }
        function error(error){
            console.warn('ERROR(' + error.code + '): ' + error.message);
            reject(error);
        }
        navigator.geolocation.getCurrentPosition(success, error, options);
    })
}

function showLoadingScreen(){
    $('#loading-screen').show();
}

function hideLoadingScreen(){
    $('#loading-screen').hide();
}

function createCourseSelect(){

}*/
