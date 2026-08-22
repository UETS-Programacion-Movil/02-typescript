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
 * 2. Implementa `formatearPerfilUsuario` para visualizar el perfil en pantalla.
 * 3. Define la interface `ProductoItem` y programa el cálculo de precios con descuento.
 * 4. Ejecuta en tu terminal: `pnpm run start:02` para verificar los tests.
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
// TODO: Define la interface `PerfilUsuario` con los siguientes campos y modificadores:
// - `id`: de tipo string e INMUTABLE (usa `readonly`)
// - `nombreCompleto`: de tipo string
// - `correo`: de tipo string
// - `telefono`: de tipo string y OPCIONAL (usa `?`)
// - `rol`: de tipo literal `"ADMIN" | "DOCENTE" | "ESTUDIANTE"`

export interface PerfilUsuario {
  readonly id: string;
  nombreCompleto: string;
  correo: string;
  telefono?: string;
  rol: "ADMIN" | "DOCENTE" | "ESTUDIANTE";
}

// TODO: Completa la variable constante `usuarioEjemplo` asignando valores válidos:
export const usuarioEjemplo: PerfilUsuario = {
  id: "UETS-2026-001",
  nombreCompleto: "",                                // 👈 TODO: Llena tu nombre completo
  correo: "estudiante@est.salesianos.edu.ec",        // 👈 TODO: Tu correo institucional
  rol: "ESTUDIANTE"
};

/**
 * TODO: Implementa `formatearPerfilUsuario`.
 * Formato requerido:
 * `[PERFIL] ID (ROL): NOMBRE - CORREO`
 * (Ejemplo: `[PERFIL] UETS-2026-001 (ESTUDIANTE): Carlos Andrade - carlos@est.salesianos.edu.ec`)
 */
export function formatearPerfilUsuario(usuario: PerfilUsuario): string {
  // 👇 TODO: Escribe tu lógica con Template Strings y reemplaza el return "":
  return "";
}

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
 * 2. Si tiene `descuentoPorcentaje` mayor a 0, restar ese porcentaje al precio original:
 *    descuento = producto.precio * (producto.descuentoPorcentaje / 100)
 *    precioFinal = producto.precio - descuento
 * 3. Si no tiene descuento o es 0, retornar el precio original.
 * 4. Retornar el número redondeado a 2 decimales: Number(precioFinal.toFixed(2)).
 */
export function calcularPrecioFinal(producto: ProductoItem): number {
  // 👇 TODO: Escribe tu lógica aquí y reemplaza el return 0:
  return 0;
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

const perfilFormateado = formatearPerfilUsuario(usuarioEjemplo);
if (perfilFormateado.length > 0) {
  console.log("┌────────────────────────────────────────────────────────┐");
  console.log("│ 📱 PERFIL DE USUARIO FORMATEADO EN CONSOLA             │");
  console.log(`│ ${perfilFormateado.padEnd(54)} │`);
  console.log("└────────────────────────────────────────────────────────┘\n");
}

console.log("🔍 Verificando Paso 1: Interface PerfilUsuario...");
assert(typeof usuarioEjemplo.id === "string" && usuarioEjemplo.id.length > 0, "usuarioEjemplo tiene un id tipo string válido");
assert(typeof usuarioEjemplo.nombreCompleto === "string" && usuarioEjemplo.nombreCompleto.length > 0, "usuarioEjemplo tiene nombreCompleto", "Asigna tu nombre en usuarioEjemplo.nombreCompleto");
assert(typeof usuarioEjemplo.correo === "string" && usuarioEjemplo.correo.includes("@"), "usuarioEjemplo tiene correo válido");
assert(
  usuarioEjemplo.rol === "ADMIN" || usuarioEjemplo.rol === "DOCENTE" || usuarioEjemplo.rol === "ESTUDIANTE",
  "usuarioEjemplo tiene un rol válido del union type"
);
assert(
  perfilFormateado.includes("[PERFIL]") && perfilFormateado.includes(usuarioEjemplo.id),
  "formatearPerfilUsuario() implementada correctamente",
  "Usa: `[PERFIL] ${usuario.id} (${usuario.rol}): ${usuario.nombreCompleto} - ${usuario.correo}`"
);

console.log("\n🔍 Verificando Paso 2: calcularPrecioFinal()...");
const item1: ProductoItem = {
  id: "P1",
  titulo: "Curso Expo React Native",
  precio: 20.00,
  disponible: true,
  descuentoPorcentaje: 25 // 25% de 20 = 5 -> Precio final = 15.00
};
assert(calcularPrecioFinal(item1) === 15.00, "Producto con 25% de descuento calcula $15.00 correctamente", "Resta (precio * porcentaje / 100) al precio");

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
assert(calcularPrecioFinal(item3) === 0, "Producto NO disponible retorna $0.00", "Verifica if (!producto.disponible) return 0;");

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Has completado el Reto 02 con 100% de éxito.");
  console.log("👉 Avanza al Reto 03 ejecutando: pnpm run start:03\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Completa tu código en src/02_puente_java_interfaces.ts y vuelve a ejecutar.`);
  process.exit(1);
}
