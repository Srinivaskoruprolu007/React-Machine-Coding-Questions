import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}
const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleAction = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleAction(index)}
            className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200"
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 text-sm text-gray-500">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
