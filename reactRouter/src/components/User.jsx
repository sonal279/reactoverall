import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

function User() {
  const { userid } = useParams();
  const data = useLoaderData();
  // const [data, setdata] = useState([]);
  /*  const response = useEffect(() => {
    fetch(`https://api.github.com/users/hiteshchoudhary`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => setdata(res));
  }); */
  return (
    <>
      <h1>New User:{userid}</h1>
      <h2>
        Followers of {userid}:{data.followers}
      </h2>
    </>
  );
}

export default User;

export const githubapi = async () => {
  const response = await fetch(`https://api.github.com/users/hiteshchoudhary`);
  return response.json();
};
