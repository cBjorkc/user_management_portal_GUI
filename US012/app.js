var customers = [
  {
    customerId: 1,
    callTime: 180000,
    Kb: 5000,
    Registration: randomDate(new Date(2012, 0, 1), new Date()),
    Calls: [
      {
        callId: 1,
        customerId: 1,
        callDuration: 100,
        dataUsed: 1000,
        dateOfCall: randomDate(new Date(2012, 0, 1), new Date()),
        dataTransaction: null,
      },
      {
        callId: 2,
        customerId: 1,
        callDuration: 1000,
        dataUsed: 5000,
        dateOfCall: randomDate(new Date(2012, 0, 1), new Date()),
        dataTransaction: null,
      },
    ],
  },
  {
    customerId: 2,
    callTime: 140000,
    Kb: 1000,
    Registration: randomDate(new Date(2012, 0, 1), new Date()),
    Calls: [
      {
        callId: 1,
        customerId: 2,
        callDuration: 500,
        dataUsed: 100,
        dateOfCall: randomDate(new Date(2012, 0, 1), new Date()),
        dataTransaction: null,
      },
    ],
  },
  {
    customerId: 3,
    callTime: 100000,
    Kb: 6000,
    Registration: randomDate(new Date(2012, 0, 1), new Date()),
    Calls: [
      {
        callId: 1,
        customerId: 3,
        callDuration: 100,
        dataUsed: 1000,
        dateOfCall: randomDate(new Date(2012, 0, 1), new Date()),
        dataTransaction: null,
      },
      {
        callId: 2,
        customerId: 3,
        callDuration: 1000,
        dataUsed: 5000,
        dateOfCall: randomDate(new Date(2012, 0, 1), new Date()),
        dataTransaction: null,
      },
      {
        callId: 3,
        customerId: 3,
        callDuration: 1000,
        dataUsed: 5000,
        dateOfCall: randomDate(new Date(2012, 0, 1), new Date()),
        dataTransaction: null,
      },
    ],
  },
  {
    customerId: 4,
    callTime: 200000,
    Kb: 10000,
    Registration: randomDate(new Date(2012, 0, 1), new Date()),
    Calls: [
      {
        callId: 1,
        customerId: 4,
        callDuration: 1000,
        dataUsed: 5000,
        dateOfCall: randomDate(new Date(2012, 0, 1), new Date()),
        dataTransaction: null,
      },
    ],
  },
];

function checkCustomerId() {
  var customerID = document.getElementById("customer_id").value;
  if (isNaN(customerID)) {
    alert("Customer ID must consist of numbers!");
  } else if (customerID.length == 0) {
    alert("Customer ID must be filled in!");
  } else if (customerID.length > 10) {
    alert("Customer ID must be less than 10 numbers!");
  } else {
    let customer = customers.find(
      (customer) => customer.customerId === parseInt(customerID)
    );
    var calcultatedBill = calculateUserBillCycle(customer);
    tableCreate(calcultatedBill, customer);
    return false;
  }
}

function calculateUserBillCycle(customer) {
  if (customer === undefined) {
    alert("Customer ID not found!");
  } else {
    var bill = {
      CustomerId: customer.customerId,
      month: customer.Registration.getMonth(),
      fee: 0,
    };
    var callPrice = getCalltimePrice(customer);
    var kbPrice = getKbPrice(customer);
    var total = callPrice + kbPrice;
    bill.fee = total / 100;
    return bill;
  }
}

function tableCreate(calcultatedBill, customer) {
    var body = document.body,
        tbl = document.createElement('table');
    var orderArrayHeader = ["Customer ID", "Date", "Calls", "Cost in EUR"];
    tbl.style.width = '1000px';
    tbl.style.border = '1px solid black';
    tbl.style.marginLeft = 'auto';
    tbl.style.marginRight = 'auto';
    tbl.style.marginTop = '10px';
    tbl.style.padding = '10px';
    for (var i = 0; i < orderArrayHeader.length; i++) {
        tbl.appendChild(document.createElement("th")).
        appendChild(document.createTextNode(orderArrayHeader[i]));
    }

    var tr = tbl.insertRow();
    for(let x in orderArrayHeader){
        var td = tr.insertCell();
        if(orderArrayHeader[x] === "Customer ID"){
            td.appendChild(document.createTextNode(customer.customerId));
            td.style.border = '1px solid black';
        }else if(orderArrayHeader[x] === "Date"){
            let options = { month: 'long'};
            td.appendChild(document.createTextNode("Start date to one month ahead: " + new Intl.DateTimeFormat('en-US', options).format(customer.Registration.getMonth()) + " " + customer.Registration.getDate()));
            td.style.border = '1px solid black';
        }else if(orderArrayHeader[x] === "Calls"){
            td.appendChild(document.createTextNode(customer.Calls.length));
            td.style.border = '1px solid black';
        }else if(orderArrayHeader[x] === "Cost in EUR"){
            td.appendChild(document.createTextNode(calcultatedBill.fee.toFixed(2)));
            td.style.border = '1px solid black';
        }
        
    }
    

    body.appendChild(tbl);
}


function getCalltimePrice(customer) {
  const pricePrMinCent = 16.0;
  var total = 0;
  for (let x in customer.Calls) {
    total += customer.Calls[x].callDuration;
  }
  var minuts = total / 60;
  return minuts * pricePrMinCent;
}

function getKbPrice(customer) {
  const pricePrKbCent = 2.0;
  var total = 0;
  for (let x in customer.Calls) {
    total += customer.Calls[x].dataUsed;
  }
  return total * pricePrKbCent;
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
