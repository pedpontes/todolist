import { useEffect, useState } from "react";
import ListComponent from "./Components/ListComponent";

 
export const DellItem = async (id: number) : Promise<void> => {
    if (id == null) return;

    try {
        await fetch(`api/dellitem?id=${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        throw new Error("Erro: " + error);
    }
}

export interface ToDoList {
    id: number;
    title: string;
    desciption: string;
    status: boolean;
}
function App() {
    const [List, setList] = useState<ToDoList[]>();
    const [Title, setTitle] = useState<string>("");
    const [Description, setDescription] = useState<string>("");

    const HandleSubmitAppendList =async () => {
        if (Title == "" || Description == "") return;

        try {
            const response = await fetch("api/appendlist", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({ Title, Description })
            });
            const status = await response.status;

            if (status != 200) return alert("Erro ao adiconar item na lista.");

            return alert("Item adicionado na lista.")

        } catch (error) {
            throw new Error("Erro: " + error)
        }
    }


    useEffect(() => {
        getToDoList();
    }, []);

    const content = List == undefined
        ? <div>Nenhuma lista encontrada.</div>
        : <ListComponent List={ List } />;

    return (
        <div>
            <div id="formAdd">
                <label>Titulo
                    <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
                </label>
                <label>Descrição
                    <input type="text" onChange={(e) => setDescription(e.target.value)}></input>
                </label>
                <input type="button" onClick={HandleSubmitAppendList}>Adicionar</input>
            </div>
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