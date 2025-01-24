function LeapYear(year) 
{
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        return year % 400 === 0;
      } 
      else {
        return true;
      }
    } 
    else {
      return false;
    }
}
console.log(LeapYear(2024));
console.log(LeapYear(2025)); 