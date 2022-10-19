import React from "react";
import { NavLink } from "react-router-dom";
import "./DogFinder.css";

const Dogs = ({ dogs }) => {
  return (
    <div>
      <div className="flex justify-center m-4">
        <h1 className="text-[1.5rem]">
          HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.
        </h1>
      </div>
      <ul className="flex justify-center gap-[5rem] mt-[3rem]">
        {dogs.map((item, idx) => {
          return (
            // <Link to={"/dogs/" + item.name}>
            //   <div>
            //     <img src={item.image} alt={item.name} />
            //     <h5>{item.name}</h5>
            //   </div>
            // </Link>

            <NavLink to={"/dogs/" + item.name}>
              <li>
                <div className=" w-[12rem] border-4 border-black rounded-full">
                  <img
                    className=" rounded-full border-2"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <p className="text-center mt-3">{item.name}</p>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
