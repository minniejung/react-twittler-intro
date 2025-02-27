import { Tabs } from "./Tabs";
import { InputForm } from "./InputForm";
import { Counter } from "./Counter";
import { Tweets } from "./Tweets";
import { Footer } from "./Footer";

export const Features = () => {
  return (
    <section className="features">
      <Tabs />
      <InputForm />
      <Counter />
      <Tweets />
      <Footer />
    </section>
  );
};
