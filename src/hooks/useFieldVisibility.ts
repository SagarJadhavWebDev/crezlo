import { useWatch } from "react-hook-form";
import { ICollectionFields } from "../types";

export  const useFieldVisibility = (field: ICollectionFields, allFields: ICollectionFields[], control) => {
  const dependentParents = allFields?.filter((parentField) => {
    const deps = parentField.settings_meta?.options?.dependable_fields;
    if (!deps) return false;

    if (Array.isArray(deps)) return deps.includes(field?.shot_code);
    if (typeof deps === "object") {
      return Object.values(deps).some((val) => {
        if (Array.isArray(val)) return val.includes(field?.shot_code);
        return val === field?.shot_code;
      });
    }
    return false;
  });

  if ((dependentParents?.length ?? 0) === 0) return true;

  const parentValues = useWatch({
    control,
    name: dependentParents?.map((p) => p?.shot_code),
  });

  const matcher = (a: any, b: any) => {
    if (typeof a === "object" && a?.value) {
      return a?.value === b;
    } else if (Array.isArray(a)) {
      return a.some((v) => b === v);
    }
    return !!a;
  };

  const getValue = (value: any) => {
    if (typeof value === "object" && value?.value) {
      return value?.value;
    }
    return value;
  };

  return dependentParents?.some((parentField, idx) => {
    const deps = parentField?.settings_meta?.options?.dependable_fields;
    const parentValue = parentValues?.[idx];
    if (Array.isArray(deps)) {
      return matcher(parentValue, true);
    }

    if (typeof deps === "object") {
      for (const [key, val] of Object.entries(deps)) {
        //@ts-ignore
        if (key === getValue(parentValue) && ((Array.isArray(val) && val.includes(field?.shot_code)) || val === field?.shot_code)) {
          return matcher(parentValue, key);
        }
      }
    }

    return false;
  });
};

