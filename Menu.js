import inquirer from "inquirer";
import {Grid} from "./Grid.js"

async function chooseGridSize(){
    const Question ={
        type : "list",
        name: "gridSize",
        message : "Choose the Size of the Map",
        choices:["5x10 easy","7x14 medium","10x20 hard"]
    }
   let ans = await inquirer.prompt([Question])
   let  [width,height] = ans.gridSize.split(" ")[0].split("x")
   return new Grid(+width,+height)

}
 function choosePlayerType(){

 }

