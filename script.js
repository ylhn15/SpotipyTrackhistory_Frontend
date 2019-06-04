function getTracklist() 
{
    fetch('<path-to-tracklist')
        .then(response => response.json())
        .then(jsonResponse => createTableWithJsonData(jsonResponse))
}


function createTableWithJsonData(response) 
{
    var heading = new Array()
    var tracklist = new Array()
    var tracks = new Array()
    var myTableDiv = document.getElementById("metric_results")
    var table = document.createElement('table')
    var tableBody = document.createElement('tbody')
    var tableHeader = document.createElement('thead')
    table.border = '0'
    table.class = 'test'
    table.classList.add('table')
    table.appendChild(tableBody);
    heading[0] = "Artist"
    heading[1] = "Album"
    heading[2] = "Track"
    heading[3] = "Date played"
    response.forEach(element => {
        if(!tracks.includes(element.name)) {
            var track = [element.artists, element.album, element.name, element.played_date]
            tracks.push(element.name)
            tracklist.push(track)
        }
    });
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '200';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    //TABLE ROWS
    for (i = 0; i < tracklist.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < tracklist[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(tracklist[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }  
    myTableDiv.appendChild(table)
}
