/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PatchOperation } from "../../../../types/patchOperation.";

export const pickFields = <T extends Record<string, any>>( obj: T, keys: readonly string[]) =>
  keys.reduce((acc: any, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});

export const generatePatchData = <T extends Record<string, any>>(
  original: T,
  updated: T
): PatchOperation[] => {
  const patch: PatchOperation[] = [];

  Object.keys(updated).forEach((key) => {
    const oldValue = original[key];
    const newValue = updated[key];

    if (oldValue !== newValue) {
      patch.push({
        operationType: 0,
        path: `/${key}`, 
        op: "replace",
        value: newValue,
      });
    }
  });

  return patch;
};

/**
 * Generates a JSON Patch array for changed fields
 * @param original - original object from backend
 * @param updated - updated form data
 */