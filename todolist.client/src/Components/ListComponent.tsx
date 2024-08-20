import { ToDoList } from "../App.tsx"

const DellItem = async (id: number) => {
    if (id == null) return;

    console.log(id);

    try {
        await fetch(`api/list/${id}`, {
            method: "DELETE"
        });
        return document.location.reload();
    } catch (error) {
        throw new Error("Erro: " + error);
    }
}

function ListComponent( { List } : { List: ToDoList[] }) {
  return (
      <div>
          <table>
              <thead>
                  <tr>
                      <th>Titulo</th>
                      <th>Descrição</th>
                      <th>Excluir</th>
                  </tr>
              </thead>
              <tbody>
                  {List.map((item) => {
                      return <tr key={`${item.id}`}>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td><input type="button" onClick={() => DellItem(item.id)} value="X" /></td>
                      </tr>
                  }
                  )}
              </tbody>
          </table>
      </div>
  );
}

export default ListComponent;