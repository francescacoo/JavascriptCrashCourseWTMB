module.exports=class Location{
    constructor(name, address, facilities, openingHours, mapAddress){
        this.name=name
        this.address=address
        this.facilities=facilities
        this.openingHours=openingHours     
        this.mapAddress=mapAddress
    }

  
    info() {
        return this.name + this.address +this.facilities+this.openingHours+this.mapAddress
    }

    getName(){
        return this.name;
    }





}

