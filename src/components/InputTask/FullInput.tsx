import React, {ChangeEvent, useState} from "react";
import {MessageType} from "./InputTask";

type FullInputPropsType = {
    message: Array<MessageType>
    setMessage: (messae: Array<MessageType>) => void
}


export const FullInput = (props:FullInputPropsType) => {

    const [text, setText] = useState("")


    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{

        console.log(event.currentTarget.value)
        setText(event.currentTarget.value)
    }

    const onClickBtnHandler = () => {
       props.setMessage([{message: text},...props.message])
        setText("")

    }

    return(
        <div>
            <input value={text} onChange={onChangeInputHandler}/>
            <button onClick={() => {onClickBtnHandler()}}>+</button>
        </div>
    )
}