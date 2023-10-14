import React from "react";
import { useParams } from "react-router";

const Info = () => {
  const id = useParams().id;
  React.useEffect(() => {
    console.log("id ::", id);
  }, [id]);
  return (
    <div>
      <h1>This is Info Page</h1>
    </div>
  );
};

export default Info;
