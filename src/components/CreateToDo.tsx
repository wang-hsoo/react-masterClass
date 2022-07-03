import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";


interface Ifrom{
    toDo: string;
}




function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);


    const {
        register, handleSubmit, setValue
    } = useForm<Ifrom>();

    const onSubmit = ({toDo}: Ifrom) => {
        setToDos(oldToDos => [{text: toDo, id: Date.now(), category}, ...oldToDos])
        setValue("toDo", "");
    };


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register("toDo", {
                        required: true,
                    })} 
                    placeholder="write a to do"
                />
                <button>ADD</button>
        </form>
    )
}

export default CreateToDo;