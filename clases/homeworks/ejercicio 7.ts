function suma(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
  return "No se pueden concatenar";
}
// Logra que esta funcion tambien concatene strings
