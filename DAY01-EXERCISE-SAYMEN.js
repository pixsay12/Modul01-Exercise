function area1(p1, p2){
    return p1*p2
}
console.log(area1(3,4))

function areaRec(p1, p2){
    return (2*p1) + (2 * p2)
}

function d_circle(r){
    return 2*r
}
function circum_circle(r){
    return 2*r*3.14
}

function area(r){
    return r*r*3.14
}

function triangle(s1, s2){
    return 180 - s1 - s2
}

function calculate(numberOfDays) {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);

    var yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
    var daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
    return yearsDisplay + monthsDisplay + daysDisplay; 
}
