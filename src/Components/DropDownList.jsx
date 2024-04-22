import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(true);
  const items = props.items
  const [selectedItem, setSelectedItem] = useState();
  const dartText = useSelector((state) => state.theme.inputtext)
    

  const handleChange = (event) => {
    setSelectedItem(event.target.selectedIndex.text);
    console.log(event.target.value)
    setIsOpen(false);  
  };

  return (
    <div className="dropdown w-full  ">
      {(
        <select name={props.name}  className={`${dartText} w-full`} onChange={props.onChange}>
          {items.map(item => {
            console.log(item.name == selectedItem, 'item.name === selectedItem', item.name, selectedItem)
            return <option selected={item.name == props.value ? true : false} key={item.id} value={item.id}>
              {item.name}
            </option>
          })}
        </select>
      )}
    </div>
  );
}

export default DropdownMenu;
