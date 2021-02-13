
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);


//Async - Await pattern

async function csv2json (filename) {

    try{
    const file = await readFile(filename, 'utf8');
    
    const records = [];
    const lines = file.split('\n');
    let headers = [];

    lines.forEach((line, index) => {
        if ( index === 0){
            headers = line.split(',');
            return;
        }

        const record = {};
        const values = line.split(',');
        headers.forEach((header, i) => {
            record[header] =  values[i];
        } );
        records.push(record);
    } ); 

    return records;

    } catch(e){
        console.log(e);  
    }
}

module.exports = csv2json;

//Promise pattern

// readFile(filename, 'utf8').then(function (file) {
//     console.log(file);
// }).catch(function (error) {
//     console.log(error);
// });

//Callback pattern

//  fs.readFile(filename, 'utf8', function(err, file) {
//     if(err){
//         console.error(err);
//         process.exit(1);
//     }

//     console.log(file);
//  });

