/**
 * ============================================================================
 * 🥊 RETO 02: De Clases Java POO a Interfaces TypeScript & Duck Typing
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 📖 CONTEXTO / MISIÓN:
 * En 2° de Bachillerato aprendiste Java con clases de 35 líneas llenas de getters,
 * setters y constructores. En desarrollo móvil moderno con React Native, modelamos
 * las entidades usando `interface` limpias y seguras.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Define la interface `PerfilUsuario` para reemplazar la clase Java antigua.
 * 2. Define la interface `ProductoItem` y programa el cálculo de precios con descuento.
 * 3. Ejecuta en tu terminal: `pnpm run start:02` para verificar los tests.
 */

console.log("=================================================================");
console.log("🥊 EJECUTANDO PRUEBAS: RETO 02 — Interfaces & Puente Java");
console.log("=================================================================\n");

// ============================================================================
// ☕ CÓDIGO JAVA ANTIGUO DE REFERENCIA (OBSERVA EL BOILERPLATE):
// ============================================================================
/*
public class UsuarioJava {
    private final String id;
    private String nombreCompleto;
    private String correo;
    private String telefono; // Opcional
    private String rol; // "ADMIN" | "DOCENTE" | "ESTUDIANTE"

    public UsuarioJava(String id, String n, String c, String r) {
        this.id = id; this.nombreCompleto = n; this.correo = c; this.rol = r;
    }
    // + 25 líneas de Getters y Setters...
}
*/

// ============================================================================
// PASO 1: Define la interface `PerfilUsuario` en TypeScript
// ============================================================================
// TODO: Define la interface `PerfilUsuario` con los siguientes campos:
// - `id`: de tipo string e INMUTABLE (usa la palabra reservada `readonly`)
// - `nombreCompleto`: de tipo string
// - `correo`: de tipo string
// - `telefono`: de tipo string y OPCIONAL (usa el signo `?`)
// - `rol`: de tipo literal `"ADMIN" | "DOCENTE" | "ESTUDIANTE"`

export interface PerfilUsuario {
  readonly id: string;
  nombreCompleto: string;
  correo: string;
  telefono?: string;
  rol: "ADMIN" | "DOCENTE" | "ESTUDIANTE";
}

// TODO: Crea una variable constante `usuarioEjemplo` que cumpla con `PerfilUsuario`:
export const usuarioEjemplo: PerfilUsuario = {
  id: "UETS-2026-001",
  nombreCompleto: "David Domínguez",
  correo: "david.dominguez@est.salesianos.edu.ec",
  rol: "ESTUDIANTE"
};

// ============================================================================
// PASO 2: Interface `ProductoItem` y Función de Descuento
// ============================================================================
// TODO: Define la interface `ProductoItem` con:
// - `id`: string (readonly)
// - `titulo`: string
// - `precio`: number
// - `disponible`: boolean
// - `descuentoPorcentaje`: number (opcional ?)

export interface ProductoItem {
  readonly id: string;
  titulo: string;
  precio: number;
  disponible: boolean;
  descuentoPorcentaje?: number;
}

/**
 * TODO: Implementa la función `calcularPrecioFinal`.
 * Reglas:
 * 1. Si el producto NO está disponible (`!producto.disponible`), retornar 0.
 * 2. Si tiene `descuentoPorcentaje` mayor a 0, restar ese porcentaje al precio original.
 * 3. Si no tiene descuento, retornar el precio original.
 * 4. Retornar el número redondeado a 2 decimales.
 */
export function calcularPrecioFinal(producto: ProductoItem): number {
  if (!producto.disponible) return 0;
  if (producto.descuentoPorcentaje && producto.descuentoPorcentaje > 0) {
    const rebaja = producto.precio * (producto.descuentoPorcentaje / 100);
    return Number((producto.precio - rebaja).toFixed(2));
  }
  return Number(producto.precio.toFixed(2));
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

console.log("🔍 Verificando Paso 1: Interface PerfilUsuario...");
assert(typeof usuarioEjemplo.id === "string", "usuarioEjemplo tiene un id tipo string");
assert(typeof usuarioEjemplo.nombreCompleto === "string", "usuarioEjemplo tiene nombreCompleto");
assert(typeof usuarioEjemplo.correo === "string", "usuarioEjemplo tiene correo");
assert(
  usuarioEjemplo.rol === "ADMIN" || usuarioEjemplo.rol === "DOCENTE" || usuarioEjemplo.rol === "ESTUDIANTE",
  "usuarioEjemplo tiene un rol válido del union type"
);

console.log("\n🔍 Verificando Paso 2: calcularPrecioFinal()...");
const item1: ProductoItem = {
  id: "P1",
  titulo: "Curso Expo React Native",
  precio: 20.00,
  disponible: true,
  descuentoPorcentaje: 25 // 25% de 20 = 5 -> Precio final = 15.00
};
assert(calcularPrecioFinal(item1) === 15.00, "Producto con 25% de descuento calcula $15.00 correctamente");

const item2: ProductoItem = {
  id: "P2",
  titulo: "Cable USB-C Carga Rápida",
  precio: 8.50,
  disponible: true
};
assert(calcularPrecioFinal(item2) === 8.50, "Producto sin descuento mantiene su precio original ($8.50)");

const item3: ProductoItem = {
  id: "P3",
  titulo: "Audífonos Bluetooth",
  precio: 35.00,
  disponible: false,
  descuentoPorcentaje: 50
};
assert(calcularPrecioFinal(item3) === 0, "Producto NO disponible retorna $0.00", "Revisa la condición if (!producto.disponible)");

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Has completado el Reto 02 con 100% de éxito.");
  console.log("👉 Avanza al Reto 03 ejecutando: pnpm run start:03\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Corrige tu código y vuelve a ejecutar.`);
  process.exit(1);
}
