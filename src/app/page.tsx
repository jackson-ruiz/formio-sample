"use client";

import { FormBuilder, Form, FormType } from "@formio/react";
import { useState } from "react";
import ReactJson from "react-json-view";
import sampleFormData from "@/src/data/LoginForm.json";

export default function Home() {
  const [formData, setFormData] = useState<FormType>(sampleFormData);

  const onFormChange = (schema: FormType) => {
    setFormData({ ...schema });
  };

  const onSubmit = () => {
    console.log("Submit function");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h1>Formio Sample</h1>
            </div>

            <div className="card-body">
              <FormBuilder form={formData} onChange={onFormChange} />
              <hr />
              <ReactJson
                src={formData}
                name={null}
                collapsed={true}
              ></ReactJson>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h1>Viewer</h1>
            </div>
            <div className="card-body">
              <Form form={formData} onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
