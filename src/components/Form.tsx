import { useState,FormEvent } from "react";
import { HelloProps } from "../types/formDataTypes";

export default function Form() {
  const [formData, setFormData] = useState<HelloProps>({firstName: ' ', lastName: ' ',age: 0}) ;

  const handleFormSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()


  };

  return (
    <>
      <form action="">
        <input
          type="text"
          name=""
          id=""
          placeholder="last name"
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="first name"
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="age-optional"
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <button type="submit" onClick={(e) => handleFormSubmit(e)}>
          Send Form
        </button>
      </form>
    </>
  );
}
