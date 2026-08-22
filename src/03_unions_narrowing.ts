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
 * 1. Implementa `formatearIdentificador` usando estrechamiento de tipos (`typeof`).
 * 2. Implementa `renderizarEstadoUI` con un `switch(estado.status)`.
 * 3. Ejecuta en tu terminal: `pnpm run start:03` para verificar los tests.
 */

// ============================================================================
// PASO 1: Type Narrowing Básico con typeof
// ============================================================================
/**
 * TODO: Implementa la función `formatearIdentificador`.
 * - Recibe un `id` que puede ser `string` o `number`.
 * - Si es `string`, retornar: `ID-ALFANUMERICO-` seguido del texto en MAYÚSCULAS.
 * - Si es `number`, retornar: `ID-NUMERICO-#` seguido del número relleno con ceros a 6 dígitos (ej: 45 -> "000045").
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
