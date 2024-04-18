#! /usr/bin/env node

import inquirer  from "inquirer";
import chalk from "chalk";
let todoList  : string [] = [];
let conditions = true;

console.log(chalk.magenta.bold("\n \t Welcome to tooba_rafiq - Todo-list Application\n"));

// while(conditions){
//     let addTask = await inquirer.prompt([
//         {
//             name : "task",
//             type : "input",
//             message :chalk.green("Enter your new Task :")
//         }
//     ]);
//     todoList.push(addTask.task);
//     console.log(chalk.yellow(`${addTask.task} task added in todo list successfully! `));

//     let addmoreTask = await inquirer.prompt([
//         {
//              name : "addmore",
//              type :"confirm",
//              message :(chalk.blue("Do you want to add more task ?")),
//             default :"false"
//         }
//     ]);
//     conditions = addmoreTask.addmore;
// }
// console.log("Your updated Todo-list:" , todoList);

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type:"list",
                message:chalk.green("Select an option you want to do:"),
                choices:["Add Task" ,"Delete Task","Update Task","View Todo - List","Exit"]
            }
        ]);
        if(option.choice === "Add Task"){
            await  addTask();
        }
        else if(option.choice === "Delete Task"){
            await deleteTask();
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if(option.choice === "View Todo - List"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false
        }
    }
}
    //Function to add new task 
    let addTask = async () => {
        let newTask = await inquirer.prompt([
            {
                name:"task",
                type:"input",
                message:chalk.blue("Enter your new task:")
                    
            }
        ]);
        todoList.push(newTask.task);
        console.log(chalk.yellow(`\n ${newTask.task} task addad successfully in Todo-list`));

    }
    //Function to view todo-list 
    let viewTask = () => {
        console.log(chalk.blue("\n your todo List:\n"))
        todoList.forEach((task,index) => {
        console.log(`${index + 1}:${task}`)

    })

    }
    //Function to delete a task form a list
    let deleteTask = async () => {
        await viewTask ()
        let taskIndex = await inquirer.prompt([
            {
                name: "index",
                type: "number",
                message:chalk.green("Enter the 'index no.' of the task you want to delete:")
            }
        ]);
        let deleteTask = todoList.splice(taskIndex.index - 1, 1);
        console.log(`\n ${deleteTask} this task has been deleted successfully form your todo -list\n`)
    }
    //function to update task
    let updateTask = async () => {
        await viewTask ()
        let update_task_index = await inquirer.prompt([
            {
                name :"index",
                type :"number",
                message :chalk.green("Enter the 'index no.' of the task you want to update :")
            },
            {
                name :"new_task",
                type:"input",
                message:chalk.blue("Now enter new task name :"),
            }
        ]);
        todoList[update_task_index.index - 1] = update_task_index.new_task
        console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [For updated list check option : "View Todo-list"] `);

    }

main();
