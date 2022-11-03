import { useState, useEffect } from "react";
export default function Test() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(`/api/boards`).then((response) =>
        response.json()
      );
      setData(actualData);
      console.log(actualData);
    }
    getData();
  }, []);
  const arr = data ? [...new Set(data.map((i) => i.boardName))] : null;
  console.log(arr, "arr");
  return (
    <div>
      <ul>{data && data.map((i) => <li key={i._id}>{i.title}</li>)}</ul>
      <ul>{arr && arr.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}
