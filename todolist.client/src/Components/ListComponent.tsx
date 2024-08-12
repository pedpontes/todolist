import { ToDoList, DellItem } from "../App.tsx"

function ListComponent({ List }: { List: ToDoList[] }) {
  return (
      <div>
          <table>
              <thead>
                  <tr>
                      <th>Titulo</th>
                      <th>Descrição</th>
                  </tr>
              </thead>
              <tbody>
                  {List.map((item) => {
                      return <tr key={`${item.id}`}>
                          <td>{item.title}</td>
                          <td>{item.desciption}</td>
                          <td><input type="button" onClick={() => DellItem(item.id)} value="X"></input></td>
                      </tr>
                  }
                  )};
              </tbody>
          </table>
      </div>
  );
}

export default ListComponent;