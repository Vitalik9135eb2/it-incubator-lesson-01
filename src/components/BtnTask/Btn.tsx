import React from "react";

type BtnType ={
    name: string
    callBack: () => void
}

export const Btn= (props:BtnType) => {

    const onClickHandler = () =>{
        props.callBack()
    }

    return(
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}