// Use the value below whenever you need the value //of Pi
const PI = 3.14159 ;
const sphereVolume = function (radius) {
  // Code here!
  return 4 / 3 * PI * Math.pow(radius, 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

// ------------------------------------------------------------------

const coneVolume = function (radius, height) {
  // And here!
//   return PI * Math.pow(radius, 2) * height / 3;
    return 1 / 3　* PI * Math.pow(radius, 2) * height;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

// ------------------------------------------------------------------

const prismVolume = function (height, width, depth) {
  // Probably here too!
    return (height * width * depth);
  //   return (height * width * depth) / 2;
}

console.log(prismVolume(3, 4, 5) === 60);

// ------------------------------------------------------------------

const getMonthName = (month) => {
    const monthName ={
      01: 'January', 02: 'February', 03: 'March',
      04: 'April', 05: 'May', 06: 'June',
      07: 'July', 08: 'August', 09: 'September',
      10: 'October', 11: 'November', 12: 'December'
    };
    return monthName[month];
  }
  
  const getDay = (day) => {
    switch(day){
      case '01': 
        day = '1st';
        break;
      case '02': 
        day = '2nd';
        break;
      case '03': 
        day = '3rd';
        break;    
      case '11': case '21': case '31':
        day += 'st';
        break;
      case '12': case '22':
        day += 'nd';
        break;
      case '13': case '23':
        day += 'rd';      
        break;
      default:
        day += 'th';
        break;
    }
    return day;
  }

const talkingCalendar = function(date) {
    // Your code here
    const dateSplit = date.split('/');
    const year = dateSplit[0];
    const month = dateSplit[1];
    const day = dateSplit[2];
  
    return `${getMonthName(month)} ${getDay(day)}, ${year}`;
  
  };

  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987