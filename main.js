// Linje 3-9 beskriver min tidsindstilling og dags dato på siden. Jeg gør brug af en function, som finder den lokale tid, samt dato:
// toLocaleTimeString og toDateString, er to indbyggede functions, som gør det let at hente de informationer jeg beder om.
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = d.toDateString();
}
