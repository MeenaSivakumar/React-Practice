import { userInfo } from "os";
import  {UserForm}  from "../module/FruitList/userForm/UserForm";
import { UserProps } from "../module/FruitList/userForm/User.types";

export const UserSummary = (userInfo:UserProps) => {
    return (
        <div>
            <h1>User Summary</h1>
            <p>{userInfo.name}</p>
            <p>{userInfo.email}</p>
            <p>{userInfo.age}</p>
            <p>{userInfo.city}</p>
            <p>{userInfo.address}</p>
        </div>
    )
}