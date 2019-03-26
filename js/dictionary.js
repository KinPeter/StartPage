/**
 *  DICTIONARY SEARCH functions
 */
//search for a word and call the display function passing the results
function wordLookup(word) {

    word = word.trim().toLowerCase();

    const preResults = {
        "exact" : [], 
        "startsWith" : [], 
        "partial" : []  
    };

    for (let i = 0; i < hun.length; i++) {

        //look for exact match        
        if ( word == hun[i].toLowerCase() ) {
            preResults.exact.push([hun[i], kor[i]]);
        } else if ( word == kor[i].toLowerCase() ) {
            preResults.exact.push([kor[i], hun[i]]);
        }
    
        //look for match starting with word
        else if ( hun[i].toLowerCase().startsWith(word) ) {
            preResults.startsWith.push([hun[i], kor[i]]);
        } else if ( kor[i].toLowerCase().startsWith(word) ) {
            preResults.startsWith.push([kor[i], hun[i]]);
        }  
    
        //look for match including word
        else if ( hun[i].toLowerCase().includes(word) ) {
            preResults.partial.push([hun[i], kor[i]]);
        } else if ( kor[i].toLowerCase().includes(word) ) {
            preResults.partial.push([kor[i], hun[i]]);
        }  
    }

    combineResults(preResults);
    // return preResults;
}

function combineResults(preResults) {
    // finalize results array
    const results = [];

    preResults.exact.forEach((pair) => {
        results.push(pair);
    });
    preResults.startsWith.forEach((pair) => {
        results.push(pair);
    });
    preResults.partial.forEach((pair) => {
        results.push(pair);
    });

    dictResults(results);
    // return results;
}


//display the results
function dictResults(results) {
    //clear results table
    $('#results-table').html('');
    //clear input field
    $('#korean-search').val('');
    //fill up the list
    results.forEach((pair) => {
        $('#results-table').append(`
        <tr>
            <th scope="row">${pair[0]} = ${pair[1]}</th>
        </tr>
        `);
    });
    //show the results modal
    // $('#modal').modal('show');
}
