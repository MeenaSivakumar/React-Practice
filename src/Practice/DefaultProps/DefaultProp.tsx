
type props={
    isLoggedIn:boolean
}
export const DefaultProp = ({isLoggedIn}:props) =>{

    return(
     <h1>{isLoggedIn ? "Welcome ":"Please Log in"}</h1>
    );
}