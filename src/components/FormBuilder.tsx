"use client";

import { FormBuilder, FormType } from "@formio/react";
import React, { useState } from "react";

export default function BuildForm() {
  const [formData, setFormData] = useState<FormType>({});

  const onFormChange = (schema: FormType) => {
    setFormData({ ...schema });
  };

  return (
    <>
      <div className="m-5 card">
        <div className="card-header">
          <h1>Formio Sample</h1>
        </div>
        <div className="card-body">
          <FormBuilder form={formData} onChange={onFormChange} />
        </div>
      </div>
    </>
  );
}
