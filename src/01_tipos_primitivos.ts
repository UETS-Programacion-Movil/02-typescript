/**
 * ============================================================================
 * EJERCICIO 01: Tipos Primitivos, Inferencia y Arrays en TypeScript
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 🎯 OBJETIVO PEDAGÓGICO (MÉTODO TEACH / MATT POCOCK):
 * Comprender cómo TypeScript introduce tipado estático sobre JavaScript sin
 * perder la agilidad de desarrollo. Entender la diferencia entre inferencia
 * y anotación explícita.
 * 
 * ☕ PUENTE CON JAVA:
 * En Java escribes: int x = 10; double y = 5.5; String s = "Hola";
 * En TypeScript escribes: const x: number = 10; const s: string = "Hola";
 */

console.log("=================================================================");
console.log("🚀 EJERCICIO 01: Tipos Primitivos y Arrays en TypeScript");
console.log("=================================================================\n");

// ----------------------------------------------------------------------------
// 1. Tipos Primitivos Básicos
// ----------------------------------------------------------------------------
const nombreEstudiante: string = "Carlos Andrade";
const edadEstudiante: number = 17;
const promedioAcademico: number = 9.75;
const estaMatriculado: boolean = true;

console.log(`👤 Estudiante: ${nombreEstudiante}`);
console.log(`🎂 Edad: ${edadEstudiante} años | Promedio: ${promedioAcademico}/10`);
console.log(`📋 Estado Matrícula: ${estaMatriculado ? "ACTIVO" : "INACTIVO"}\n`);

// ----------------------------------------------------------------------------
// 2. Arrays y Colecciones Tipadas
// ----------------------------------------------------------------------------
// En Java: String[] materias = {"Móvil", "Web", "Sistemas"};
// En TS: string[] o Array<string>
const asignaturasTecnicas: string[] = [
  "Programación Móvil (React Native)",
  "Desarrollo Web",
  "Bases de Datos",
  "Sistemas Operativos"
];

// Array de tuplas o tipos combinados:
const calificacionesParciales: readonly number[] = [10, 9.5, 9.8, 10];

console.log("📚 Asignaturas Registradas:");
asignaturasTecnicas.forEach((materia, index) => {
  console.log(`  ${index + 1}. ${materia}`);
});

// ----------------------------------------------------------------------------
// 3. Funciones Tipadas con Retorno Explícito
// ----------------------------------------------------------------------------
/**
 * Calcula el promedio general a partir de un arreglo de notas.
 * @param notas Lista inmutable de números
 * @returns Promedio redondeado a 2 decimales
 */
export function calcularPromedio(notas: readonly number[]): number {
  if (notas.length === 0) return 0;
  const suma = notas.reduce((acum, actual) => acum + actual, 0);
  return Number((suma / notas.length).toFixed(2));
}

const promedioFinal = calcularPromedio(calificacionesParciales);
console.log(`\n🎯 Promedio Calculado: ${promedioFinal} / 10`);

// ----------------------------------------------------------------------------
// 4. RETO / TODO: Formateador de Ficha Estudiantil
// ----------------------------------------------------------------------------
/**
 * TODO (Paso 1): Completa la función `formatearFichaTecnica`
 * Debe recibir:
 *  - nombre (string)
 *  - edad (number)
 *  - paralelo ("E1" | "E2")
 *  - activo (boolean)
 * Debe retornar un string formateado con la información.
 */
export function formatearFichaTecnica(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
  const estadoTexto = activo ? "MATRICULADO" : "RETIRADO";
  return `[FICHA UETS] ${nombre.toUpperCase()} (${edad} años) - Paralelo: ${paralelo} - Estado: ${estadoTexto}`;
}

// Comprobación rápida:
const ficha1 = formatearFichaTecnica("Mateo Vintimilla", 17, "E1", true);
console.log(`\n📄 Salida del Reto 1:\n  ${ficha1}\n`);

console.log("✅ Ejercicio 01 completado exitosamente sin errores de compilación.\n");
