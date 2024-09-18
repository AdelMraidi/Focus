import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function TaskTable() {
  const [task, setTask] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/task/all")
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Is Finished</th>
        </tr>
      </thead>
      <tbody>
        {task.map((t) => (
          <tr key={t._id}>
            <td>{t.name}</td>
            <td>{t.description}</td>
            <td>{t.priority}</td>
            <td>{t.isFinished.toString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TaskTable;
