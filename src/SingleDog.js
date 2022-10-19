import React from "react";
import "./DogFinder.css";
import Dogs from "./Dogs";
import { useParams } from "react-router-dom";

const SingleDog = (props) => {
  const { name } = useParams();

  const result = props.dogs.filter((el, i) => el.name === name)[0];
  console.log(name);
  console.log(result);
  return (
    <div className="flex justify-center align-center m-[5rem]">
      <div className="flex-col justify-center">
        <h3 className="text-[2.5rem] text-red-400">{result && result.name}</h3>
        <h5 className="text-[1.5rem]">{result && result.age}</h5>
        <p className="text-[1.5rem]">{result && result.facts[0]}</p>
        <p className="text-[1.5rem]">{result && result.facts[1]}</p>
        <p className="text-[1.5rem]">{result && result.facts[2]}</p>
      </div>
    </div>
  );
};

export default SingleDog;
