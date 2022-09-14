/** Command-line tool to generate Markov text. */
const fs = require('fs');
const process = require('process');
const axios = require('axios');
const markov = require('./markov')


/** read file and generate text from it */

function readText(path){
    fs.readFile(path,'utf8',(err,data)=>{
        if(err){
            console.log("Error!",err);
            process.kill(1)
        } else{ 
            let mm = new MarkovMachine(data);
            console.log(mm.makeText());
        }
    })
}


/** read URL and make text from it. */
