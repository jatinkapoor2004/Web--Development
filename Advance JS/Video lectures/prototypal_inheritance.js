function person(name){
        this.name="jatin"
}
person.prototype.greet=function(){

    console.log(`hello from ${this.name}`)
};
let jatin=new person("Jatin Kapoor");
jatin.greet();