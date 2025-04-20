import { useState } from "react";

type props={
    value:string;
}
export const Container = ({value}:props) =>{
    return(

        <>
        <div>
            <text>{value}</text>
        </div>
        </>
    );
}