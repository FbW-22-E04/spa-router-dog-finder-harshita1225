import { NavLink } from "react-router-dom"

export default function Nav({ dogs, currentDog }) {
    // If a dog is NOT selected, force full opacity for the links
    const classes = currentDog ? "" : "force-full-opacity"

    return (
      <nav>
        {dogs.map(dog =>
          <NavLink key={dog.id} className={classes} to={"/dogs/" + dog.name}>
            <img src={dog.image} alt="" />
            {dog.name}
          </NavLink>
        )}
      </nav>
    )
  }