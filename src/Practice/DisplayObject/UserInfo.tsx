import { UserInfoProps } from "./UserInfo.types";

export const UserInfo = ({userInfo}:UserInfoProps) =>{

    return(
        <>
        <h3>name of the user: {userInfo.name}</h3>
        <h3>age of the user: {userInfo.age}</h3>
        <h3>email of the user: {userInfo.email}</h3>
        </>
    );
}