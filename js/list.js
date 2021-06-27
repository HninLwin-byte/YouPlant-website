

function CreateTable() {
    var indoorplantData = [
        {
            name :"Begonia",
            id   : "0000",
            varieties :" pink, white, red, or orange",
            price : "5$",
    
        },
        {
            name :"Jasmine",
            id  : "0001",
            varieties :" white",
            price : "5$",
        },
        {
            name :"Orchids",
            id   : "0002",
            varieties :" 30,000 different species",
            price : "8$",
        },
        {
            name :"Bromeliads",
            id   : "0003",
            varieties :" red, hot pink , purple",
            price : "8$",
        },
        {
            name :"Amaryllis",
            id   : "0004",
            varieties :" red, white, pink, salmon, orange",
            price : "8$",
        }
    
    
    
    ]

    
    var col = [];
    for (var i = 0; i < indoorplantData.length; i++) {
        for (var key in indoorplantData[i]) {
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

    
    for (var i = 0; i < indoorplantData.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = indoorplantData[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
CreateTable();