/**
 * ============================================================================
 * 🥊 RETO 01: Tipos Primitivos, Inferencia y Arrays en TypeScript
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 📖 CONTEXTO / MISIÓN:
 * El sistema web anterior de la UETS sumaba calificaciones en JavaScript vanilla
 * sin tipos ("10" + "8" = "108"), produciendo errores graves en los promedios.
 * Tu misión es implementar las funciones de cálculo y formateo con tipado estricto.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Lee atentamente cada bloque marcado con `// TODO:`.
 * 2. Escribe o completa el código TypeScript según las especificaciones.
 * 3. Ejecuta en tu terminal: `pnpm run start:01` para verificar los tests.
 */

console.log("=================================================================");
console.log("🥊 EJECUTANDO PRUEBAS: RETO 01 — Tipos Primitivos & Arrays");
console.log("=================================================================\n");

// ============================================================================
// PASO 1: Tipado de Variables Personales
// ============================================================================
// TODO: Asigna valores válidos a las variables con sus tipos explícitos requeridos:
// - `nombreEstudiante` (string): Debe tener al menos 1 caracter.
// - `edadEstudiante` (number): Debe ser un número mayor a 0.
// - `promedioObjetivo` (number): Debe ser un número (ej. 9.85).
// - `estaMatriculado` (boolean): Debe ser true.

export const nombreEstudiante: string = "";       // 👈 TODO: Escribe tu nombre aquí
export const edadEstudiante: number = 0;          // 👈 TODO: Escribe tu edad aquí
export const promedioObjetivo: number = 0;        // 👈 TODO: Escribe tu promedio objetivo
export let estaMatriculado: boolean = false;    // 👈 TODO: Cambia a true

// ============================================================================
// PASO 2: Función para Calcular el Promedio
// ============================================================================
/**
 * TODO: Implementa la función `calcularPromedio`.
 * Debe:
 * 1. Recibir `notas`: un arreglo inmutable de números (`readonly number[]`).
 * 2. Si el arreglo está vacío, retornar `0`.
 * 3. Sumar todas las notas y dividir para la cantidad de elementos (`notas.length`).
 * 4. Retornar el resultado como número redondeado a 2 decimales.
 *    (Pista: usa Number((suma / notas.length).toFixed(2)))
 */
export function calcularPromedio(notas: readonly number[]): number {
  // 👇 TODO: Escribe tu lógica aquí y reemplaza el return 0:
  return 0;
}

// ============================================================================
// PASO 3: Formateador de Ficha Técnica
// ============================================================================
/**
 * TODO: Implementa la función `formatearFichaEstudiante`.
 * Parámetros requeridos:
 *  - nombre (string)
 *  - edad (number)
 *  - paralelo ("E1" | "E2") -> Literal Type
 *  - activo (boolean)
 * 
 * Formato de salida requerido:
 *  `[FICHA UETS] NOMBRE_EN_MAYUSCULAS (XX años) - Paralelo: E1 - Estado: MATRICULADO` (o RETIRADO si activo es false)
 */
export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
  // 👇 TODO: Escribe tu lógica aquí y reemplaza el return "":
  return "";
}

// ============================================================================
// 🧪 BATERÍA DE PRUEBAS AUTOMATIZADAS (NO MODIFICAR ESTA SECCIÓN)
// ============================================================================
let testsFallidos = 0;

function assert(condicion: boolean, descripcion: string, pista?: string) {
  if (condicion) {
    console.log(`  ✅ [PASÓ]: ${descripcion}`);
  } else {
    console.log(`  ❌ [FALLÓ]: ${descripcion}`);
    if (pista) console.log(`     👉 PISTA: ${pista}`);
    testsFallidos++;
  }
}

console.log("🔍 Verificando Paso 1: Tipos de Variables...");
assert(typeof nombreEstudiante === "string" && nombreEstudiante.length > 0, "nombreEstudiante es un string válido", "Asigna tu nombre en la variable nombreEstudiante");
assert(typeof edadEstudiante === "number" && edadEstudiante > 0, "edadEstudiante es un number positivo", "Asigna tu edad (ej. 17) en edadEstudiante");
assert(typeof promedioObjetivo === "number" && promedioObjetivo > 0, "promedioObjetivo es de tipo number mayor a 0", "Asigna un promedio (ej. 9.85)");
assert((estaMatriculado as boolean) === true, "estaMatriculado debe ser true", "Cambia estaMatriculado a true");

console.log("\n🔍 Verificando Paso 2: calcularPromedio()...");
assert(calcularPromedio([]) === 0, "calcularPromedio([]) con arreglo vacío debe retornar 0", "Verifica el if (notas.length === 0)");
assert(calcularPromedio([10, 8, 9]) === 9, "calcularPromedio([10, 8, 9]) debe retornar 9", "Suma los elementos y divide entre notas.length");
assert(calcularPromedio([9.5, 9.8, 10]) === 9.77, "calcularPromedio([9.5, 9.8, 10]) debe retornar 9.77 (redondeado)", "Usa Number(promedio.toFixed(2))");

console.log("\n🔍 Verificando Paso 3: formatearFichaEstudiante()...");
const fichaEsperada1 = "[FICHA UETS] MATEO VINTIMILLA (17 años) - Paralelo: E1 - Estado: MATRICULADO";
assert(
  formatearFichaEstudiante("Mateo Vintimilla", 17, "E1", true) === fichaEsperada1,
  "Ficha generada correctamente para estudiante matriculado",
  "Revisa mayúsculas con .toUpperCase() y el formato exacto: [FICHA UETS] NOMBRE (EDAD años) - Paralelo: PARALELO - Estado: ESTADO"
);

const fichaEsperada2 = "[FICHA UETS] ANA MORALES (16 años) - Paralelo: E2 - Estado: RETIRADO";
assert(
  formatearFichaEstudiante("Ana Morales", 16, "E2", false) === fichaEsperada2,
  "Ficha generada correctamente para estudiante retirado",
  "Si activo es false, el estado debe ser RETIRADO"
);

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Has completado el Reto 01 con 100% de éxito.");
  console.log("👉 Avanza al Reto 02 ejecutando: pnpm run start:02\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Completa tu código en src/01_tipos_primitivos.ts y vuelve a ejecutar.`);
  process.exit(1);
}
