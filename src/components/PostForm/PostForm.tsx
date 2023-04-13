import { useState, useEffect, SyntheticEvent } from "react";

export interface IInputs {
  title: string;
  body: string;
}

interface IPostFormProps {
  onSubmit: (values: IInputs) => void;
  initialValues?: IInputs;
  submitText: string;
  clearOnSubmit: boolean;
}

const defaultFormValues = {
  title: "",
  body: "",
};

export const PostForm = ({
  onSubmit,
  initialValues = defaultFormValues,
  submitText,
  clearOnSubmit,
}: IPostFormProps) => {
  const [values, setValues] = useState(initialValues);

  const setValue = (field: keyof typeof values, value: string) =>
    setValues((old) => ({ ...old, [field]: value }));

  const handleSubmit = (e: SyntheticEvent) => {
    if (clearOnSubmit) {
      setValues(defaultFormValues);
    }
    e.preventDefault();
    onSubmit(values);
  };

  useEffect(() => {
    setValues(initialValues);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title</label>
      <div>
        <input
          type='text'
          name='title'
          value={values.title}
          onChange={(e) => setValue("title", e.target.value)}
          required
        />
      </div>
      <br />
      <label htmlFor='body'>body</label>
      <div>
        <textarea
          //   type="t"
          name='body'
          value={values.body}
          onChange={(e) => setValue("body", e.target.value)}
          required
        />
      </div>
      <br />
      <button type='submit'>{submitText}</button>
    </form>
  );
};
