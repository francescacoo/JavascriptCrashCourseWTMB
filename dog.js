module.exports=class Dog{
    constructor(name, age, breed, likes, dislikes){
        this.name=name
        this.age=age
        this.breed=breed
        this.likes=likes     
        this.dislikes=dislikes
    }

    static create({name,age,breed,likes, dislikes}){
        const dog = new Dog(name,age,breed)
        dog.likes=likes.map(Dog.create)
        dog.dislikes=dislikes.map(Dog.create)
        return dog
    }

    attend(playdate){
        playdate.attendees.push(this)
    }
    info() {
        console.log(this.name, ' is old', this.age, ' breed is', this.breed)
    }

    getName(){
        return this.name;
    }

    ShowKikes(){
        console.log(this.name, 'likes: ')
        this.likes.forEach(function(item,index,array) {
            console.log(item)
        });
    }

    ShowDislikes(){
        console.log(this.name, 'dislikes: ')
        this.dislikes.forEach(function(item,index,array) {
            console.log(item)
        });
    }

}

