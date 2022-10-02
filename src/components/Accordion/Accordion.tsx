import React from "react";

type AccordionPropsType ={
    title: string
}
function Accordion(props: AccordionPropsType) {
    return(
        <>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </>

    )
}

type AccordionTitlePropsType ={
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return(
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return(
        <ul>
            <li>First task</li>
            <li>Second task</li>
        </ul>
    )
}

export default Accordion