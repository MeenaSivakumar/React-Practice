import { useState } from "react";
import { UserProps } from "./User.types";
import { UserSummary } from "../../../Pages/UserSummary";

export const UserForm = () => {

    const [userInfo, setUserInfo] = useState<UserProps>({ name: '', email: '', age: 0, address: '', city: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setUserInfo(userInfo);
        setIsSubmitted(true);
      

    }

    return (
        <div>

            {!isSubmitted ? <><input type="text" placeholder="Enter your name" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} /><input type="email" placeholder="Enter your email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} /><input type="number" placeholder="Enter your age" value={userInfo.age} onChange={(e) => setUserInfo({ ...userInfo, age: e.target.valueAsNumber })} /><input type="text" placeholder="Enter your address" value={userInfo.address} onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })} /><input type="text" placeholder="Enter your city" value={userInfo.city} onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })} /><button onClick={handleSubmit}>Submit</button></> :
            <div>
              
            <UserSummary {...userInfo} />
            <button onClick={() => setIsSubmitted(false)}>Edit</button>
            </div>}

        </div>
    )
}