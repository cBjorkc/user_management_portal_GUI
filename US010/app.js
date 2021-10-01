function showUserDetails() {

    var customerID = document.getElementById('custId').value;
    if (isNaN(customerID)) {
        alert("Customer ID must consist of numbers!");
    } else if (customerID.length == 0) {
        alert("Customer ID must be filled in!");
    } else if (customerID.length > 10) {
        alert("Customer ID must be less than 10 numbers!");

    } else {
        tableCreate(customerID)
        return false;
    }

}


function tableCreate(custId) {
    var body = document.body,
        tbl = document.createElement('table');
    var orderArrayHeader = ["Customer ID", " Call duration (sec)", "Data used (Kb)", "Date"];
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
    var randomAmount = Math.random() * 250;
    var dates_arr = [];
    for (var i = 0; i < randomAmount; i++) {
        var dateNew = randomDate(new Date(2012, 0, 1), new Date());
        dates_arr.push(dateNew);
    }
    dates_arr.sort(date_sort_desc);

    for (var i = 0; i < randomAmount; i++) {

        var tr = tbl.insertRow();
        for (var j = 0; j < 4; j++) {
            var td = tr.insertCell();
            if (j == 0) {
                td.appendChild(document.createTextNode(custId));
            }
            if (j == 1) {
                var randomSec = Math.round(Math.random() * 500);
                td.appendChild(document.createTextNode(randomSec));
            }
            if (j == 2) {
                td.appendChild(document.createTextNode((randomSec * 5).toFixed(2)));
            }
            if (j == 3) {
                td.appendChild(document.createTextNode(dates_arr[i]));
            }

            td.style.border = '1px solid black';

        }
    }
    body.appendChild(tbl);

}


function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const d = randomDate(new Date(2012, 0, 1), new Date());


var date_sort_desc = function(date1, date2) {
    // This is a comparison function that will result in dates being sorted in
    // DESCENDING order.
    if (date1 > date2) return -1;
    if (date1 < date2) return 1;
    return 0;
};