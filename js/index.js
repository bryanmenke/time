$(document).ready(function(){
  var allZones = moment.tz.names();
  $.each(allZones, function(i, val){
    if(val == 'Asia/Calcutta'){
      $(".zone-select").append('<option value="' + val + '">India Standard Time</option>');
    } else {
      $(".zone-select").append('<option value="' + val + '">' + val + '</option>');
    }
  });
  if(isCookie("choosen1")){
    $("#choosen1").val(getCookie("choosen1"));
  } else {
    $("#choosen1").val('US/Arizona');
  }
  if(isCookie("choosen2")){
    $("#choosen2").val(getCookie("choosen2"));
  } else {
    $("#choosen2").val('US/Central');
  }
  if(isCookie("choosen3")){
    $("#choosen3").val(getCookie("choosen3"));
  } else {
    $("#choosen3").val('US/Eastern');
  }
  if(isCookie("choosen4")){
    $("#choosen4").val(getCookie("choosen4"));
  } else {
    $("#choosen4").val('Asia/Calcutta');
  }

  $('select').formSelect(); //Materialize CSS, initialize Select Input
});

$(function(){
  setInterval(function(){
    var utc = moment.utc();
    $('#UTC-day').text(utc.format('dddd'));
    $('#UTC-date').text(utc.format('MM-DD-YYYY'));
    $('#UTC-time').text(utc.format('HH:mm:ss a'));
    $('#UTC-zone').text(utc.format('Z'));

    var local = moment.tz(moment.tz.guess());
    $('#local-day').text(local.format('dddd'));
    $('#local-date').text(local.format('MM-DD-YYYY'));
    $('#local-time').text(local.format('HH:mm:ss a'));
    $('#local-zone').text(local.format('Z'));

    var choosen1 = moment.tz($('#choosen1').val());
    $('#choosen1-day').text(choosen1.format('dddd'));
    $('#choosen1-date').text(choosen1.format('MM-DD-YYYY'));
    $('#choosen1-time').text(choosen1.format('HH:mm:ss a'));
    $('#choosen1-zone').text(choosen1.format('Z'));

    var choosen2 = moment.tz($('#choosen2').val());
    $('#choosen2-day').text(choosen2.format('dddd'));
    $('#choosen2-date').text(choosen2.format('MM-DD-YYYY'));
    $('#choosen2-time').text(choosen2.format('HH:mm:ss a'));
    $('#choosen2-zone').text(choosen2.format('Z'));

    var choosen3 = moment.tz($('#choosen3').val());
    $('#choosen3-day').text(choosen3.format('dddd'));
    $('#choosen3-date').text(choosen3.format('MM-DD-YYYY'));
    $('#choosen3-time').text(choosen3.format('HH:mm:ss a'));
    $('#choosen3-zone').text(choosen3.format('Z'));

    var choosen4 = moment.tz($('#choosen4').val());
    $('#choosen4-day').text(choosen4.format('dddd'));
    $('#choosen4-date').text(choosen4.format('MM-DD-YYYY'));
    $('#choosen4-time').text(choosen4.format('HH:mm:ss a'));
    $('#choosen4-zone').text(choosen4.format('Z'));
  },1000);
});

$('.zone-select').change(function(){
    setCookie($(this).attr('id'),$(this).val(),120);
})

$("#restore-defaults").click(function(){
  setCookie("choosen1","abc",-1);
  setCookie("choosen2","abc",-1);
  setCookie("choosen3","abc",-1);
  setCookie("choosen4","abc",-1);
  location.reload();
});

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function isCookie(cname) {
  if(getCookie(cname) != "") {
    return true;
  } else {
    return false;
  }
}
