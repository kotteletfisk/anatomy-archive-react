import { useState } from "react";
import CreateEntities from "../components/CreateEntities";

function AdminPage() {
  const [option, setOption] = useState(null);

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setOption(<CreateEntities />)}>
          Create Entities
        </button>
        <button onClick={() => setOption(<p>Register user</p>)}>
          Register user
        </button>
      </div>
      {option}
    </>
  );
}

export default AdminPage;
