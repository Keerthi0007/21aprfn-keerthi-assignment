function checkDay() {
  const day = document.getElementById("dayInput").value;
  const result = document.getElementById("result");

  switch (day) {
    case "1":
      result.textContent = "Monday";
      break;
    case "2":
      result.textContent = "Tuesday.";
      break;
    case "3":
      result.textContent = "Wednesday";
      break;
    case "4":
      result.textContent = "Thursday";
      break;
    case "5":
      result.textContent = "Friday";
      break;
    case "6":
      result.textContent = "Saturday";
      break;
    case "7":
      result.textContent = "Sunday";
      break;
    default:
      result.textContent = "Please select a day.";
      break;
  }
}