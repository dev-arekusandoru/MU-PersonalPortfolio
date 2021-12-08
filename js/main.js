const setTitleDate = () => {
    //get the date info
    const d = new Date();

    //string to be displayed in the header
    let dateString = "";

    //stores the weekday, month, day of month, and year values from d
    let weekday = d.getDay();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();

    //based on the value of weekday, add the correct day of the week to the dateString
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

    //add some formatting
    dateString += ", ";

    //based on the value of month, add the correct month to the dateString
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

    //formatting, and add day/year
    dateString += " " + day + ", " + year;

    //set the value in the html
    document.querySelector('#date').innerHTML = dateString;

};


//run it
setTitleDate();