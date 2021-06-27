function recordTable(){

    var record=[
        {
            "Date" : "11.11.20",
            "PlantName": "Jasmine",
            "Quantity":"3",
            "Cost" : "15$",

        },
        {
            "Date" : "3.3.21",
            "PlantName": "Jasmine,Bromeliads,Orchids",
            "Quantity":"3",
            "Cost" : "21$", 
        },
        {
            "Date" : "1.5.21",
            "PlantName": "Amaryllis",
            "Quantity":"5",
            "Cost" : "40$", 
        },

        {
            "Date" : "27.5.21",
            "PlantName": "Begonia",
            "Quantity":"3",
            "Cost" : "40$", 
        },
        {
            "Date" : "9.6.21",
            "PlantName": "Begonia,Amaryllis",
            "Quantity":"3",
            "Cost" : "40$", 
        },





    ]
    var col = [];
    for (var i = 0; i<record.length; i++) {
        for (var key in record[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    
    var table = document.createElement("table");

    

    var tr = table.insertRow(-1);                   

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    
    for (var i = 0; i < record.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = record[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("recordData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}
recordTable();