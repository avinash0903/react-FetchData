import React, { useState, useEffect } from "react";
import Table from "./Table";

function Data() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((result) => setUser(result.data));
  }, []);

  return (
    <>
      <Table data={user} />
    </>
  );
}
export default Data;
