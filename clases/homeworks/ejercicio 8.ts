//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck<T, K extends keyof T>(arreglo: T[], prop: K): T[K][] {
  return arreglo.map((object) => {
    return object[prop];
  });
}
