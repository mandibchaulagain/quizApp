import React from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../utlis/firebase";

function User() {
  const userColRef = collection(db, "users");

  const handleAddUser = async () => {
    try {
      await addDoc(userColRef, {
        name: "Prashant",
        age: 69,
        timestamp: serverTimestamp(),
        email: "prashant69@gmail.com",
      });
      alert("User added successfully");
    } catch (e) {
      alert("Error in adding user");
      console.error("Error in adding user", e);
    }
  };

  return (
    <>
      <h1>User page</h1>
      <button onClick={handleAddUser}>Add User</button>
    </>
  );
}

export default User;
