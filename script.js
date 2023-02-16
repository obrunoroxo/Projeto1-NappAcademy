const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// console.log(currMonth)

const months = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const renderCalendar = () => {
    let firstDateOfMonth = new Date(currYear, currMonth, 1).getDay(), // getting firts day of month
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(), // getting last day of month
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDateOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        liTag += `<li>${i}</li>`
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
    }

    currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag
}

renderCalendar();


prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () =>{ // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        if (icon.id === "next") {
            currMonth += 1
            if (currMonth > 11){
                currYear += 1
                currMonth = 0
            }
        } else {
            currMonth -= 1
            if (currMonth < 0){
                currYear -= 1
                currMonth = 11
            }
        }

        renderCalendar();
    });
});