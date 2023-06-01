import {lcfirst} from "../lcfirst";

/**
 * @function
 * @name createFeatureFunctionName
 * @description creates a feature function name out of a newly created scaffolding feature variable
 * @param featureName {string} feature name
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {String}
 */
export const createFeatureFunctionName = (featureName: string) => {
  const convertedFeatureFunctionName = featureName.replace(
    /[^a-zA-Z0-9]+(.)/g,
    (m, chr) => chr.toUpperCase()
  );
  return lcfirst(convertedFeatureFunctionName);
}
