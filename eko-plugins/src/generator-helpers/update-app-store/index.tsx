import { Tree } from "@nrwl/devkit";
import { tsquery } from "@phenomnomnominal/tsquery";
import { createFileName } from "../create-file-name";
import { VariableStatement, Identifier } from "typescript";
import { readFileIfExisting } from "nx/src/utils/fileutils";
import { createFeatureFunctionName } from "../create-feature-function-name";
import { FeatureScaffoldingSchema } from "../../generators/feature-scaffolding/schema";

// const storeFilePath = normalize(`${__dirname}/../../../../src/app/modules/common/configs/store.tsx`);
const storeFilePath = './src/app/modules/common/configs/store.tsx';

export const updateAppStore = (tree: Tree, options: FeatureScaffoldingSchema) => {

  const appStore = updateStoreInputs(tree, options);

  if (appStore !== "") {
    const updatedStore = tsquery.replace(
      appStore,
      "VariableStatement",
      (node) => {
        const vsNode = node as VariableStatement;

        const declarations = vsNode.declarationList.declarations[0];

        if ((declarations.name as Identifier).escapedText === "reducers") {

          const newReducer = `
          ${createFeatureFunctionName(options.name)}: ${createFeatureFunctionName(options.name)}Reducer,
          `;

          const arrLiteral = declarations.initializer as any;

          if (Object.keys(arrLiteral.properties).length > 0) {
            const currentStore = vsNode.getFullText();

            const insertPosition = currentStore.lastIndexOf("}");

            const currentStorePrefix = currentStore.substring(0, insertPosition);
            const currentStoreSuffix = currentStore.substring(insertPosition);

            return `${currentStorePrefix}${newReducer}${currentStoreSuffix}`;
          }
        }
      }
    );

    if (updatedStore !== appStore) {
      tree.write(storeFilePath, updatedStore);
    }
  }
};

const updateStoreInputs = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const appStore = readFileIfExisting(storeFilePath);
  const importStatement = `\n import ${createFeatureFunctionName(options.name)}Reducer from '../../${options.name}/slices/${createFileName(options.name)}';`;

  const lastImportIndex = appStore.lastIndexOf("import");
  const trimmedContents = appStore.substring(lastImportIndex);
  const endOfImportStatement = trimmedContents.indexOf(";");
  const currentImportPrefix = appStore.substring(0, endOfImportStatement + lastImportIndex + 1);
  const currentImportSuffix = appStore.substring(endOfImportStatement + lastImportIndex + 1);
  return `${currentImportPrefix}${importStatement}${currentImportSuffix}`;
};
