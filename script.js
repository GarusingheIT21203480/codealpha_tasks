document.getElementById("calculateBtn").addEventListener("click", calculateAge);

function calculateAge() {
    var dob = document.getElementById("dob").value;
    var dobDate = new Date(dob);
    var currentDate = new Date();

    var age = calculateAgeFromDate(dobDate, currentDate);

    document.getElementById("age").innerHTML = "Your Age Is: " + age.years + " Years, " +
        age.months + " Months, and " + age.days + " Days.";
}

function calculateAgeFromDate(dateOfBirth, currentDate) {
    var yearsDiff = currentDate.getFullYear() - dateOfBirth.getFullYear();
    var monthsDiff = currentDate.getMonth() - dateOfBirth.getMonth();
    var daysDiff = currentDate.getDate() - dateOfBirth.getDate();

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        yearsDiff--;
        monthsDiff += 12;
    }

    if (daysDiff < 0) {
        var prevMonthDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            dateOfBirth.getDate()
        );

        var daysInPrevMonth = daysInMonth(
            currentDate.getMonth(),
            currentDate.getFullYear()
        );

        daysDiff = daysInPrevMonth - dateOfBirth.getDate() + currentDate.getDate();
        monthsDiff--;
    }

    return {
        years: yearsDiff,
        months: monthsDiff,
        days: daysDiff
    };
}

function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}