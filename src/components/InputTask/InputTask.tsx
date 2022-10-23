import React, {ChangeEvent, useState} from "react";
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

    /* if btn and input different component */

    const [text, setText] = useState("")

    const onClickBtnHandler = () => {
        setMessage([{message: text},...message])
        setText("")

    }

    /* ************** End *****************************  */
    return(
        <div>
            <div>
                <Input
                    value={text}
                    setValue={setText}
                />
                <Btn name={'+'} callBack={() =>{onClickBtnHandler()}}/>
            </div>


            {/*<FullInput message={message} setMessage={setMessage}/>*/}

            <ul>
                {messageList}
            </ul>
        </div>
    )
}