let sum=0;
let i=0;
while (i<=5) {
    sum+=i;
    i++;
}
console.log(sum);

//input using prompt will work in browser only.

let sum2=0;
do {
    sum2++;
} while (sum2<3);
console.log(sum2);

//---------------------------------------
let nums=[2,4,6];
let mutliples=[];
for(let i=0;i<nums.length;i++){
    mutliples[i]=2*nums[i];
}
console.log(mutliples);

let numbers=[1,2,3,4,5];
let smallnumber=[];
for (const nums of numbers){
    if(nums==4)
        break;
    smallnumber.push(nums);
}
console.log(smallnumber);

let citiespopulation={
    "london":100,
    "new york":101,
    "paris":102,
    "berlin":99
};
let citiespopulations={};
for (const city in citiespopulation) {
    // key = value
     citiespopulations[city] = citiespopulation[city];
    //console.log(city);
    }
console.log(citiespopulations);
    
let allteas=["earl grey","green tea","chai","oolong tea"];
let availabletea=[];
allteas.forEach(tea => {
    if(tea=="chai"){
        return;
    }
    availabletea.push(tea);
});
console.log(availabletea);

