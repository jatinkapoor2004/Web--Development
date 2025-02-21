//example 1 changing text
document.getElementById("changeTextButton").addEventListener("click",function(){
    let para=document.getElementById("myParagraph");
    para.textContent="The para is changed!";
});

//Example 2: Traversing the DOM i.e. highlighting first city.
document.getElementById("highlightFirstCity").addEventListener("click",function(){
    document.getElementById("citiesList").firstElementChild.classList.add("highlight");
});

//Example 3: Manipulating DOM Elements change order to espresso
document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeetype=document.getElementById("coffeeType");
    coffeetype.textContent="Espresso";
    coffeetype.style.backgroundColor="orange";
    coffeetype.style.padding="5px";
});

//Example 4: Creating and Inserting Elements
document.getElementById("addNewItem").addEventListener("click",function(){
    //first create item 
    let newItem=document.createElement("li");
    newItem.textContent="Eggs";
    document.getElementById("shoppingList").appendChild(newItem);
});

//Example 5: Removing DOM Elements
document.getElementById("removeLastTask").addEventListener("click",function(){
    document.getElementById("taskList").lastElementChild.remove();
});

//Example 6: Event Handling in the DOM
document.getElementById("clickMeButton").addEventListener("dblclick",function(){
    alert("you clicked it!")
});

//Example 7: Event Delegation i.e. select particular list item
document.getElementById("teaList").addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert(event.target.textContent);
    }
});

//Example 8: Form Handling 

document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();//it prevent the page refresh after submitting the form.
    let feedback=document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent=`The feedback is ${feedback}`;
});

//Example 9: DOM Content Loaded
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent="Dom content loaded...";
});

//Example 10: CSS Classes Manipulation
document.getElementById("toggleHighlight").addEventListener("click",function(){
    document.getElementById("descriptionText").classList.toggle1("highlight");
});