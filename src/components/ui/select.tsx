// imports

// hooks

import { useState, useRef, useEffect } from "react";

// svgs

import Down from "@/assets/svgs/down";
import Up from "@/assets/svgs/up";

// interfaces

interface select {
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
  text?: string;
}

export default function Select ({ options, selectedOption, onSelect, text } : select) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  if(text === "") {
    onSelect(options[0]);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        className={`w-full px-4 py-2 font-bold text-left ${text ? selectedOption === "" ? "text-gray-300" : "text-black" : "text-black"} bg-white border-[1px] border-solid border-gray-300 rounded-[4px] focus:outline-none`}
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption : text ? text : options[0]}
        <span className="float-right">{isOpen ? <Up /> : <Down />}</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {text && <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect("")}> {text} </li>}
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
