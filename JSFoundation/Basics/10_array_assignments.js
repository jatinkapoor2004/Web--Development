//1st assignment  

let teaflavours=["green tea","black tea","oolong tea"];
let firsttea=teaflavours[0];
console.log(firsttea);

//2nd assignment
let cities=["london","tokyo","paris","new york"];
let third=cities[2];
console.log(third);

//third assignment
let arr1=["herbal","white","masala"]
console.log(arr1);
arr1[2]="jasmine";
console.log(arr1);

//fourth assignment
let citiesvisited=["mumbai","sydney"];
console.log(citiesvisited);
citiesvisited.push("berlin");
console.log(citiesvisited);

 //fifth assignment
let teaorders=["chai","iced tea","matcha","earl grey"];
console.log(teaorders);
let removed=teaorders.pop();
console.log(teaorders);
console.log(removed);

//sixth assignment
let popularTeas=["green tea","oolong tea","chai"];
let softcopy=popularTeas;
popularTeas.pop();
console.log(popularTeas);
console.log(softcopy);
//softcopy matlab dona ch reflect hon changes.

//seventh assignment
let topcities=["berlin","singapore","new york"];
let hardcopy=[... topcities];
//or second method is -->
// let hardcopy=topcities.slice();
topcities.pop();
console.log(topcities);
console.log(hardcopy);

//eighth assignment
let europiancities=["paris","rome"];
let asiancities=["tokyo","bangkok"];
let worldcities=europiancities.concat(asiancities);
console.log(worldcities);

//ninth assignment
let teamenu=["masala","oolong","green","earl grey"];
let menulength=teamenu.length;
console.log(menulength);

//tenth assignment
let citybucketlist=["kyoto","london","captown","vancouver"];
if(citybucketlist.includes("london")){
    let islondonlist="london";
    console.log(islondonlist);
    
}
else{
    console.log("no london in list");
    
}