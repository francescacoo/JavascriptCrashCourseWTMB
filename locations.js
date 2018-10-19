module.exports=class Location{
    constructor(name, address, facilities, opening_hours, map_address){
        this.name=name
        this.address=address
        this.facilities=facilities
        this.opening_hours=opening_hours     
        this.map_address=map_address
    }

  
    info() {
        return this.name + this.address +this.facilities+this.opening_hours+this.map_address
    }

    getName(){
        return this.name;
    }





}

