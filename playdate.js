module.exports=class PlayDate{
    constructor(date, place, attendees){
        this.date=date
        this.place=place
        this.attendees=attendees
    }


    info() {

        this.attendees.forEach(function(item,index,array) {
            console.log(item.getName())
        });

        console.log(' are meeting at: ', this.place, ' on: ', this.date)
    }


}

