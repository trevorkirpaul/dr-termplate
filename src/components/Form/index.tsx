import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Cancel } from "iconoir-react";

interface Field {
  label: string;
  name: string;
  required?: string;
  inputType?: "input" | "textArea";
  type?: "string" | "tel";
}

export interface FormOptions {
  fields: Field[];
}

interface IProps {
  onSubmit: SubmitHandler<any>;
  formOptions: FormOptions;
}

const inputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";

const getInputClass = (x?: Object) =>
  x ? inputClassName + " border-red-300" : inputClassName;

const Form: React.FC<IProps> = ({ onSubmit, formOptions }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formOptions.fields.map((fo) => (
        <div className="mb-5">
          <label className="block">{fo.label}</label>
          {fo.inputType !== "textArea" && (
            <input
              className={getInputClass(errors?.[fo.name])}
              type={fo.type || "text"}
              {...register(fo.name, { required: fo.required })}
            />
          )}

          {fo.inputType === "textArea" && (
            <textarea
              className={getInputClass(errors?.[fo.name])}
              {...register(fo.name, { required: fo.required })}
            />
          )}
          {errors?.[fo.name] && (
            <span className="my-2 block flex text-red-500">
              <Cancel className="inline" /> {errors[fo.name]?.message}
            </span>
          )}
        </div>
      ))}

      <input
        type="submit"
        className="cursor-pointer rounded bg-blue-400 px-3 py-2"
      />
    </form>
  );
};

export default Form;
