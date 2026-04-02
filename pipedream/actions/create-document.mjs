import { axios } from "@pipedream/platform";

export default {
  key: "officemaker-create-document",
  name: "Create OfficeMaker Document",
  description: "Create a Word, Excel, or PowerPoint document via OfficeMaker.",
  version: "0.0.1",
  type: "action",
  props: {
    baseUrl: {
      type: "string",
      label: "OfficeMaker Base URL",
      default: "https://free.officemaker.ai",
    },
    documentType: {
      type: "string",
      label: "Document Type",
      options: ["word", "excel", "powerpoint"],
    },
    fileName: {
      type: "string",
      label: "File Name",
    },
    documentJson: {
      type: "string",
      label: "Document JSON",
      description: "A JSON.stringify(...) string for the OfficeMaker document payload.",
    },
    generatePdf: {
      type: "boolean",
      label: "Generate PDF",
      optional: true,
    },
  },
  async run({ $ }) {
    return axios($, {
      method: "POST",
      url: `${this.baseUrl.replace(/\/+$/, "")}/gpt/v1/create-document`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        document_type: this.documentType,
        file_name: this.fileName,
        document_json: this.documentJson,
        generate_pdf: Boolean(this.generatePdf),
      },
    });
  },
};
