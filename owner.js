module.exports=class Owner{
    constructor(name, district, pets, preferred_days){
        this.name=name
        this.district=district
        this.pets=pets
        this.preferred_days=preferred_days     
    }

  
    info() {
        console.log(this.name, ' is located in', this.district, ' and owns', this.pets)
    }

    preferred_day(){
        console.log(this.name, 'available on: ')
        this.preferred_days.forEach(function(item,index,array) {
            console.log(item)
        });
    }


}

