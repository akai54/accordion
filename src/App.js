import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [activeID, setActiveID] = useState(null);

  function handleFaqClick(id) {
    if (activeID === id) {
      setActiveID(null);
    } else {
      setActiveID(id);
    }
  }

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          num={i}
          title={el.title}
          key={el.title}
          activeID={activeID}
          handleFaqClick={handleFaqClick}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, activeID, handleFaqClick, children }) {
  return (
    <div
      className={`item ${num === activeID ? "open" : ""}`}
      onClick={() => handleFaqClick(num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{num === activeID ? "-" : "+"}</p>
      {num === activeID && <div className="content-box">{children}</div>}
    </div>
  );
}

export default App;
