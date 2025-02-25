import Button from "./Button";
import React from "react";

function Header() {
  return (
    <header className="pt-10  container mx-auto p-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <h1 className="text-4xl font-bold dark:text-white">User Persona</h1>
        <div className="w-30 h-[6px] bg-primary-light rounded-2xl mt-2 dark:bg-primary-dark"></div>

      </div>
      <div className="text-center sm:text-right">
        <Button />
      </div>
    </header>
  );
}

export default Header;
