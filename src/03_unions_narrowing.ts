/**
 * ============================================================================
 * EJERCICIO 03: Union Types, Literal Types, Narrowing y Type Guards
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 🎯 OBJETIVO PEDAGÓGICO:
 * En las aplicaciones móviles (React Native), las pantallas cambian de estado:
 * "cargando", "éxito con datos", o "error con mensaje".
 * Los 'Union Types' y 'Discriminated Unions' permiten modelar estos estados de
 * forma imposible de romper en tiempo de ejecución.
 */

console.log("=================================================================");
console.log("🚀 EJERCICIO 03: Union Types y Discriminated Unions para UI Móvil");
console.log("=================================================================\n");

// ----------------------------------------------------------------------------
// 1. Literal Types y Union Types Básicos
// ----------------------------------------------------------------------------
export type TemaApp = "CLARO" | "OSCURO" | "ALTO_CONTRASTE";
export type NivelBateria = "BAJO" | "MEDIO" | "LLENO";

export function notificarBateria(nivel: NivelBateria): string {
  switch (nivel) {
    case "BAJO":
      return "⚠️ Nivel de batería bajo (<20%). Activa el modo ahorro.";
    case "MEDIO":
      return "🔋 Batería estable (20% - 80%).";
    case "LLENO":
      return "⚡ Batería cargada al 100%.";
  }
}

console.log(notificarBateria("BAJO"));
console.log(notificarBateria("LLENO") + "\n");

// ----------------------------------------------------------------------------
// 2. Type Narrowing (Estrechamiento de Tipos con typeof)
// ----------------------------------------------------------------------------
export function formatearIdentificador(id: string | number): string {
  if (typeof id === "string") {
    // Aquí TypeScript SABE que id es un STRING (habilita toUpperCase)
    return `ID-ALFANUMERICO-${id.toUpperCase()}`;
  } else {
    // Aquí TypeScript SABE que id es un NUMBER (habilita toFixed)
    return `ID-NUMERICO-#${id.toFixed(0).padStart(6, "0")}`;
  }
}

console.log("🔍 Type Narrowing en acción:");
console.log("  " + formatearIdentificador("usr-uets-99"));
console.log("  " + formatearIdentificador(450) + "\n");

// ----------------------------------------------------------------------------
// 3. Discriminated Unions: El Patrón Estándar para Peticiones HTTP en Móviles
// ----------------------------------------------------------------------------
export interface EstadoCargando {
  status: "LOADING";
  progresoPorcentaje: number;
}

export interface EstadoExito<T> {
  status: "SUCCESS";
  datos: T;
  timestamp: string;
}

export interface EstadoError {
  status: "ERROR";
  codigoError: number;
  mensajeUsuario: string;
}

// Unión discriminada:
export type EstadoPeticionMovil<T> =
  | EstadoCargando
  | EstadoExito<T>
  | EstadoError;

/**
 * Función simuladora de renderizado de interfaz móvil según el estado
 */
export function renderizarEstadoUI<T>(estado: EstadoPeticionMovil<T>): string {
  switch (estado.status) {
    case "LOADING":
      return `⏳ [PANTALLA MÓVIL] Spinner activo (${estado.progresoPorcentaje}%)...`;
    case "SUCCESS":
      return `🎉 [PANTALLA MÓVIL] Datos cargados con éxito a las ${estado.timestamp}. Total registros: ${JSON.stringify(estado.datos)}`;
    case "ERROR":
      return `❌ [PANTALLA MÓVIL] Error ${estado.codigoError}: ${estado.mensajeUsuario}`;
  }
}

// Pruebas con diferentes estados:
const peticion1: EstadoPeticionMovil<string[]> = {
  status: "LOADING",
  progresoPorcentaje: 45
};

const peticion2: EstadoPeticionMovil<string[]> = {
  status: "SUCCESS",
  datos: ["Notificación 1", "Tarea de Programación Móvil", "Aviso UETS"],
  timestamp: "10:30 AM"
};

const peticion3: EstadoPeticionMovil<string[]> = {
  status: "ERROR",
  codigoError: 404,
  mensajeUsuario: "No se pudo conectar al servidor de calificaciones."
};

console.log(renderizarEstadoUI(peticion1));
console.log(renderizarEstadoUI(peticion2));
console.log(renderizarEstadoUI(peticion3) + "\n");

console.log("✅ Ejercicio 03 completado exitosamente sin errores de compilación.\n");
