import React from "react"

function Split(props){
    const combinedClassName = `split ${props.className}`;
    const newStlyes ={flex: props.flexBasics}
    return(
        <div className ={combinedClassName}
        style ={newStlyes}>
            {props.children} 

        </div>
        );

}

export default Split;