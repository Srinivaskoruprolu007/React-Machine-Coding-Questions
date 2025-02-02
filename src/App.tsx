import Counter from "./components/Easy/Counter";
import Accordion from "./components/Easy/Accordion";
import ContactForm from "./components/Easy/ContactForm";
import { Toaster } from "react-hot-toast";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "Why use React?",
    content: "React makes it painless to create interactive UIs",
  },
];
const App = () => {
  return (
    <div>
      <Counter initialCount={10} />
      <ContactForm />
      <Accordion items={items} />
      <Toaster />
    </div>
  );
};

export default App;
