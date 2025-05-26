function checkDay() {
  const day = document.getElementById("daySelect").value;
  const result = document.getElementById("result");

  switch (day) {
    case "Monday":
      result.textContent = "Start of the work week!";
      break;
    case "Tuesday":
      result.textContent = "Second day of the week.";
      break;
    case "Wednesday":
      result.textContent = "Midweek already!";
      break;
    case "Thursday":
      result.textContent = "Almost there.";
      break;
    case "Friday":
      result.textContent = "Weekend is near!";
      break;
    case "Saturday":
      result.textContent = "Enjoy your weekend!";
      break;
    case "Sunday":
      result.textContent = "Relax and recharge!";
      break;
    default:
      result.textContent = "Please select a day.";
      break;
  }
}