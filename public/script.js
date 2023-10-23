console.log('👍 JS is OK!');

const allTheMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const allTheDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
 
  const dateNow = new Date();
  console.log(dateNow);
  
  const gotMonth = dateNow.getMonth();

  let gotDayOfMonth = dateNow.getDate();
  
  const gotYear = dateNow.getFullYear();
 
  const gotDayOfWeek = dateNow.getDay();
  
  console.log(gotMonth, gotDayOfMonth, gotYear, gotDayOfWeek);
  
  const month = document.querySelector(".month");
  const dayOfMonth = document.querySelector(".dayOfMonth");
  const year = document.querySelector(".year");
  const dayOfWeek = document.querySelector(".dayOfWeek");
  

  month.innerText = allTheMonths[gotMonth];
  dayOfMonth.innerText = gotDayOfMonth;
  year.innerText = gotYear;
  dayOfWeek.innerText = allTheDays[gotDayOfWeek];
  