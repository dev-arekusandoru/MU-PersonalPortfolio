const setTitleDate = () => {

    console.log("this works");
    const d = new Date();

    let dateString = "";

    let weekday = d.getDay();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();

    switch(weekday) {
        case 0:
            dateString += "Sunday";
            break;
        case 1:
            dateString += "Monday";
            break;
        case 2:
            dateString += "Tuesday";
            break;
        case 3:
            dateString += "Wednesday";
            break;
        case 4:
            dateString += "Thursday";
            break;
        case 5:
            dateString += "Friday";
            break;
        case 6:
            dateString += "Saturday";
            break;
    }

    dateString += ", ";

    switch(month) {
        case 0:
            dateString += "January";
            break;
        case 1:
            dateString += "February";
            break;
        case 2:
            dateString += "March";
            break;
        case 3:
            dateString += "April";
            break;
        case 4:
            dateString += "May";
            break;
        case 5:
            dateString += "June";
            break;
        case 6:
            dateString += "July";
            break;
        case 7:
            dateString += "August";
            break;
        case 8:
            dateString += "September";
            break;
        case 9:
            dateString += "October";
            break;
        case 10:
            dateString += "November";
            break;
        case 11:
            dateString += "December";
            break;
    }

    dateString += " " + day + ", " + year;


    document.querySelector('#date').innerHTML = dateString;

};

setTitleDate();