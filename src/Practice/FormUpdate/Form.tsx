import { ChangeEvent, useState } from "react"
import { FormProps } from "react-router-dom";
interface User {
    age: string;
    email: string;
    name: string;
}
const Form = ({ }) => {

    const [formData, setFormData] = useState<User>({
        age: '',
        name: '',
        email: '',
    })
    const [isSubmitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("form submitted", formData)
        setSubmitted(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleChange}
                />

                <button type='submit'>Submit</button>
            </form>
            {isSubmitted && <div>
                <p>user info</p>
                <p>user name:{formData.name}</p>
                <p>user email: {formData.email}</p>
                <p>user age: {formData.age}</p>
            </div>}

        </>
    )
}

export default Form;