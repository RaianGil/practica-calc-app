/* eslint no-eval: 0 */
import React, { useState } from 'react';
import words from 'lodash.words';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css';
import Numbers from './components/Numbers';

const App = () => {
    const [stack, setStack] = useState("");
    const items = words(stack, /[^-^+^*^/]+/g);
    const value = items.length > 0 ? items[items.length-1] : "0";
    const clickHandlerFunction = text => {
        setStack(`${stack}${text}`);
    };
    return  (
        <main className='react-calculator'>
            <Result value={value}/>
            
            <Numbers onClickNumber={clickHandlerFunction}/>

            <Functions 
                onContentClear={() => setStack('')}
                onDelete={() => {
                    if (stack.length > 0){
                        const newStack = stack.substring(0,stack.length - 1)
                        setStack(newStack);
                    }
                }} />

            <MathOperations 
                onClickOperation={operation => setStack(`${stack}${operation}`)}
                onClickEqual={() => setStack(eval(stack).toString())} />
        </main>
    )
};

export default App;