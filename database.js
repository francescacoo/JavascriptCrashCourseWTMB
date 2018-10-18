const fs= require('fs');

exports.save=(playdate)=> {
    if (fs.existsSync('./data.json')) {
        fs.appendFileSync('./data.json',JSON.stringify(playdate), function (err) {
            if (err) throw err;
       //     console.log('updated!');
          });
    }
    else{
        fs.writeFileSync('./data.json',JSON.stringify(playdate), function (err) {
            if (err) throw err;
      //        console.log('Saved!');
          });
    }
}

exports.load = () => {
    return fs.readFileSync('./data.json','utf8')
}


