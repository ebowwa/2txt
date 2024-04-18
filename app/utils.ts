// app/utils.ts
type SupportedImageTypes =
  | "image/jpeg"
  | "image/png"
  | "image/gif"
  | "image/webp";

export function isSupportedImageType(
  type: string
): type is SupportedImageTypes {
  return ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(
    type
  );
}

type SupportedCSVType = "text/csv";
type SupportedJSONType = "application/json";

export function isSupportedCSVType(
  type: string
): type is SupportedCSVType {
  return type === "text/csv";
}

export function isSupportedJSONType(
  type: string
): type is SupportedJSONType {
  return type === "application/json";
}