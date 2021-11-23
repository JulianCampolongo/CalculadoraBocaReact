import React, {useState} from "react";
import words from 'lodash.words'
import Result from "./components/Result";
import Button from "./components/Button/Button";
import MathOperations from "./components/MathOperations";
import './App.css'
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import { number } from "prop-types";





const App = () => {
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)
   
    

    const clickHandlerFunction = (text) => {
        
    }
    
    const valuee = items.length > 0 ? items[items.length-1] :"BOCA"
    return (
        <div className="react-calculator">
        
           <Result value={valuee} /> 

           <Numbers
           onClickNumber = {(numero)=> 
           setStack(`${stack}${numero}`)}/>

        
        
        <Functions
        onContentClear={(clear) =>{ 
    setStack(" ")}}
        onDelete={(r)=>{
            if (stack.length > 0) {
             
            const newStack = stack.substring(0, stack.length - 1)
        setStack(newStack)}}}
        />
        <MathOperations 
        onClickOperation={(operatione) => 
    setStack( `${stack} ${operatione}`)}
        onClickEqual={equal =>{ 
            
            setStack(eval(stack).toString())
        }}
        />
        

        </div>
    )

}

export default App