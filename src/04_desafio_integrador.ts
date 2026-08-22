/**
 * ============================================================================
 * 🥊 RETO 04: Desafío Integrador — Catálogo & Carrito Móvil Bar Salesiano
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 📖 CONTEXTO / MISIÓN (BASE PARA EL SCREENCAST):
 * Este reto simula el motor de compras y facturación para la futura app móvil
 * del Bar Salesiano de la UETS.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Revisa las interfaces de datos del pedido y catálogo.
 * 2. Implementa la función `calcularTotalesPedido` aplicando la regla de negocio
 *    (descuento estudiantil del 10% si el subtotal es >= $10.00, IVA del 15%).
 * 3. Ejecuta en tu terminal: `pnpm run start:04` para verificar los tests y
 *    ver tu ticket digital impreso en pantalla.
 */

console.log("=================================================================");
console.log("🏪 EJECUTANDO PRUEBAS: RETO 04 — Desafío Integrador Bar Salesiano");
console.log("=================================================================\n");

// ============================================================================
// 1. Modelos e Interfaces de la App Móvil
// ============================================================================
export type MetodoPago = "EFECTIVO" | "TRANSFERENCIA" | "TARJETA_DIGITAL";
export type EstadoPedido = "PENDIENTE" | "PAGADO" | "EN_CAMINO" | "ENTREGADO";

export interface ItemMenu {
  readonly id: string;
  nombre: string;
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
  };
  detalles: LineaDetalle[];
  metodoPago: MetodoPago;
  estado: EstadoPedido;
}

export interface ResumenFinanciero {
  subtotal: number;
  descuentoEstudiantil: number; // 10% si subtotal >= $10.00
  iva15: number;                // 15% sobre la base imponible neta
  totalPagar: number;           // baseImponible + iva15
}

// ============================================================================
// 2. Función de Lógica Financiera
// ============================================================================
/**
 * TODO: Implementa `calcularTotalesPedido`.
 * Reglas:
 * 1. Calcular el `subtotal` sumando (precioUnitario * cantidad) de cada línea de detalle.
 * 2. `descuentoEstudiantil`: Si `subtotal >= 10.0`, aplicar el 10% (subtotal * 0.10). Si no, 0.
 * 3. `baseImponible`: subtotal - descuentoEstudiantil.
 * 4. `iva15`: baseImponible * 0.15.
 * 5. `totalPagar`: baseImponible + iva15.
 * Todos los campos deben ser number redondeados a 2 decimales.
 */
export function calcularTotalesPedido(pedido: PedidoMovil): ResumenFinanciero {
  const subtotal = pedido.detalles.reduce((acumulado, linea) => {
    return acumulado + (linea.producto.precioUnitario * linea.cantidad);
  }, 0);

  const descuentoEstudiantil = subtotal >= 10.0 ? subtotal * 0.10 : 0;
  const baseImponible = subtotal - descuentoEstudiantil;
  const iva15 = baseImponible * 0.15;
  const totalPagar = baseImponible + iva15;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    descuentoEstudiantil: Number(descuentoEstudiantil.toFixed(2)),
    iva15: Number(iva15.toFixed(2)),
    totalPagar: Number(totalPagar.toFixed(2))
  };
}

/**
 * Función visual para imprimir el ticket en consola
 */
export function imprimirTicketDigital(pedido: PedidoMovil): void {
  const totales = calcularTotalesPedido(pedido);

  console.log("╔══════════════════════════════════════════════════════════════╗");
  console.log("║           📱 BAR SALESIANO UETS - RECIBO DIGITAL             ║");
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log(`║ Orden #: ${pedido.numeroOrden.padEnd(52)}║`);
  console.log(`║ Cliente: ${(pedido.cliente.nombre + " (" + pedido.cliente.cursoParalelo + ")").padEnd(52)}║`);
  console.log(`║ Pago:    ${pedido.metodoPago.padEnd(52)}║`);
  console.log("╟──────────────────────────────────────────────────────────────╢");
  console.log("║ ITEMS DEL PEDIDO:                                            ║");

  pedido.detalles.forEach((item, idx) => {
    const totalItem = (item.producto.precioUnitario * item.cantidad).toFixed(2);
    const linea = `${idx + 1}. [${item.cantidad}x] ${item.producto.nombre} - $${totalItem}`;
    console.log(`║ ${linea.padEnd(61)}║`);
  });

  console.log("╟──────────────────────────────────────────────────────────────╢");
  console.log(`║ Subtotal:               $${totales.subtotal.toFixed(2).padStart(35)} ║`);
  console.log(`║ Descuento Estudiantil: -$${totales.descuentoEstudiantil.toFixed(2).padStart(35)} ║`);
  console.log(`║ IVA (15%):              $${totales.iva15.toFixed(2).padStart(35)} ║`);
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log(`║ 💳 TOTAL A PAGAR:       $${totales.totalPagar.toFixed(2).padStart(35)} ║`);
  console.log("╚══════════════════════════════════════════════════════════════╝\n");
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

const pedidoPruebaMenor10: PedidoMovil = {
  numeroOrden: "ORD-001",
  cliente: { nombre: "Juan Pérez", cursoParalelo: "3 BGU E1" },
  metodoPago: "EFECTIVO",
  estado: "PAGADO",
  detalles: [
    {
      producto: { id: "1", nombre: "Sandwich", precioUnitario: 2.50, categoria: "SNACKS", disponible: true },
      cantidad: 2 // 5.00 total
    }
  ]
};

const totales1 = calcularTotalesPedido(pedidoPruebaMenor10);
assert(totales1.subtotal === 5.00, "Subtotal calculado: $5.00");
assert(totales1.descuentoEstudiantil === 0.00, "Sin descuento para compras menores a $10.00");
assert(totales1.iva15 === 0.75, "IVA 15% de $5.00 es $0.75");
assert(totales1.totalPagar === 5.75, "Total a pagar: $5.75");

const pedidoPruebaMayor10: PedidoMovil = {
  numeroOrden: "ORD-002",
  cliente: { nombre: "Ana Morales", cursoParalelo: "3 BGU E2" },
  metodoPago: "TARJETA_DIGITAL",
  estado: "PAGADO",
  detalles: [
    {
      producto: { id: "2", nombre: "Almuerzo", precioUnitario: 3.50, categoria: "ALMUERZOS", disponible: true },
      cantidad: 3 // 10.50 subtotal -> Descuento 10% = 1.05 -> Base = 9.45 -> IVA 15% = 1.42 -> Total = 10.87
    }
  ]
};

const totales2 = calcularTotalesPedido(pedidoPruebaMayor10);
assert(totales2.subtotal === 10.50, "Subtotal calculado: $10.50");
assert(totales2.descuentoEstudiantil === 1.05, "Descuento 10% aplicado para compras >= $10.00 ($1.05)");
assert(totales2.totalPagar === 10.87, "Total final con IVA 15%: $10.87");

// Imprimir recibo visual en terminal:
imprimirTicketDigital(pedidoPruebaMayor10);

console.log("-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Has completado el Reto 04 (Desafío Integrador).");
  console.log("🚀 Todos los retos del taller han sido superados.");
  console.log("👉 Ahora ejecuta 'pnpm run check' para confirmar que no hay errores de tipos.\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Corrige tu código y vuelve a ejecutar.`);
  process.exit(1);
}
