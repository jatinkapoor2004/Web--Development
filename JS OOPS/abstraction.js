class coffeemachine{
    start(){
        return "starting......";
    }
    brewcoffee(){
        return `brewing......`;
    }
}
let mymachine=new coffeemachine();
console.log(mymachine.start());
console.log(mymachine.brewcoffee());