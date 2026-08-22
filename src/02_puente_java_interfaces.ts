/**
 * ============================================================================
 * EJERCICIO 02: De Clases Java (POJO) a Interfaces y Type Aliases en TypeScript
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 🎯 OBJETIVO PEDAGÓGICO:
 * En Java, para representar una entidad móvil (ej. Usuario o Producto) creas una
 * clase completa con campos privados, constructor, getters y setters.
 * En TypeScript para React Native, modelamos formas de datos con `interface`
 * o `type` sin necesidad de instanciación pesada.
 */

console.log("=================================================================");
console.log("🚀 EJERCICIO 02: Modelado con Interfaces (Puente Java POO)");
console.log("=================================================================\n");

// ----------------------------------------------------------------------------
// 1. Definición de la Interfaz del Usuario Móvil
// ----------------------------------------------------------------------------
export interface PerfilUsuario {
  readonly id: string;            // Inmutable (no se puede reescribir tras la creación)
  nombreCompleto: string;
  correo: string;
  telefono?: string;              // Propiedad opcional (?)
  rol: "ADMINISTRADOR" | "DOCENTE" | "ESTUDIANTE";
  fechaRegistro: Date;
  preferenciasTema?: "CLARO" | "OSCURO" | "SISTEMA";
}

// ----------------------------------------------------------------------------
// 2. Creación Directa de Objetos (Object Literals)
// ----------------------------------------------------------------------------
// En Java: PerfilUsuario user = new PerfilUsuario("USR-101", "Ana Morales", ...);
// En TS: Creación directa con validación estricta de campos:
const usuarioDemo: PerfilUsuario = {
  id: "UETS-2026-0042",
  nombreCompleto: "Ana Paula Morales",
  correo: "ana.morales@est.salesianos.edu.ec",
  telefono: "+593 98 765 4321",
  rol: "ESTUDIANTE",
  fechaRegistro: new Date("2026-08-20T08:00:00Z"),
  preferenciasTema: "OSCURO"
};

console.log("👤 Objeto Usuario Creado con Interface:");
console.log(`  ID: ${usuarioDemo.id}`);
console.log(`  Nombre: ${usuarioDemo.nombreCompleto}`);
console.log(`  Correo: ${usuarioDemo.correo}`);
console.log(`  Rol: ${usuarioDemo.rol}`);
console.log(`  Tema Móvil: ${usuarioDemo.preferenciasTema ?? "POR DEFECTO"}\n`);

// ----------------------------------------------------------------------------
// 3. Tipado Estructural ("Duck Typing") en Acción
// ----------------------------------------------------------------------------
export interface DispositivoConectado {
  idDispositivo: string;
  modelo: string;
  versionSO: number;
}

export function sincronizarDatos(dispositivo: DispositivoConectado): void {
  console.log(`📡 Sincronizando datos con [${dispositivo.modelo}] (SO v${dispositivo.versionSO})...`);
  console.log(`   UID Hardware: ${dispositivo.idDispositivo}`);
}

// Objeto anónimo que cumple estructuralmente la interfaz:
const miTelefono = {
  idDispositivo: "DEV-ANDROID-9988",
  modelo: "Samsung Galaxy A54 5G",
  versionSO: 14,
  bateriaNivel: 88, // Campo extra: ¡Aceptado por duck typing!
  fabricante: "Samsung"
};

sincronizarDatos(miTelefono);

// ----------------------------------------------------------------------------
// 4. RETO / TODO: Modelado de Tarjeta de Producto para Carrito Móvil
// ----------------------------------------------------------------------------
/**
 * TODO: Define la interface `ProductoItem` con:
 *  - id (string, readonly)
 *  - titulo (string)
 *  - precio (number)
 *  - categoria (string)
 *  - disponible (boolean)
 *  - descuentoPorcentaje (number, opcional)
 */
export interface ProductoItem {
  readonly id: string;
  titulo: string;
  precio: number;
  categoria: string;
  disponible: boolean;
  descuentoPorcentaje?: number;
}

/**
 * Función que calcula el precio neto con descuento aplicado si existe.
 */
export function calcularPrecioFinal(producto: ProductoItem): number {
  if (!producto.disponible) return 0;
  if (producto.descuentoPorcentaje && producto.descuentoPorcentaje > 0) {
    const descuento = producto.precio * (producto.descuentoPorcentaje / 100);
    return Number((producto.precio - descuento).toFixed(2));
  }
  return producto.precio;
}

const productoMuestra: ProductoItem = {
  id: "PRD-EXPO-01",
  titulo: "Licencia de Curso Expo React Native",
  precio: 25.00,
  categoria: "Desarrollo Móvil",
  disponible: true,
  descuentoPorcentaje: 20 // 20% de descuento
};

const precioCalculado = calcularPrecioFinal(productoMuestra);
console.log(`\n🏷️ Producto: ${productoMuestra.titulo}`);
console.log(`   Precio Original: $${productoMuestra.precio.toFixed(2)}`);
console.log(`   Descuento: ${productoMuestra.descuentoPorcentaje}%`);
console.log(`   Precio Final a Pagar: $${precioCalculado.toFixed(2)}\n`);

console.log("✅ Ejercicio 02 completado exitosamente sin errores de compilación.\n");
