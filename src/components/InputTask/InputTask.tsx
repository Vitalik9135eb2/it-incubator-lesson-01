import React, {useState} from "react";
import {Input} from "./Input";
import {Btn} from "../BtnTask/Btn";
import {FullInput} from "./FullInput";

export type MessageType = {
    message: string
}

export  const InputTask = () => {

    const [message, setMessage] = useState<Array<MessageType>>([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"}
    ])

    const messageList = message.map(item => (
        <li key={Math.random()}>{item.message}</li>
    ))

    const addMessage = (message:string) => {
        console.log(message)
    }

    return(
        <div>
            {/*<Input/>*/}
            {/*<Btn name={'+'} callBack={() => addMessage("sdsd")}/>*/}

            <FullInput message={message} setMessage={setMessage}/>

            <ul>
                {messageList}
            </ul>
        </div>
    )
}