import React, { useState } from "react";

function Api() {
  const [data, setData] = useState([]);

  const getApi = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await res.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("Data:", data);
  return (
    <div className="flex flex-col justify-center items-center p-5">
        <h1>Api </h1>
        <button onClick={getApi} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Fetch data</button>
    <div>
        {data.map((item) => {
            return(
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    {/* <h1>{item.completed ? "YES" : "Non"}</h1> */}
                </div>
            )
        })}
    </div>
    </div>
    );
}   
export default Api;
