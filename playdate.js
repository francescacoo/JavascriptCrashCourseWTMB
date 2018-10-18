module.exports=class PlayDate{
    constructor(date, place, attendees){
        this.date=date
        this.place=place
        this.attendees=attendees
    }


    // haven't found yet how to print only the name of the dog attending and not the whole object. If I use this.attendees.name it doesn't work... Will keep researching!
    info() {

        this.attendees.forEach(function(item,index,array) {
            console.log(item.getName())
        });

        console.log(' are meeting at: ', this.place, ' on: ', this.date)
    }


}

