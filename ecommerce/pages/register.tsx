import axios from "axios";
import { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import { IUser } from '../Interfaces/user'

export default function Register() {

    const [user, setUser] = useState<IUser>();

    const handleChange = (event: React.FormEvent<any>) => {
        const { name, value } = event.target as HTMLButtonElement;
        setUser({
            ...user,
            [name]: value,
        });
    }
    const handleSubmit = async () => {
        console.log(user)
        const resp: any = await axios
            .post(`http://localhost:3001/user`, user)
            .catch(err => console.log(err));
        alert(resp.data)
    };
    return (
        <div>
            <label>Nombre</label><br />
            <input name="firstName"
                onChange={handleChange}></input><br />
            <label>Apellido</label><br />
            <input name="lastName"
                onChange={handleChange}></input><br />
            <label>Email</label><br />
            <input name="email"
                onChange={handleChange}></input><br />
            <label>Password</label><br />
            <input name="password"
                onChange={handleChange}></input><br />
            <button onClick={handleSubmit}>Registrarse</button>
        </div>
    )
}


