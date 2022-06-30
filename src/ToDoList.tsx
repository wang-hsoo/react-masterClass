import React, { useState } from "react";
import {useForm} from "react-hook-form";

// function ToDoList(){
//     const [toDo, setToDo] = useState("");
//     const [toDoError, setToDoError] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: {value},
//         } = event;
//         setToDoError("");
//         setToDo(value);
//     };

//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if(toDo.length < 10){
//             return setToDoError("To do shoild be longer");
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input placeholder="write a to do"  value={toDo} onChange ={onChange}/>
//                 <button>ADD</button>
//                 {toDoError !== "" ? toDoError : null}
//             </form>
//         </div>
//     );
// }

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
    extraError?:string;
  }

function ToDoList(){
    const {
        register, 
        handleSubmit, 
        formState:{errors},
        setError
    } = useForm<IForm>({
        defaultValues:{
            email: "@naver.com",
        }
    });
    const onValid = (data:IForm) => {
        if(data.password !== data.password1){
            setError("password1", {message: "Password are not the same"},{ shouldFocus: true});
        }
        setError("extraError", {message: "Server offline."});

    };

    return(
        <div>
            <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit(onValid)}
            >
            <input {...register("email", { 
                required: "Email is required", 
                pattern: {
                    value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
                    message: "Only naver.com emails allowed"
                },  
            })} 
            placeholder="Email" />

            <>{errors?.email?.message}</>

            <input
            {...register("firstName", {
                required: "write here",
                validate: {
                    noNilcos: (value) => value.includes("nico") ? "no nicos allowed" : true
                }
            })}
                placeholder="First Name"
            />
            <>{errors?.firstName?.message}</>
            <input
                {...register("lastName", { required: "write here" })}
                placeholder="Last Name"
            />
            <>{errors?.lastName?.message}</>
            <input
                {...register("username", { required: "write here", minLength: 10 })}
                placeholder="Username"
            />
            <>{errors?.username?.message}</>
            <input
                {...register("password", { required: "write here", minLength: 5 })}
                placeholder="Password"
            />
            <>{errors?.password?.message}</>
            <input
                {...register("password1", {
                required: "Password is required",
                minLength: {
                    value: 5,
                    message: "Your password is too short.",
                },
                })}
                placeholder="Password1"
            />
            <>{errors?.password1?.message}</>
            <button>Add</button>
            <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
}

export default ToDoList;