import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SingleDog from "./SingleDog";
import Dogs from "./Dogs";

import whiskeyPic from "./images/whiskey.jpg";
import hazelPic from "./images/hazel.jpg";
import tubbyPic from "./images/tubby.jpg";
const dogs = [
  {
    name: "whiskey",
    id: 0,
    image: whiskeyPic,
    age: 4,
    facts: [
      "Whiskey loves eating popcorn",
      "Whiskey is a terrible guard dog",
      "Whiskey wants to cuddle with you",
    ],
  },
  {
    name: "hazel",
    id: 1,
    age: 0,
    image: hazelPic,
    facts: [
      "Hazel has a lot of energy",
      "Hazel is highly intelligent",
      "Hazel loves people more than dogs",
    ],
  },
  {
    name: "tubby",
    id: 2,
    age: 4,
    image: tubbyPic,
    facts: [
      "Tubby is really stupid",
      "Tubby does not like walks",
      "Angelina hates Tubby",
    ],
  },
];
function DogFinder() {
  return (
    <BrowserRouter>
      <Dogs dogs={dogs} />
      <Routes>
        <Route path="/dogs/:name" element={<SingleDog dogs={dogs} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default DogFinder;
