module.exports=class Owner{
    constructor(name, district, pets, preferredDays){
        this.name=name
        this.district=district
        this.pets=pets
        this.preferreDays=preferredDays     
    }

    static create({name,district,pets,preferredDays}){
        const owner = new Owner(name,district)
        owner.pets=pets.map(Owner.create)
        owner.preferreDays=preferredDays.map(Owner.create)
        return owner
        
    }

  
    info() {
        console.log(this.name, ' is located in', this.district, ' and owns', this.pets)
    }

    preferred_day(){
        console.log(this.name, 'available on: ')
        this.preferredDays.forEach(function(item,index,array) {
            console.log(item)
        });
    }


}

