const Header = (title, date, temp) => {
  const header = document.createElement('div')
  const dateSpan = document.createElement('span')
  const titleH1 = document.createElement('h1')
  const tempF = document.createElement('span')


  header.className = 'header'
  dateSpan.className = 'date'
  tempF.className = 'temp'

  titleH1.textContent = `${title}`
  dateSpan.textContent = `${date}`
  tempF.textContent = `${temp} °F`;

  header.appendChild(dateSpan)
  header.appendChild(titleH1)
  header.appendChild(tempF)

  return header

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}



const headerAppender = (selector) => {

  // 12:12.00 AM Friday 6th of August, 2021:
  // var objToday = new Date(),
	// weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	// dayOfWeek = weekday[objToday.getDay()],
	// domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	// dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	// months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	// curMonth = months[objToday.getMonth()],
	// curYear = objToday.getFullYear(),
	// curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	// curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	// curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	// curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
  // var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

  
  // Fri Aug 06 2021 12:24:07 GMT-0700 (Pacific Daylight Time)
  // var today = new Date();
  
  // Aug 06 2021
  // var today  = (new Date()).toString().split(' ').splice(1,3).join(' ');
  

  // only way I could return: AUGUST 6, 2021
  var date = new Date();
  var month = new Array();
  month[0] = "JANUARY";
  month[1] = "FEBRUARY";
  month[2] = "MARCH";
  month[3] = "APRIL";
  month[4] = "MAY";
  month[5] = "JUNE";
  month[6] = "JULY";
  month[7] = "AUGUST";
  month[8] = "SEPTEMBER";
  month[9] = "OCTOBER";
  month[10] = "NOVEMBER";
  month[11] = "DECEMBER";
  var longMonth = month[date.getMonth()];
  var today = longMonth + '\n' +date.getDate()+', '+date.getFullYear();

 // temp

//  const api = 'f55767e3f9b9e392aa7f9fde4b7517e4'
//  window.addEventListener('load', () =>{
//    let long;
//    let lat;
//    if(navigator.geolocation) {
//      navigator.geolocation.getCurrentPosition((position) => {
//        long = position.coords.longitude;
//        lat = position.coords.latitude;
//        const base = `https://api.openweathermap.org/data/2.5/weatherlat=${lat}&lon=${long}&appid=${api}&units=metric`;
//       console.log(base);
//       fetch(base).then((response) => {
//         return response.json();
//       });
//       .then((data) => {
//         const { temp } = data.main;
      
//         const fahrenheit = (temp * 9) / 5 + 32;
//         tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
//       });
//     });
//   }
 





  const newHeader = document.querySelector(selector);
  newHeader.append(Header('Lambda Times', today , 'tempF'))
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
