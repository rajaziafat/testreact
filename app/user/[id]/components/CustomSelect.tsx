import { chevronBottom } from "@/app/components/SVG";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const CustomSelect = ({
  selected = null,
  list,
  onChange,
}: {
  selected: any | null;
  list: any;
  onChange: any;
}) => {
  const wrapper = useRef<any>(null);
  const [active, setActive] = useState(false);
  const [currentList, setCurrentList] = useState(list);
  const [currentSelected, setCurrentSelected] = useState(selected);

  const onClick = (item: any) => {
    setCurrentSelected(item);
    if (onChange) onChange(item);

    setActive(false);
  };

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    setCurrentList(
      !currentSelected
        ? list
        : list.filter((item: any) => {
            let compareKey = "value";
            return item[compareKey] !== currentSelected[compareKey];
          })
    );
  }, [list, currentSelected]);

  useEffect(() => {
    setCurrentSelected(selected);
  }, [selected]);

  useEffect(() => {
    const windowClick = (e: MouseEvent) => {
      if (!wrapper.current.contains(e.target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);

  return (
    <div className="customSelect" ref={wrapper}>
      <div
        className={"customSelect__selected " + (active ? "active" : "")}
        onClick={toggleActive}
      >
        {currentSelected ? currentSelected.value : "---"}
        {chevronBottom}
      </div>
      <AnimatePresence>
        {active === true && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="customSelect__options"
          >
            {currentList.map((item: any, index: number) => (
              <div
                className="customSelect__option"
                key={index}
                onClick={() => onClick(item)}
              >
                {item.value}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
