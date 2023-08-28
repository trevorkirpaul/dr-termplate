import React from "react";
import { SubmitHandler } from "react-hook-form";
import { Mail } from "iconoir-react";

import Form, { FormOptions } from "../../components/Form";
import PageContainer from "../../components/PageContainer";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const formOptions: FormOptions = {
  fields: [
    {
      name: "firstName",
      label: "First Name",
      required: "First name is required",
    },
    { name: "lastName", label: "Last Name", required: "Last name is required" },
    { name: "email", label: "Email", required: "Email is required" },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      required: "Phone is required",
    },
    {
      name: "message",
      label: "Message",
      required: "Message is required",
      inputType: "textArea",
    },
  ],
};

const Contact: React.FC = () => {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <PageContainer>
      <div className="m-5">
        <h1 className="mb-5 flex text-xl">
          <Mail className="mr-2 inline" /> Contact
        </h1>
        <p className="mb-5">
          Got questions or need to schedule an appointment? We're here to help.
          Fill out the form below, and we'll get back to you as soon as
          possible.
        </p>
        <Form formOptions={formOptions} onSubmit={onSubmit} />
      </div>
    </PageContainer>
  );
};

export default Contact;
