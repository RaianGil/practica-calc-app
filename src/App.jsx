/* eslint no-eval: 0 */
// importacion
import React, { useState } from 'react';
import words from 'lodash.words';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css';
import Numbers from './components/Numbers';

// generacion del componente
const App = () => {
    // Array Destructuring
    const [stack, setStack] = useState("");
    const items = words(stack, /[^-^+^*^/]+/g);
    // const arrayTextoFuncionModificaText = useState("");

    // 1er posicion: valor (que inicialmente es el valor por defecto)
    //const texto = arrayTextoFuncionModificaText[0];

    // 2da posicion: funcion que me permite modificar el valor por defecto
    // const funcionModificaTexto = arrayTextoFuncionModificaText[1];

    // Lo que ejecuta la funcion
    const value = items.length > 0 ? items[items.length-1] : "0";
    console.log('Renderizacion de App', value);
    const clickHandlerFunction = text => {
        console.log("Button.clickHandler", text);
        //Template Literals
        setStack(`${stack}${text}`);
    };
    return  (
        <main className='react-calculator'>
            <Result value={value}/>
            <Numbers onClickNumber={clickHandlerFunction}/>
            <Functions 
                onContentClear={() => {
                    console.log("Content Clear");
                    setStack('');
                }}
                onDelete={() => {
                    if (stack.length > 0){
                        const newStack = stack.substring(0,stack.length - 1)
                        console.log("onDelete")
                        setStack(newStack);
                    }
                }} />
            <MathOperations 
                onClickOperation={operation => {
                    console.log("Operation:", operation)
                    setStack(`${stack}${operation}`);
                }}
                onClickEqual={equal => {
                    console.log("Equeal:", equal)
                    setStack(eval(stack).toString());
                }} />
        </main>
    )
};

export default App;
// exportacion