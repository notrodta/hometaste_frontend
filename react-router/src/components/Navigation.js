import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/about"> About </NavLink>
      <NavLink to="/contact"> Contact </NavLink>
      <NavLink to="/recipeForm"> CreateRecipe </NavLink>
      <NavLink to="/calendarView"> CalendarView </NavLink>
    </div>
  );
};

export default Navigation;