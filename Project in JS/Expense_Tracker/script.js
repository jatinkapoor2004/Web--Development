document.addEventListener("DOMContentLoaded",()=>{
    const expenseForm=document.getElementById("expense-form");
    const expenseNameInput=document.getElementById("expense-name");
    const expenseAmountInput=document.getElementById("expense-amount");
    const ExpenseList=document.getElementById("expense-list");
    const totalAmountDisplay=document.getElementById("total-amount");

    let expenses= JSON.parse(localStorage.getItem("expense")) || [];
    let totalAmount=calculateTotal();
    renderItems();
    expenseForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const name=expenseNameInput.value.trim();
        const amount=parseInt(expenseAmountInput.value.trim());
        
        if(name!="" && !isNaN(amount) && amount>0){
            const newExpense={
                id :Date.now(),
                name:name,
                amount:amount
            }
            expenses.push(newExpense);
            saveExpensestoLocal();
            renderItems();
            updateTotal();

            //clear input 
            expenseNameInput.value="";
            expenseAmountInput.value="";
            
        }
    })
    ExpenseList.addEventListener("click",(e)=>{
        if(e.target.tagName=='BUTTON'){
            const expenseId=parseInt(e.target.getAttribute("data-id"));
            expenses=expenses.filter((expense)=>expense.id!=expenseId);
            saveExpensestoLocal();
            renderItems();
            updateTotal();
        }
    })
    function renderItems(){
        ExpenseList.innerHTML=""
        expenses.forEach(expense => {
            const li=document.createElement("li");
            li.innerHTML=`
            ${expense.name} - $${expense.amount}
            <button data-id="${expense.id}">Delete</button>
            `
            ExpenseList.appendChild(li); 
        });
    }
    function saveExpensestoLocal(){
        localStorage.setItem("expense",JSON.stringify(expenses));
    }
    function calculateTotal(){
        return expenses.reduce((sum,expense)=> sum+expense.amount,0);
    }
    function updateTotal(){
        totalAmount=calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }
})