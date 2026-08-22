/**
 * ============================================================================
 * 🥊 RETO 03: Union Types, Type Narrowing & Discriminated Unions para UI Móvil
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 📖 CONTEXTO / MISIÓN:
 * En React Native, una pantalla conectada a una API puede estar: cargando con
 * un spinner, mostrando los datos obtenidos con éxito, o mostrando un mensaje
 * de error si se cae la red.
 * Tu misión es modelar estos 3 estados con un 'Discriminated Union' para que
 * la app jamás explote por variables indefinidas.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Define los tipos y la unión discriminada de estados.
 * 2. Implementa `formatearIdentificador` usando estrechamiento de tipos (`typeof`).
 * 3. Implementa `renderizarEstadoUI` con un `switch(estado.status)`.
 * 4. Ejecuta en tu terminal: `pnpm run start:03` para verificar los tests.
 */

console.log("=================================================================");
console.log("🥊 EJECUTANDO PRUEBAS: RETO 03 — Estados Móviles & Uniones");
console.log("=================================================================\n");

// ============================================================================
// PASO 1: Type Narrowing Básico con typeof
// ============================================================================
/**
 * TODO: Implementa la función `formatearIdentificador`.
 * - Recibe un `id` que puede ser `string` o `number`.
 * - Si es `string`, retornar: `ID-ALFANUMERICO-` seguido del texto en MAYÚSCULAS.
 * - Si es `number`, retornar: `ID-NUMERICO-#` seguido del número relleno con ceros a 6 dígitos (ej: 42 -> "000042").
 *   (Pista: usa id.toFixed(0).padStart(6, "0"))
 */
export function formatearIdentificador(id: string | number): string {
  if (typeof id === "string") {
    return `ID-ALFANUMERICO-${id.toUpperCase()}`;
  } else {
    return `ID-NUMERICO-#${id.toFixed(0).padStart(6, "0")}`;
  }
}

// ============================================================================
// PASO 2: Modelado de Estados con Discriminated Unions
// ============================================================================
export interface EstadoCargando {
  status: "LOADING";
  porcentaje: number;
}

export interface EstadoExito<T> {
  status: "SUCCESS";
  datos: T;
  hora: string;
}

export interface EstadoError {
  status: "ERROR";
  codigo: number;
  mensaje: string;
}

// Unión discriminada:
export type EstadoPantalla<T> =
  | EstadoCargando
  | EstadoExito<T>
  | EstadoError;

/**
 * TODO: Implementa `renderizarEstadoUI`.
 * Utiliza un `switch (estado.status)`:
 * - Si status === "LOADING": Retornar `⏳ Cargando datos (${estado.porcentaje}%)...`
 * - Si status === "SUCCESS": Retornar `🎉 Datos cargados con éxito a las ${estado.hora}`
 * - Si status === "ERROR": Retornar `❌ Error ${estado.codigo}: ${estado.mensaje}`
 */
export function renderizarEstadoUI<T>(estado: EstadoPantalla<T>): string {
  switch (estado.status) {
    case "LOADING":
      return `⏳ Cargando datos (${estado.porcentaje}%)...`;
    case "SUCCESS":
      return `🎉 Datos cargados con éxito a las ${estado.hora}`;
    case "ERROR":
      return `❌ Error ${estado.codigo}: ${estado.mensaje}`;
  }
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

console.log("🔍 Verificando Paso 1: formatearIdentificador()...");
assert(formatearIdentificador("usr-uets-99") === "ID-ALFANUMERICO-USR-UETS-99", "String formateado a mayúsculas correctamente");
assert(formatearIdentificador(45) === "ID-NUMERICO-#000045", "Number formateado a 6 dígitos con padStart", "Usa id.toFixed(0).padStart(6, '0')");

console.log("\n🔍 Verificando Paso 2: renderizarEstadoUI() con Discriminated Unions...");
const estadoLoad: EstadoPantalla<string> = { status: "LOADING", porcentaje: 50 };
assert(renderizarEstadoUI(estadoLoad) === "⏳ Cargando datos (50%)...", "Estado LOADING renderizado correctamente");

const estadoSuccess: EstadoPantalla<string[]> = { status: "SUCCESS", datos: ["A", "B"], hora: "10:30" };
assert(renderizarEstadoUI(estadoSuccess) === "🎉 Datos cargados con éxito a las 10:30", "Estado SUCCESS renderizado correctamente");

const estadoErr: EstadoPantalla<null> = { status: "ERROR", codigo: 404, mensaje: "No encontrado" };
assert(renderizarEstadoUI(estadoErr) === "❌ Error 404: No encontrado", "Estado ERROR renderizado correctamente");

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Has completado el Reto 03 con 100% de éxito.");
  console.log("👉 Avanza al Reto 04 ejecutando: pnpm run start:04\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Corrige tu código y vuelve a ejecutar.`);
  process.exit(1);
}
