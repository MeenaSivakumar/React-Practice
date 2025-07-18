import React, { useState } from "react";

export const NestedObject = ({}) => {
  const [formData, setFormData] = useState({
    user: {
      name: "",
      age: 0,
    },
    contact: {
      email: "",
      phone: "",
    },
  });
 const[isSubmitted,setIsSubmitted] = useState<boolean>(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      user: {
        ...formData.user,
        name: e.target.value,
      },
      ...formData.contact,
    });
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault(),
      setFormData({
        ...formData,
        user: { ...formData.user, age: e.target.valueAsNumber },
        ...formData.contact,
      });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault(),
      setFormData({
        ...formData,
        contact: { ...formData.contact, email: e.target.value },
        ...formData.user,
      });
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault(),
      setFormData({
        ...formData,
        contact: { ...formData.contact, phone: e.target.value },
        ...formData.user,
      });
  };
 
  const handleSubmit =()=>{
        setIsSubmitted(true);
  }
  return (
    <div>
      <form>
        <input
          placeholder="Enter name"
          type="text"
          value={formData?.user?.name}
          onChange={handleName}
        />
        <input
          placeholder="Enter age"
          type="number"
          value={formData?.user?.age}
          onChange={handleAge}
        />
        <input
          placeholder="Enter email"
          type="email"
          value={formData?.contact?.email}
          onChange={handleEmail}
        />
        <input
          placeholder="Enter phone"
          type="number"
          value={formData?.contact?.phone}
          onChange={handleChangePhone}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
      {isSubmitted &&
      <div>
        <p>{formData.user.name}</p>
        <p>{formData.user.age}</p>
        <p>{formData.contact.email}</p>
        <p>{formData.contact.phone}</p>
      </div>
      }
      
    </div>
  );
};
