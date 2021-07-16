import { useEffect, useState } from "react";
import { IColors, IErrorUser } from "../Interfaces/user";

import isStrongPassword from "validator/lib/isStrongPassword";
import isEmail from "validator/lib/isEmail";
import axios from "axios";


export default function Login() {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [invalid, setInvalid] = useState<boolean>();
    const [emailInitialState, setEmailInitialState] = useState<boolean>(true)
    const [passInitialState, setPassInitialState] = useState<boolean>(true)

    const [errors, setErrors] = useState<IErrorUser>({
        email: false,
        pass: false,
    });

    const [colors, setColors] = useState<IColors>({});



    const handleChange = (event: any) => {

        setInvalid(false);
        if (event.target) {
            let tName = event.target.name;
            let tValue = event.target.value;
            console.log(errors)
            // console.log(tName,tValue)
            if (tName === "pass") {
                setPassword(tValue);
                setErrors({
                    ...errors,
                    pass: !isStrongPassword(tValue, {
                        returnScore: false,
                        minLength: 8,
                        minLowercase: 0,
                        minUppercase: 0,
                        minNumbers: 0,
                        minSymbols: 0,
                        pointsPerUnique: 1,
                        pointsPerRepeat: 0.5,
                        pointsForContainingLower: 10,
                        pointsForContainingUpper: 10,
                        pointsForContainingNumber: 10,
                        pointsForContainingSymbol: 10,
                    }),
                });
            }

            if (tName === "email") {
                setEmail(tValue);
                setErrors({
                    ...errors,
                    email: !isEmail(tValue),
                });
            }
        }
    };


    const handleSubmit = async () => {
        console.log(email, password)
        const resp:any = await axios
            .post(`http://localhost:3001/user/login`, {
                email: email,
                pass: password,
            })
            .catch(err => console.log(err));
        alert(resp.data)
    };


    useEffect(() => {
        if (email) {
            setEmailInitialState(false)
            if (errors?.email === true) {
                console.log("entro", colors);
                setColors({
                    ...colors,
                    email: "secondary",
                });
            } else {
                setColors({
                    ...colors,
                    email: "primary",
                });
            }
        }
    }, [email]);//eslint-disable-line

    useEffect(() => {
        if (password) {
            setPassInitialState(false)
            if (errors?.pass === true) {
                setColors({
                    ...colors,
                    pass: "secondary",
                });
            } else {
                setColors({
                    ...colors,
                    pass: "primary",
                });
            }
        }
    }, [password]);//eslint-disable-line

    return (
        <div>
            <h1>Hola</h1>
            <label >Email</label><br />
            <input type="text" name="email" onChange={handleChange}></input><br />
            <label>Password</label><br />
            <input name="pass" onChange={handleChange} type="password"
                placeholder="Enter Password"></input><br />
            {errors?.pass ? (
                <label className="mt-1 d-flex justify-content-center">Password is too short (Make sure its at least 8 characters)</label>
            ) : null}
            {errors?.email === true || errors?.pass === true || invalid === true || emailInitialState === true || passInitialState === true ? (
                <button className="mt-3" disabled>
                    Log In
                </button>
            ) : (
                <button className="mt-3" onClick={handleSubmit}>
                    Log In
                </button>
            )}
        </div>
    )
}