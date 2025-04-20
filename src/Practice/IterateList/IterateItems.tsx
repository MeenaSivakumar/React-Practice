export const IterateItems = ({}) =>{
   const itemsList = ["java","python","react","typeScript","Javascript"];
     return(
      <>
      {itemsList.map((item,index)=>(
        <p key={index}>{item}</p>
      ))}
      </>
    );
}