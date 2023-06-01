import { FeatureScaffoldingSchema } from './schema';
import {
    createFileName,
    updateAppStore,
    updateAppRoutes,
    updateAppMenus,
    createFeatureName,
    updateFrontendUrl,
    createFeatureFunctionName,
} from "../../generator-helpers";
import {
    Tree,
    formatFiles,
    generateFiles,
    joinPathFragments
} from "@nrwl/devkit";

const createFeature = (tree: Tree, options: FeatureScaffoldingSchema) => {
    const dir = `./eko/src/app/modules/${options.name}`;

    generateFiles(
        tree,
        joinPathFragments(
            __dirname,
            options.type === "crud" ? "./crud" : "./single"
        ),
        dir,
        {
            ...options,
            createFeatureName,
            createFileName,
            createFeatureFunctionName,
            featureName: createFileName(options.name),
            tmpl: ""
        }
    );
};

export default async function(tree: Tree, schema: FeatureScaffoldingSchema) {
    await createFeature(tree, schema);
    updateAppStore(tree, schema);
    updateAppMenus(tree, schema);
    updateAppRoutes(tree, schema);
    updateFrontendUrl(tree, schema);
    await formatFiles(tree);
}
