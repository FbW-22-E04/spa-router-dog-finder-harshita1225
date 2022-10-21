import React from "react";
import "./DogFinder.css";
import Dogs from "./Dogs";
import { useParams, NavLink } from "react-router-dom";

const SingleDog = (props) => {
  const { name } = useParams();

  const result = props.dogs.filter((el, i) => el.name === name)[0];
  const result2 = props.dogs
    .map((el, i) => {
      if (el.name !== name) return el;
    })
    .filter((item) => item !== undefined)
    .map((it) => it.name);

  console.log(result2);

  // props.setImgArr([...props.imgArr, result2]);

  return (
    <>
      <div className="flex justify-center  text-pink-900">
        <h1 className="text-[1.5rem]">LOOKING FOR DOGS??👀 </h1>
      </div>
      <h3 className="text-[1rem] text-center  text-pink-900">
        We got you covered!! CLICK ON THEM FOR MORE INFO.
      </h3>
      <ul className="flex justify-center gap-[5rem] mt-[3rem]">
        {props.dogs.map((item, i) => {
          return (
            <NavLink key={i} to={"/dogs/" + item.name}>
              <li>
                <div className=" w-[12rem] border-4 border-black rounded-full">
                  <img
                    className=" rounded-full border-2"
                    src={item.image}
                    alt=""
                    style={
                      result2 && result2.includes(item.name)
                        ? { opacity: "20%" }
                        : { opacity: "100%" }
                    }
                  />
                </div>
                <p className="text-center mt-3">
                  {item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}
                </p>
              </li>
            </NavLink>
          );
        })}
      </ul>

      <div className="flex justify-center align-center m-[5rem] ">
        <div className="flex-col justify-center text-center bg-pink-900 p-[3rem] ">
          <h3 className="text-[2.5rem] text-red-300">
            NAME: {result && result.name}
          </h3>
          <h5 className="text-[1.5rem]">AGE: {result && result.age}</h5>
          <p className="text-[1.5rem]">😄 {result && result.facts[0]}</p>
          <p className="text-[1.5rem]"> 👍 {result && result.facts[1]}</p>
          <p className="text-[1.5rem]">❤️ {result && result.facts[2]}</p>
        </div>
      </div>
    </>
  );
};

export default SingleDog;
