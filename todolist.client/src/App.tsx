import { useEffect, useState } from "react";
import ListComponent from "./Components/ListComponent";


export const DellItem = async (id: Number) : Promise<void> => {
    if (id == null) return;

    try {
        await fetch(`dellitem?id=${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        throw new Error("Erro: " + error);
    }
}

export interface ToDoList {
    id: Number;
    title: string;
    desciption: string;
    status: boolean;
}


function App() {
    const [List, setList] = useState<ToDoList[]>();

    useEffect(() => {
        getToDoList();
    }, []);

    const content = List == undefined
        ? <div>Nenhuma lista encontrada.</div>
        : <ListComponent params = { List }/>;

    return (
        <div>
            { content }
        </div>
    );

    const getToDoList = async () => {
        try {
            const response = await fetch("todolist");
            const data = await response.json();
            setList(data);
        } catch (error) {
            throw new Error("Erro: " + error);
        }
    }

}

export default App;