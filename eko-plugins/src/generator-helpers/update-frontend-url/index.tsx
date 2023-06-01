import { Tree } from "@nrwl/devkit";
import { createFileName } from "../create-file-name";
import { readFileIfExisting } from "nx/src/utils/fileutils";
import { FeatureScaffoldingSchema } from "../../generators/feature-scaffolding/schema";

export const updateFrontendUrl = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const frontendUrlFilePath = `./src/app/modules/common/configs/frontend-urls.tsx`;
  const urlsContents = readFileIfExisting(frontendUrlFilePath);
  const urlsToAdd = `
    ${createFileName(options.name)}: ${options.name}
  `;

  const fileEndIndex = urlsContents.lastIndexOf("}");
  const urlsPrefix = urlsContents.substring(0, fileEndIndex);
  const urlsSuffix = urlsContents.substring(fileEndIndex);

  const finalContent = `${urlsPrefix}${urlsToAdd}${urlsSuffix}`;

  tree.write(frontendUrlFilePath, finalContent);
  return;
};
