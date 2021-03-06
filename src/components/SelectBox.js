import React from "react";
import Select from "react-select";

export default function SelectBox({
  label,
  options,
  placeholder,
  name,
  optionSelected,
}) {
  return (
    <div className="">
      <label htmlFor={name} className="px-2 tex">
        {label}
      </label>
      <Select
        className="text-gray-800 "
        name={name}
        options={options}
        placeholder={placeholder}
        onChange={(e) => optionSelected(e.value)}
      />
    </div>
  );
}
