const fs = require('fs');
const filepath="./tasks.json";

const command=process.argv[2];
const argument=process.argv[3];

const loadTasks=()=>{
    try {
        const dataBuffer=fs.readFileSync(filepath);
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}
const saveTasks=(tasks)=>{
    const dataJSON=JSON.stringify(tasks);
    fs.writeFileSync(filepath,dataJSON);
}

const addTask=(task)=>{
    const tasks=loadTasks();
    tasks.push({task});// we pass object bcoz in future we can also add more properties to it like status pending or price etc.
    saveTasks(tasks);
    console.log("Task added Successfully");
}

const listTasks=()=>{
    const tasks=loadTasks();
    tasks.forEach((task,index)=> console.log(`${index+1} - ${task.task}`))
}
const removeTask=(tasknumber)=>{
    const tasks=loadTasks();
    if (tasknumber < 1 || tasknumber > tasks.length) {
        console.log("Invalid task number!");
        return;
    }
    tasks.splice(tasknumber-1,1);//delete 1 element form given index
    saveTasks(tasks);
    console.log("Task removed successfully");
    
}
if(command==="add"){
    addTask(argument);
}
else if(command=="list"){
    listTasks();
}
else if(command=="remove"){
    removeTask(parseInt(argument)) // parse bcoz we will provide id or s.no. of task but not its name
}
else{
    console.log("Invalid Command !");
}
