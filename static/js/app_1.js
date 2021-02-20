// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody"); // declare variable tbody, use d3.select to tell JavaScript to look for <tbody> tags in the HTML

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

function buildTable(data) {
    tbody.html(""); // Clear the data
    //Next, loop throgh each object in the data
    // and append a row and cells for each alue in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and
        // add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    //Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // Set a default filter and save it to a new variable
    let filteredData = tableData;

    //Check to see if a date was entered and filter the data using that date
    if (date) {
        // Apply 'filter' to the table data to only keep
        // the rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date)};

        // Rebuild the table using the filtered data
        // @Note: If not date was entered, then filteredData will
        // just be the original tableData.
        buildTable(filteredData);
}

// Attach an event to listen for the form button 
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);