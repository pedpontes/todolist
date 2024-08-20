import { useEffect, useState } from "react";
import ListComponent from "./Components/ListComponent";
import FormAddComponent from "./Components/FormAddComponent";

export interface ToDoList {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

function App() {
    const [List, setList] = useState<ToDoList[]>();
    const [TogleForm, setTogleForm] = useState<boolean>(false);

    const getToDoList = async () => {
        try {
            const response = await fetch("api/list");
            const data = await response.json();
            setList(data);
        } catch (error) {
            throw new Error("Erro: " + error);
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
            <div>
                <input type="button" value={TogleForm ? "Esconder" : "Adicionar" } onClick={() => setTogleForm(!TogleForm)} />
                { TogleForm && <FormAddComponent/> }
            </div>
            { content }
        </div>
    );

}

export default App;