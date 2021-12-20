import React from "react";

function HigherOrderFunction(data) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          {data.data.length > 0 ? (
            data.data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.first_name}</td>
                <td>{d.last_name}</td>
                <td>
                  <img src={d.avatar} alt={d.avatar} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Loading</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
export default HigherOrderFunction;
