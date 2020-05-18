function startTime() {
    const d = moment();
    // var tz = require('moment-timezone');
    var today = new Date();

    var h1 = d.zone("-04:00").format("hh");
    var m1 = d.zone("-04:00").format("m");
    var s1 = d.zone("-04:00").format("ss");
    m1 = checkTime(m1);
    s1 = checkTime(s1);
    
    var h2 = d.zone("+13:00").format("hh");
    var m2 = d.zone("-07:00").format("m");
    var s2 = d.zone("-07:00").format("ss");
    m2 = checkTime(m2);
    s2 = checkTime(s2);

    document.getElementById('date1').innerHTML = today.toDateString("YYYY");
    document.getElementById('timer1').innerHTML = today.toLocaleTimeString();
    // var t1 = setTimeout(startTime, 500);
    document.getElementById('date2').innerHTML = d.zone("-04:00").format("ddd MMMM D YYYY");
    document.getElementById('timer2').innerHTML =
    h1 + ":" + m1 + ":" + s1 + " " + d.zone("-04:00").format("A");

    document.getElementById('date3').innerHTML = d.zone("07:00").format("ddd MMMM D YYYY");
    document.getElementById('timer3').innerHTML =
    h2 + ":" + m2 + ":" + s2 + " " + d.zone("07:00").format("A");
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }