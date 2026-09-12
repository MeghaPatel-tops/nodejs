import { log } from 'console';
import readline from 'readline'

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


let todo = [];


function readList(){
    console.log("=============View Your task list here==============");
    for(let i=0;i<todo.length;i++){
        console.log(`${i+1}   ${todo[i]}`);
    }
    console.log("=================================================");
    todoapp();
}


function todoapp(){
    console.log(`
    =========================
       TASK MANAGEMENT
    =========================

    Press 1 for Create Task
    Press 2 for Read Task
    Press 3 for Delete Task
    Press 4 for Edit Task
    Press 5 for Exit
        `)
    r1.question("Enter your choice===>:",async(ch)=>{
        if(ch==1){
            console.log("=============Add your Task Here==============");
            r1.question("Enter your task",(taskname)=>{
                todo.push(taskname);
                todoapp();
            })
            //createTask();
          
            
        }
        else if(ch==2){
            readList();
             
        }
        else if(ch==3){
            console.log("Delete task ");
            
            r1.question("Enter id number witch you want to delete",(id)=>{
                  todo.splice(id-1,1);
                   todoapp();
            })
            
        }
        else if(ch==4){
            r1.question("Enter id wich you want to Edit",(id)=>{
                r1.question("Enter task name",(tname)=>{
                    todo.splice(id-1,1,tname);
                    todoapp();
                })
            })
             
        }
        else if(ch==5){
            r1.close();
            return;
        }
    })
}

todoapp();

