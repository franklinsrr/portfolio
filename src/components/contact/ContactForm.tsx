import { type FC, useState } from "react";
import Input from "@components/Input";
import TextArea from "@components/TextArea";
import ButtonIn from "@components/ButtonInt";
import Sended from "@components/Sended";
import { useContactStore } from "@store/useContactStore";
import type { ContactForm as IContactForm } from "@interfaces/contact";

type Names = keyof IContactForm;

const ContactForm: FC = () => {
  const [isSent, setIsSent] = useState(false);
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

  const isActive = form.email && form.message && form.name ? true : false;

  if (isSent) {
    return <Sended />;
  }

  return (
    <form
      className="max-w-96 lg:py-40 py-10 w-full flex flex-col gap-6"
      autoComplete="off"
    >
      <Input name="name" type="text" required onChange={handleChangeInput} />
      <Input name="email" type="email" required onChange={handleChangeInput} />
      <TextArea
        name="message"
        rows={7}
        cols={5}
        onChange={handleChangeInput}
        required
      />
      <ButtonIn
        href={`mailto:franklinserif@gmail.com?cc=${form.email}&bcc=franklinserif@gmail.com&subject=${form.name}&body=${form.message}`}
        isActive={isActive}
        onClick={() => setIsSent(true)}
      >
        submit-message
      </ButtonIn>
    </form>
  );
};

export default ContactForm;
