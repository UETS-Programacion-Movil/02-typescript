/**
 * ============================================================================
 * EJERCICIO 04: Desafío Integrador — Catálogo & Carrito Móvil UETS
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 🎯 DESAFÍO TÉCNICO MIT (BASE PARA EL SCREENCAST):
 * Este script integra todos los conceptos aprendidos durante la Semana 2:
 *  1. Tipado estático y colecciones inmutables.
 *  2. Interfaces para modelar entidades de la app móvil (Producto, Carrito, Cliente).
 *  3. Literal Types y Union Types para estados y métodos de pago.
 *  4. Funciones puras con validación rigurosa en tiempo de compilación.
 */

console.log("=================================================================");
console.log("🏪 EJERCICIO 04: Desafío Integrador — Tienda Móvil Salesiana");
console.log("=================================================================\n");

// ----------------------------------------------------------------------------
// 1. Modelado de Tipos e Interfaces
// ----------------------------------------------------------------------------
export type MetodoPago = "EFECTIVO" | "TRANSFERENCIA" | "TARJETA_DIGITAL";
export type EstadoPedido = "PENDIENTE" | "PAGADO" | "EN_CAMINO" | "ENTREGADO";

export interface ItemMenu {
  readonly id: string;
  nombre: string;
  descripcion: string;
  precioUnitario: number;
  categoria: "SNACKS" | "BEBIDAS" | "ALMUERZOS" | "PAPELERIA";
  disponible: boolean;
}

export interface LineaDetalle {
  producto: ItemMenu;
  cantidad: number;
  notasEspeciales?: string;
}

export interface PedidoMovil {
  readonly numeroOrden: string;
  cliente: {
    nombre: string;
    cursoParalelo: string;
    telefono?: string;
  };
  detalles: LineaDetalle[];
  metodoPago: MetodoPago;
  estado: EstadoPedido;
  fechaCreacion: Date;
}

export interface ResumenFinanciero {
  subtotal: number;
  descuentoEstudiantil: number; // 10% si subtotal >= $10
  iva15: number;
  totalPagar: number;
}

// ----------------------------------------------------------------------------
// 2. Funciones de Negocio Tipadas
// ----------------------------------------------------------------------------
/**
 * Calcula los totales financieros de un pedido aplicando reglas de negocio.
 */
export function calcularTotalesPedido(pedido: PedidoMovil): ResumenFinanciero {
  // 1. Calcular subtotal
  const subtotal = pedido.detalles.reduce((acumulado, linea) => {
    return acumulado + (linea.producto.precioUnitario * linea.cantidad);
  }, 0);

  // 2. Descuento estudiantil (10% si gasta $10 o más)
  const descuentoEstudiantil = subtotal >= 10.0 ? subtotal * 0.10 : 0;

  // 3. Base imponible neta
  const baseImponible = subtotal - descuentoEstudiantil;

  // 4. IVA 15% (Ecuador 2026)
  const iva15 = baseImponible * 0.15;

  // 5. Total a pagar
  const totalPagar = baseImponible + iva15;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    descuentoEstudiantil: Number(descuentoEstudiantil.toFixed(2)),
    iva15: Number(iva15.toFixed(2)),
    totalPagar: Number(totalPagar.toFixed(2))
  };
}

/**
 * Imprime en consola un ticket estructurado para la pantalla del celular.
 */
export function imprimirTicketDigital(pedido: PedidoMovil): void {
  const totales = calcularTotalesPedido(pedido);

  console.log("╔══════════════════════════════════════════════════════════════╗");
  console.log("║           📱 BAR SALESIANO UETS - RECIBO DIGITAL             ║");
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log(`║ Orden #: ${pedido.numeroOrden.padEnd(52)}║`);
  console.log(`║ Cliente: ${(pedido.cliente.nombre + " (" + pedido.cliente.cursoParalelo + ")").padEnd(52)}║`);
  console.log(`║ Pago:    ${pedido.metodoPago.padEnd(52)}║`);
  console.log(`║ Estado:  ${pedido.estado.padEnd(52)}║`);
  console.log("╟──────────────────────────────────────────────────────────────╢");
  console.log("║ ITEMS DEL PEDIDO:                                            ║");

  pedido.detalles.forEach((item, idx) => {
    const totalItem = (item.producto.precioUnitario * item.cantidad).toFixed(2);
    const linea = `${idx + 1}. [${item.cantidad}x] ${item.producto.nombre} - $${totalItem}`;
    console.log(`║ ${linea.padEnd(61)}║`);
    if (item.notasEspeciales) {
      console.log(`║    ↳ Nota: ${item.notasEspeciales.padEnd(51)}║`);
    }
  });

  console.log("╟──────────────────────────────────────────────────────────────╢");
  console.log(`║ Subtotal Bruto:         $${totales.subtotal.toFixed(2).padStart(34)} ║`);
  console.log(`║ Descuento Estudiantil: -$${totales.descuentoEstudiantil.toFixed(2).padStart(34)} ║`);
  console.log(`║ IVA (15%):              $${totales.iva15.toFixed(2).padStart(34)} ║`);
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log(`║ 💳 TOTAL A PAGAR:       $${totales.totalPagar.toFixed(2).padStart(34)} ║`);
  console.log("╚══════════════════════════════════════════════════════════════╝\n");
}

// ----------------------------------------------------------------------------
// 3. Caso de Prueba en Tiempo de Ejecución
// ----------------------------------------------------------------------------
const catalogoMenu: ItemMenu[] = [
  {
    id: "ITM-01",
    nombre: "Sandwich de Pollo Especial",
    descripcion: "Pan artesanal con pechuga desmenuzada y queso",
    precioUnitario: 2.50,
    categoria: "SNACKS",
    disponible: true
  },
  {
    id: "ITM-02",
    nombre: "Jugo Natural de Mora (500ml)",
    descripcion: "Fruta fresca sin azúcar añadida",
    precioUnitario: 1.25,
    categoria: "BEBIDAS",
    disponible: true
  },
  {
    id: "ITM-03",
    nombre: "Almuerzo Ejecutivo Salesiano",
    descripcion: "Sopa del día, plato fuerte tradicional y ensalada",
    precioUnitario: 3.50,
    categoria: "ALMUERZOS",
    disponible: true
  },
  {
    id: "ITM-04",
    nombre: "Cuaderno Técnico de Programación",
    descripcion: "Cuaderno universitario 100 hojas cuadros",
    precioUnitario: 1.75,
    categoria: "PAPELERIA",
    disponible: true
  }
];

const miPedidoDemo: PedidoMovil = {
  numeroOrden: "ORD-2026-0089",
  cliente: {
    nombre: "David Domínguez",
    cursoParalelo: "3° BGU Informática 'E1'",
    telefono: "0991234567"
  },
  detalles: [
    {
      producto: catalogoMenu[0]!,
      cantidad: 2,
      notasEspeciales: "Sin mayonesa"
    },
    {
      producto: catalogoMenu[1]!,
      cantidad: 2
    },
    {
      producto: catalogoMenu[2]!,
      cantidad: 1
    }
  ],
  metodoPago: "TARJETA_DIGITAL",
  estado: "PAGADO",
  fechaCreacion: new Date()
};

// Ejecución:
imprimirTicketDigital(miPedidoDemo);

console.log("✅ Desafío Integrador 04 ejecutado con total rigor y validación de tipos.\n");
