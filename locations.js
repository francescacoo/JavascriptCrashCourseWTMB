module.exports=class Location{
    constructor(name, address, facilities, openingHours, mapAddress){
        this.name=name
        this.address=address
        this.facilities=facilities
        this.openingHours=openingHours     
        this.mapAddress=mapAddress
    }
    static create({name,address,facilities,openingHours, mapAddress}){
        const location = new Location(name,address,openingHours, mapAddress)
        location.facilities=facilities.map(Location.create)
        return location
    }
  
    info() {
        return this.name + this.address +this.facilities+this.openingHours+this.mapAddress
    }

    getName(){
        return this.name;
    }





}

