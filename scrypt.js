setInterval(function () {
  let dateTimes = new Date();
  let dateTimesDoc = document.getElementById("timesDivID");
  let styleTimes = { weekday: "long", day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
  let reStyleTimes = dateTimes.toLocaleDateString("en-US", styleTimes).replace(/,(?=(?:[^,]*,){1}[^,]*$)/g, "");
  dateTimesDoc.innerHTML = reStyleTimes;
})