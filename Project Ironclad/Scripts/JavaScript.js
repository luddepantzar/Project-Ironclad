﻿{
    function RealTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    m = checkTime(m);
    document.getElementById('txt').innerHTML =
    h + ":" + m;
        var t = setTimeout(RealTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
        return i;
}

}