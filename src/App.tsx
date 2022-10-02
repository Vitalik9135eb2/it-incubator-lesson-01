import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">

        <PageTitle title="First pages"/>

        <Rating value={2}/>
        <Accordion title="Menu Title"/>
        <Rating value={4}/>
        <Rating value={1}/>
    </div>
  );
}


type PageTitlePropsType ={
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
