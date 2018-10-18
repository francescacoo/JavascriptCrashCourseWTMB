const fs= require('fs');

exports.save=(playdate)=> {

    fs.writeFileSync('./data.json',JSON.stringify(playdate))
}

exports.load = () => {
    return fs.readFileSync('./data.json','utf8')
}


