import React, { useEffect, useState } from 'react';

const ButtonSwitch = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);
    useEffect(()=>{
        setValue(initialValue)
    },[initialValue])
  const handleClick = () => {
    const newValue = !value;
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <button
      className={`w-16 h-8 rounded-full focus:outline-none transition-colors ${value ? 'bg-blue-500' : 'bg-orange-700'}`}
      onClick={handleClick}
    >
      <span className={`block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${value ? 'translate-x-8' : ''}`}></span>
    </button>
  );
};

export default ButtonSwitch;