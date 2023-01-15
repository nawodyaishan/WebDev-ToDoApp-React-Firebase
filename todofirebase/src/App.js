import React, {useEffect, useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import Todo from "./Todo";

import {db} from './firebase'
import {query, collection, onSnapshot} from 'firebase/firestore'

const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#00A6FF] to-[#90FCFF]`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-blue-600 text-slate-100`,
    count: `text-center p-2`
}

function App() {
    const [todos, setTodos] = useState([`Learn`, 'React', 'Wow'])

    // Create todos
    // Read todos
    useEffect(() => {
        const q = query(collection(db, `todos`))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr = [];
            querySnapshot.forEach((doc) => {
                todosArr.push({...doc.data(), id: doc.id})
            });
            setTodos(todosArr)
        });
        return () => unsubscribe();
    }, [])

    // Update todos
    // Delete todos

    return (<div className={style.bg}>
        <div className={style.container}>
            <h3 className={style.heading}>To Do App</h3>
            <form className={style.form}>
                <input className={style.input} type={"text"} placeholder={"Add To Do"}/>
                <button className={style.button}><AiOutlinePlus size={30}/></button>
            </form>
            <ul>
                {todos.map((todo, index) => (<Todo key={index} todo={todo}/>))}
            </ul>
            <p className={style.count}>You have 2 Todos</p>
        </div>
    </div>);
}

export default App;
