let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}
let date = new Date(2014, 0, 3);
alert( getWeekDay(date) );