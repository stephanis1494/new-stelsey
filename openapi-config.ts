import type { ConfigFile } from "@rtk-query/codegen-openapi"

const config: ConfigFile = {
  schemaFile: "http://localhost:8080/v3/api-docs",
  apiFile: "./src/store/emptyApi.ts",
  apiImport: "emptyApi",
  outputFile: "./src/store/api.generated.ts",
  exportName: "api",
  hooks: true,
  tag: true,
}

export default config
