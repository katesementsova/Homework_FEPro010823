
function setType(input) {
  const result = typeof input === "number" ? "number"
                : typeof input === "string" ? "string"
                :  typeof input === "object" ? "object"
                :  typeof input === "null" ? "null"
                : typeof input === "boolean" ? "boolean"
                : typeof input === "undefined" ? "undefined" : "error";
  
  return result;
}
