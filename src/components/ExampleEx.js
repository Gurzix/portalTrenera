import React from "react"
import { useParams } from "react-router-dom";


const ExampleEx =(props)=> {
    const {item} = useParams();
    const example = props.exampleExcersises[item];
    const {title, p} = example;
    return(

        
        <div>
<div>{title}
</div>
<p>{p}</p>
</div>

    )
};

export default ExampleEx;