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
