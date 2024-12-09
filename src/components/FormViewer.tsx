"use client";
import React, { useState } from "react";
import { Form, FormType } from "@formio/react";

export default function FormViewer() {
  console.log("Client Log");
  const [formData, setFormData] = useState<FormType>({});
  return <Form form={formData} />;
}
