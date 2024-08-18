import { create } from "zustand";
import { type ContactForm } from "@interfaces/contact";

type FormState = {
    form: ContactForm
}

type FormAction = {
    setForm: (data: Partial<ContactForm>) => void;
}

const INITIAL_STATE: ContactForm = {
    name: "",
    email: "",
    message: ""
}

export const useContactStore = create<FormState & FormAction>()(
    (set) => ({
        form: INITIAL_STATE,
        setForm: ((data) => set((state) => {

            return {
                setForm: state.setForm,
                form: { ...state.form, ...data }
            }
        }))
    })
);
