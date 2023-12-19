import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  const inputClass =
    " w-full p-1 border-b-2 rounded-sm text-stone-600 border-stone-300 bg-stone-300 focus:outline-none hover:border-stone-600";
  return (
    <p className="flex flex-col">
      <label className=" uppercase font-bold text-sm text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={inputClass} {...props}></textarea>
      ) : (
        <input ref={ref} className={inputClass} {...props}></input>
      )}
    </p>
  );
});

export default Input;
