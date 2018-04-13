{
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
        if (i < 10) { i = "0" + i };
        return i;
    }
}
/*
function Hidden() {
    document.getElementById('button1').style.visibility = 'visible';
}
*/


var hidden = false;
function action() {
    hidden = !hidden;
    if (hidden) {
        document.getElementById('togglee').style.visibility = 'visible';
    } else {
        document.getElementById('togglee').style.visibility = 'hidden';
    }
}