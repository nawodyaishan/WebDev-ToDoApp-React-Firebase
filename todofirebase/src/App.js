import React from 'react';

const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#F7451F] to-[#F9C0B3]`, container: ``
}

function App() {
    return (<div className={style.bg}>
        <div className={style.container}>
            <h3 className={style.heading}>To Do App</h3>
            <form className={style.form}>
                <input className={style.input} type={"text"} placeholder={"Add To Do"}/>
                <button className={style.button}></button>
            </form>
        </div>
    </div>);
}

export default App;
