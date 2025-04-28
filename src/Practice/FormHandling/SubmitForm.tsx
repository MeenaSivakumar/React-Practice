import { SubmitFormProps } from "./Form.types";


export const SubmitForm = ({onSubmit}:SubmitFormProps)=>{
    return(
        <div>
            
            <button type="submit" onClick={onSubmit}>submit</button>
        </div>
    );
}