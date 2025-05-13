import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { Button } from "../ReusableBuuton";
import { SubmitForm } from "./SubmitForm";
import { ResetForm } from "./ResetForm";
import { ChildInput } from "./ChildInput";

export const InputForm = ({}) => {
  const [input, setInput] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    console.log(input);
  };

  const handleReset = () => {
    setInput("");
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
    setTimeout(() => {
      ref.current?.blur();
    }, 3000);
  }, []);
  //   useImperativeHandle(ref, () => {
  //     return {
  //       focus() {
  //         if(ref.current)
  //         ref.current?.focus();
  //       },

  //     };
  //   }, []);
  return (
    <div>
      <form>
        <input
          id="input"
          type="text"
          placeholder="Enter your  name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={ref}
        />
      </form>
      <SubmitForm onSubmit={handleSubmit} />
      <ResetForm onReset={handleReset} />
      <ChildInput ref={ref} />
    </div>
  );
};
