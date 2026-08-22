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
 * Tu misión es declarar tus variables personales con tipos explícitos, formatear
 * tus datos e implementar el cálculo de promedios con tipado estricto.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Lee atentamente cada bloque marcado con `// TODO:`.
 * 2. Escribe o completa el código TypeScript según las especificaciones.
 * 3. Ejecuta en tu terminal: `pnpm run start:01` para verificar los tests.
 */

// ============================================================================
// PASO 1: Tipado de Variables Personales e Impresión de Resumen
// ============================================================================
// TODO: Asigna valores válidos a las variables con sus tipos explícitos requeridos:
// - `nombreEstudiante` (string): Debe tener al menos 1 caracter.
// - `edadEstudiante` (number): Debe ser un número mayor a 0.
// - `promedioObjetivo` (number): Debe ser un número decimal (ej. 9.85).
// - `estaMatriculado` (boolean): Debe ser true.

export const nombreEstudiante: any = 12345;       // ERROR: any y valor numérico
export const edadEstudiante: number = "dieciseis" as any;
export const promedioObjetivo: number = "diez" as any;
export let estaMatriculado: boolean = "si" as any;

/**
 * TODO: Implementa la función `obtenerResumenPersonal` usando Template Strings (${...}).
 * Debe retornar una cadena con este formato exacto:
 * `👤 Estudiante: NOMBRE | 🎂 Edad: EDAD años | 🎯 Meta: PROMEDIO/10 | 📋 Estado: MATRICULADO` (o NO_MATRICULADO si es false)
 */
export function obtenerResumenPersonal(): string {
  // 👇 TODO: Escribe tu lógica aquí y reemplaza el return "":
  return "";
}

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
  // Violación de readonly y tipo de retorno incorrecto
  notas.push(10);
  return "invalido";
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
