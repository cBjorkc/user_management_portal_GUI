

function show_result(){
    let user  = document.getElementById("user").value;
    
    check_authorization(user);
}

function check_authorization(user){
    if (user.length == 4){
        console.log("Regular");
        if (!!document.getElementById("content_table")){
            document.getElementById("content_table").remove();
        }
        show_content();
    }else if (user.length == 5){
        console.log("Admin");
        if (!!document.getElementById("content_table")){
            document.getElementById("content_table").remove();
        }
        show_content_admin();
    }
}
function create_date_random(start, end){
    return  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
const fix_date = create_date_random(new Date(2012, 1, 1), new Date());

let sort_date_desc = function(date1, date2){
    if (date1 > date2){
        return -1;
    }if (date1 < date2){
        return 1;
    }
    return 0;
};



function show_content(){
    let body = document.body;
    let table  = document.createElement('table');
    table.setAttribute("ID", "content_table");
    table.style.width = "auto";
    table.style.border = "1px solid black";
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
    table.style.marginTop ="auto";
    table.style.padding = "auto";


    let header_array = ["Call duration (sec) ", "Data Used (kb) ", "Date"];

    for (var i = 0; i < header_array.length; i++){
        table.appendChild(document.createElement("th")).appendChild(document.createTextNode(header_array[i]));
    }

    let rnd_amount = Math.random() * 255;
    let dates_arr = [];

    for (var i = 0; i < rnd_amount; i++){
        let new_date = create_date_random(new Date(2012, 1, 1), new Date());
        dates_arr.push(new_date);
    }

    dates_arr.sort(sort_date_desc);
   
    for (var i = 0; i < rnd_amount; i++){
        let tr = table.insertRow();
        for (var j = 0 ; j < 3; j++){
            let td = tr.insertCell();
            if (j == 0){
                let rnd_duration = Math.round(Math.random() *3600);
                td.appendChild(document.createTextNode(rnd_duration));
            }
            if (j  == 1 ){
                let rnd_data_used = Math.round(Math.random() * 100000);
                td.appendChild(document.createTextNode(rnd_data_used));
            }
            if (j == 2){
                td.appendChild(document.createTextNode(dates_arr[i]));
            }
            td.style.border =" 1px solid black";
        }
    }

    body.appendChild(table);
}

function show_content_admin(){

    let body = document.body;
    let table  = document.createElement('table');
    table.setAttribute("ID", "content_table");
    table.style.width = "auto";
    table.style.border = "1px solid black";
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
    table.style.marginTop ="auto";
    table.style.padding = "auto";

    let header_array = ["Customer ID", "Call duration (sec)", "Data Used (kb) ", "Date"];

    for (var i = 0; i < header_array.length; i++){
        table.appendChild(document.createElement("th")).appendChild(document.createTextNode(header_array[i]));
    }

    let rnd_amount = Math.random() * 255;
    let dates_arr = [];

    for (var i = 0; i < rnd_amount; i++){
        let new_date = create_date_random(new Date(2012, 1, 1), new Date());
        dates_arr.push(new_date);
    }

    dates_arr.sort(sort_date_desc);

    for (var i = 0; i < rnd_amount; i++){
        let tr = table.insertRow();
        for (var j = 0 ; j < 4; j++){
            let td = tr.insertCell();
            if (j == 0){
                td.appendChild(document.createTextNode(Math.round(Math.random() * 999) ));
            }
            if (j == 1){
                let rnd_duration = Math.round(Math.random() *3600);
                td.appendChild(document.createTextNode(rnd_duration));
            }
            if (j  == 2 ){
                let rnd_data_used = Math.round(Math.random() * 100000);
                td.appendChild(document.createTextNode(rnd_data_used));
            }
            if (j == 3){
                td.appendChild(document.createTextNode(dates_arr[i]));
            }
            td.style.border =" 1px solid black";
        }
    }
    body.appendChild(table);

}

