const btn = document.getElementById("btn");
const numberInput = document.getElementById("numberInput");
const multiplicationTable = document.getElementById("multiplicationTable");

btn.addEventListener("click", function() {
  const number = numberInput.value;
  let tableHTML = "";

  for (let i = 1; i < 10; i++) {
    tableHTML += "<tr>";
    tableHTML += "<td>" + number + "</td>";
    tableHTML += "<td>x</td>";
    tableHTML += "<td>" + i + "</td>";
    tableHTML += "<td>=</td>";
    tableHTML += "<td>" + number * i + "</td>";
    tableHTML += "</tr>";
  }

  multiplicationTable.innerHTML = tableHTML;
});