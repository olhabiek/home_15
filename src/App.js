import { useCallback, useMemo, useState } from "react";
import "./App.css";
import UserList from "./components/userList";

function App() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eva" },
    { id: 6, name: "Frank" },
    { id: 7, name: "Grace" },
    { id: 8, name: "Hannah" },
    { id: 9, name: "Ivan" },
    { id: 10, name: "Jack" },
  ];

  const [filterValue, setFilterValue] = useState("");

  const filterUser = useCallback((value) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return filterUser(filterValue);
  }, [filterValue, filterUser]);

  return (
    <div className="App">
      <input
        value={filterValue}
        onChange={(evt) => setFilterValue(evt.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
