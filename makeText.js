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

async function readURL(url){
    try {
        let resp = await axios.get(url);
        let mm = new MarkovMachine(resp.data);
        console.log(mm.makeText());
    } catch(err){
        console.log(err);
        process.kill(1)
    }
};


let method = process.argv[2];
let path = process.argv[3];

if (method==='file'){
    readText(path);
} else if(method==='url'){
    readURL(path);
}else{
    console.log('error!');
    process.kill(1);
}

