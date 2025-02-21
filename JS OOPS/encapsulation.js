class bankaccount{
    #balance=0;//# make it private so cant be accessed directly in object.
    deposite(amount){
        this.#balance+=amount;
    }
    getbalance(){
        return `$ ${this.#balance}`;
    }
}
let account=new bankaccount();
account.deposite(500);
console.log(account.balance);

