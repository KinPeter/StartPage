/**
 *  DICTIONARY SEARCH functions
 */
//search for a word and call the display function passing the results
function wordLookup(word) {
    var exact = [];
    var partial = [];
    var i = 0;
    //look for exact match
    while (i < hun.length) {
        if ( word.toLowerCase() == hun[i].toLowerCase() ) {
            exact.push([hun[i], kor[i]]);
        } else if ( word.toLowerCase() == kor[i].toLowerCase() ) {
            exact.push([kor[i], hun[i]]);
        }
        i++;
    }
    //look for partial match
    i = 0;
    while (i < hun.length) {
        if ( hun[i].toLowerCase().includes(word.toLowerCase()) && !exact.some(row => row.includes(hun[i])) ) {
            partial.push([hun[i], kor[i]]);
        } else if ( kor[i].includes(word.toLowerCase()) && !exact.some(row => row.includes(kor[i])) ) {
            partial.push([kor[i], hun[i]]);
        }
        i++;               
    }
    dictResults(exact, partial);
}

//display the results
function dictResults(exact, partial) {
    //clear results table
    $('#results-table').html('');
    //clear input field
    $('#korean-search').val('');
    //fill up the list
    exact.forEach((pair) => {
        $('#results-table').append(`
        <tr>
            <th scope="row">${pair[0]} = ${pair[1]}</th>
        </tr>
        `);
    });
    partial.forEach((pair) => {
        $('#results-table').append(`
        <tr>
            <th scope="row">${pair[0]} = ${pair[1]}</th>
        </tr>
        `);
    });
    //show the results modal
    $('#modal').modal('show');
}
