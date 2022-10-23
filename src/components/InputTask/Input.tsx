import React, {ChangeEvent} from "react";


type InputTypeProps={
    value: string
    setValue: (value: string) => void
}

export const Input = (props: InputTypeProps) => {

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        props.setValue(event.currentTarget.value)
    }


    return(
        <input
            value={props.value}
            onChange={onChangeInputHandler}
        />
    )
}