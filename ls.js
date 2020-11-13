const fs = require('fs');

const ls = (cmd) => {
    fs.readdir('./','utf8',(err,files)=>{
    if(err){
        throw err;
    }else{
        process.stdout.write(files.join(`\n`));
        process.stdout.write('\n');
        process.stdout.write('prompt > ');
    }
});
};

module.exports = ls;