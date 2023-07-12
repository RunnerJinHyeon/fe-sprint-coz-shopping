import React from "react";
import styled from "styled-components";
import "../App.css";


export const Itemlistalign = styled.div`
div{
justify-content: center;
text-align: center;
display: flex;
height: 500px;
}
`


function Main () {
    return (
        <>
        <Itemlistalign>
        <div>
            <span>아직이다</span>
        </div>
        </Itemlistalign>
        </>
    )
}

export default Main;