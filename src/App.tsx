import Counter from "./components/Easy/Counter";
import Accordion from "./components/Easy/Accordion";
import ContactForm from "./components/Easy/ContactForm";
import HolyGrail from "./components/Easy/HolyGrail";
import { Toaster } from "react-hot-toast";
import ProgressBarDemo from "./components/Medium/ProgressBarDemo";

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
      {/* <Counter initialCount={10} />
      <ContactForm />
      <Accordion items={items} />
      <Toaster /> */}
      {/* <HolyGrail /> */}
      <ProgressBarDemo />
    </div>
  );
};

export default App;
