import React, {ChangeEvent, useState} from "react";
import {MessageType} from "./InputTask";

type FullInputPropsType = {
    message: Array<MessageType>
    setMessage: any
}


export const FullInput = (props:FullInputPropsType) => {

    const [text, setText] = useState("")


    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{

        console.log(event.currentTarget.value)
        setText(event.currentTarget.value)
    }

    const onClickBtnHandler = () => {
       props.setMessage([...props.message, {message: text}])

    }

    return(
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={() => {onClickBtnHandler()}}>+</button>
        </div>
    )
}