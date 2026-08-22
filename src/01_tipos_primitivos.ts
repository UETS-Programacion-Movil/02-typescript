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
 * 2. Escribe o corrige el código TypeScript según las especificaciones.
 * 3. Ejecuta en tu terminal: `pnpm run start:01` para verificar los tests.
 */

console.log("=================================================================");
console.log("🥊 EJECUTANDO PRUEBAS: RETO 01 — Tipos Primitivos & Arrays");
console.log("=================================================================\n");

// ============================================================================
// PASO 1: Tipado de Variables Personales
// ============================================================================
// TODO: Declara las variables con sus tipos explícitos requeridos:
// - `nombreEstudiante` (string) -> Asigna tu nombre
// - `edadEstudiante` (number) -> Asigna tu edad
// - `promedioObjetivo` (number) -> Asigna una nota decimal (ej: 9.85)
// - `estaMatriculado` (boolean) -> Asigna true

export const nombreEstudiante: string = "Estudiante Salesiano";
export const edadEstudiante: number = 17;
export const promedioObjetivo: number = 9.85;
export const estaMatriculado: boolean = true;

// ============================================================================
// PASO 2: Función para Calcular el Promedio
// ============================================================================
/**
 * TODO: Implementa la función `calcularPromedio`.
 * Debe:
 * - Recibir `notas`: un arreglo inmutable de números (`readonly number[]`).
 * - Si el arreglo está vacío, retornar `0`.
 * - Sumar todas las notas y dividir para la cantidad de elementos.
 * - Retornar el resultado como número redondeado a 2 decimales.
 */
export function calcularPromedio(notas: readonly number[]): number {
  if (notas.length === 0) return 0;
  const suma = notas.reduce((acum, nota) => acum + nota, 0);
  return Number((suma / notas.length).toFixed(2));
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
  const estado = activo ? "MATRICULADO" : "RETIRADO";
  return `[FICHA UETS] ${nombre.toUpperCase()} (${edad} años) - Paralelo: ${paralelo} - Estado: ${estado}`;
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
assert(typeof nombreEstudiante === "string" && nombreEstudiante.length > 0, "nombreEstudiante es un string válido");
assert(typeof edadEstudiante === "number" && edadEstudiante > 0, "edadEstudiante es un number positivo");
assert(typeof promedioObjetivo === "number", "promedioObjetivo es de tipo number");
assert(typeof estaMatriculado === "boolean", "estaMatriculado es de tipo boolean");

console.log("\n🔍 Verificando Paso 2: calcularPromedio()...");
assert(calcularPromedio([]) === 0, "calcularPromedio([]) con arreglo vacío debe retornar 0", "Verifica el if (notas.length === 0)");
assert(calcularPromedio([10, 8, 9]) === 9, "calcularPromedio([10, 8, 9]) debe retornar 9");
assert(calcularPromedio([9.5, 9.8, 10]) === 9.77, "calcularPromedio([9.5, 9.8, 10]) debe retornar 9.77 (redondeado)");

console.log("\n🔍 Verificando Paso 3: formatearFichaEstudiante()...");
const fichaEsperada1 = "[FICHA UETS] MATEO VINTIMILLA (17 años) - Paralelo: E1 - Estado: MATRICULADO";
assert(
  formatearFichaEstudiante("Mateo Vintimilla", 17, "E1", true) === fichaEsperada1,
  "Ficha generada correctamente para estudiante matriculado",
  "Revisa mayúsculas con .toUpperCase() y el texto exacto"
);

const fichaEsperada2 = "[FICHA UETS] ANA MORALES (16 años) - Paralelo: E2 - Estado: RETIRADO";
assert(
  formatearFichaEstudiante("Ana Morales", 16, "E2", false) === fichaEsperada2,
  "Ficha generada correctamente para estudiante retirado"
);

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Has completado el Reto 01 con 100% de éxito.");
  console.log("👉 Avanza al Reto 02 ejecutando: pnpm run start:02\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Corrige tu código y vuelve a ejecutar.`);
  process.exit(1);
}
