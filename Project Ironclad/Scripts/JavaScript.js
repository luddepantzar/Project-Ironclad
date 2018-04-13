/*{
    function RealTime()
    {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    m = checkTime(m);
    document.getElementById('TimeReal').innerHTML =
    h + ":" + m;
        var t = setTimeout(RealTime, 500);
    }

    function checkTime(i)
    {
    if (i < 10) {i = "0" + i}; 
        return i;
    }   
}

{
    function Date()
    {
        var thisYear = new Date();
        var mo = thisYear.getMonth();
        var da = thisYear.getDay();

        da = checkDay(da);
        document.getElementById('TodayDate').innerHTML =
            mo + " " + da;
    }

    function checkDay(i)
    {
        if (i < 10) { i = "0" + i };
            return i;
    }
}*/


    function TimeDate() {
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array(
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'Jully',
            'August',
            'September',
            'October',
            'November',
            'December'
        );
        d = date.getDate();
        day = date.getDay();
        days = new Array(
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        );
        h = date.getHours();
        if (h < 10) {
            h = "0" + h;
        }
        m = date.getMinutes();
        if (m < 10) {
            m = "0" + m;
        }
        result = h + ':' + m + ' ' + days[day] + ' ' + months[month] + ' ' + d + ' '
        + year;
        document.getElementById('DateTime').innerHTML = result;
        setTimeout('TimeDate', '1000');
        return true;
    }