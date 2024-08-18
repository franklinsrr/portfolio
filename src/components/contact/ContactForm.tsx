import { type FC } from "react";
import Input from "@components/Input";
import TextArea from "@components/TextArea";
import ButtonIn from "@components/ButtonInt";
import { useContactStore } from "@store/useContactStore";
import type { ContactForm as IContactForm } from "@interfaces/contact";

type Names = keyof IContactForm;

const ContactForm: FC = () => {
  const form = useContactStore((state) => state.form);
  const setForm = useContactStore((state) => state.setForm);

  const handleChangeInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const name = event.target.id as Names;
    const updatedForm = {
      ...form,
      [name]: event.target.value,
    } as Partial<IContactForm>;
    setForm(updatedForm);
  };

  const handleSubmit = () => {};

  return (
    <form className="max-w-96 lg:py-40 py-10 w-full flex flex-col gap-6">
      <Input name="name" type="text" required onChange={handleChangeInput} />
      <Input name="email" type="text" required onChange={handleChangeInput} />
      <TextArea name="message" rows={7} cols={5} onChange={handleChangeInput} />
      <ButtonIn onClick={handleSubmit}>submit-message</ButtonIn>
    </form>
  );
};

export default ContactForm;
