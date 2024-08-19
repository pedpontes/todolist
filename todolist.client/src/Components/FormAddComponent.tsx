import { useState } from "react";

function FormAddComponent() {
    const [Title, setTitle] = useState<string>("");
    const [Description, setDescription] = useState<string>("");

    const HandleSubmitAppendList = async () => {
        console.log(Title, Description);
        if (Title == "" || Description == "") return;

        try {
            const response = await fetch("api/list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Title, Description })
            });
            const status = await response.status;

            setTitle("");
            setDescription("");

            if (status != 200) return alert("Erro ao adicionar item na lista.");

            return alert("Item adicionado na lista.")

        } catch (error) {
            throw new Error("Erro: " + error)
        }
    }

  return (
      <div id="formAdd">
          <label>Titulo
              <input type="text" value={ Title } onChange={(e) => setTitle(e.target.value)}/>
          </label>
          <label>Descrição
              <input type="text" value={ Description } onChange={(e) => setDescription(e.target.value)}/>
          </label>
          <input type="button" value="Enviar" onClick={HandleSubmitAppendList}/>
      </div>
  );
}

export default FormAddComponent;