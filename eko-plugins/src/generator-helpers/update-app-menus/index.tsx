import {ucwords} from "../ucwords";
import { Tree } from "@nrwl/devkit";
import { createFileName } from "../create-file-name";
import {readFileIfExisting} from "nx/src/utils/fileutils";
import { FeatureScaffoldingSchema } from "../../generators/feature-scaffolding/schema";

export const updateAppMenus = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const menuFilePath = `./src/app/modules/common/configs/menu.tsx`;

  const appMenu = readFileIfExisting(menuFilePath);

  if (appMenu !== "") {
    const newMenu = `
      {
        label: <Link to={fe.dashboard}>${ucwords(options.name.replace("-", " "))}</Link>,
        icon: <SettingsIcon />,
        key: fe.${createFileName(options.name)},
      },
    `
      const insertPosition = appMenu.lastIndexOf("]") - 1;

      const currentStorePrefix = appMenu.substring(0, insertPosition);
      const currentStoreSuffix = appMenu.substring(insertPosition);
      const updatedStore = `${currentStorePrefix}${newMenu}${currentStoreSuffix}`;

    if (updatedStore !== appMenu) {
      tree.write(menuFilePath, updatedStore);
    }
  }
};

