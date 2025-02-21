const person={
    name:"jatin",
    greet(){
        console.log(`hello from ${this.name}`);
    }
}
person.greet();
const myfun=person.greet;
myfun();
const myfunbind=person.greet.bind({name:"kapoor"});
myfunbind();
