import data from './dataMod.json' assert {type: 'json'}
console.log(data);
//var dataMod = JSON.parse(data);

const CustomerID = document.getElementById('CustomerIDinput')
const fraudOutput = document.getElementById('fraudDETECT')
const tbody = document.getElementById('tableBody')
const fraudCounter = document.getElementById('todaysEarnings')
const avgPrice = document.getElementById('weeklyEarnings')
const percPicLabel = document.getElementById('monthlyEarnings')

CustomerID.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
    console.log(CustomerID.value) 
    updateGraph(CustomerID.value)
  }
});

function updateGraph(finalID) {
 
  var LABEL = data[finalID]["label"];
  console.log(LABEL);
  var fraudSum = 0;

  tbody.innerHTML = "";
  var newRow = tbody.insertRow();
  var newCell = newRow.insertCell();
  var newText = document.createTextNode('#');
  newCell.appendChild(newText);
  var newCell = newRow.insertCell();
  var newText = document.createTextNode('DeliveryID');
  newCell.appendChild(newText);
  var newCell = newRow.insertCell();
  var newText = document.createTextNode('Mean Item Price');
  newCell.appendChild(newText);
  var newCell = newRow.insertCell();
  var newText = document.createTextNode("Open debt");
  newCell.appendChild(newText);
  var newCell = newRow.insertCell();
  var newText = document.createTextNode("# cancelled orders");
  newCell.appendChild(newText);
  var newCell = newRow.insertCell();
  var newText = document.createTextNode("Private Label %");
  newCell.appendChild(newText);
  var newCell = newRow.insertCell();
  var newText = document.createTextNode("A brand %");
  newCell.appendChild(newText);
  var newCell = newRow.insertCell();
  var newText = document.createTextNode("LABEL");
  newCell.appendChild(newText);

  for (let i=0; i<data[finalID]["label"].length;i++){
    
    var DeliveryID = data[finalID]["DELIVERY_ID"][i];
    var ITEM_PRICE_MEAN = data[finalID]["ITEM_PRICE_MEAN"][i];
    var PERCENTAGE_PRIVATE_LABEL = data[finalID]["PERCENTAGE_PRIVATE_LABEL"][i];
    var PERCENTAGE_A_BRAND = data[finalID]["PERCENTAGE_A_BRAND"][i];
    var OPEN_DEBT = data[finalID]["OPEN_DEBT"][i];
    var CANCELLED_ORDER_COUNT = data[finalID]["CANCELLED_ORDER_COUNT"][i];
    var UNIQUE_ITEM_FRACTION = data[finalID]["UNIQUE_ITEM_FRACTION"][i];
    var LABEL = data[finalID]["label"][i];

    fraudSum = fraudSum + parseInt(LABEL)
    
    var newRow = tbody.insertRow();

    // Insert a cell at the end of the row
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(''+(i+1));
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(''+DeliveryID);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(''+ITEM_PRICE_MEAN);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(""+OPEN_DEBT);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(""+CANCELLED_ORDER_COUNT);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(""+PERCENTAGE_PRIVATE_LABEL);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(""+PERCENTAGE_A_BRAND);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(""+LABEL);
    newCell.appendChild(newText);
  }
  fraudCounter.innerHTML = ""+fraudSum;
  avgPrice.innerHTML = ""+fraudSum;
  percPicLabel.innerHTML = ""+fraudSum;


  if (fraudSum>0){
    fraudOutput.innerText = "Fraudulent Customer Detected!";
    fraudOutput.style.color = "Red"
  }
  else{
    fraudOutput.innerText = "No fraudulent activities detected."
    fraudOutput.style.color = "Green"
  }


}




function upateTable(finalID) {
  fraudOutput.innerText = "Fraud detected!!"
}
