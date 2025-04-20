
type props={
    message:string;
   }
export  const  DisplayString = ({message}:props) =>{

    return(
    <h1>{message}</h1>
    );
}

export default DisplayString;