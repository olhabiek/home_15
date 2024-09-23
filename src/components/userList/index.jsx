import styles from "./styles.module.css";

function UserList({ users }) {
  return (
    <div className={styles.list}>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UserList;
