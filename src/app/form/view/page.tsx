import FormViewer from "@/src/components/FormViewer";

export default async function ViewForm() {
  console.log("Server log");

  const response = await fetch("https://localhost:7062/api/webForms", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });

  console.log(response);

  return <FormViewer />;
}
