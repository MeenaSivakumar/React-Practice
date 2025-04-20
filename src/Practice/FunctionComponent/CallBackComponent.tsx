type props={
    fun: ()=>void;
}
export const CallBackComponent =({fun}:props) =>{

    return(
        <button onClick={fun} >click</button>
    );
}