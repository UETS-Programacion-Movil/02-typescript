import {
  calcularTotalesPedido,
  imprimirTicketDigital,
  type PedidoMovil
} from "../src/04_desafio_integrador.js";

console.log("=================================================================");
console.log("🏪 EJECUTANDO PRUEBAS: RETO 04 — Desafío Integrador Bar Salesiano");
console.log("=================================================================\n");

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
assert(totales1.subtotal === 5.00, "Subtotal calculado correctamente: $5.00", "Suma precioUnitario * cantidad en src/04_desafio_integrador.ts");
assert(totales1.descuentoEstudiantil === 0.00, "Sin descuento para compras menores a $10.00");
assert(totales1.iva15 === 0.75, "IVA 15% de $5.00 es $0.75", "baseImponible * 0.15");
assert(totales1.totalPagar === 5.75, "Total a pagar: $5.75", "baseImponible + iva15");

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
assert(totales2.subtotal === 10.50, "Subtotal calculado correctamente: $10.50");
assert(totales2.descuentoEstudiantil === 1.05, "Descuento 10% aplicado para compras >= $10.00 ($1.05)", "subtotal * 0.10");
assert(totales2.totalPagar === 10.87, "Total final con IVA 15%: $10.87");

// Imprimir recibo visual en terminal si hay datos:
if (totales2.totalPagar > 0) {
  imprimirTicketDigital(pedidoPruebaMayor10);
}

console.log("-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Has completado el Reto 04 (Desafío Integrador).");
  console.log("🚀 Todos los retos del taller han sido superados.");
  console.log("👉 Ahora ejecuta 'pnpm run check' para confirmar que no hay errores de tipos.\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Completa tu código en src/04_desafio_integrador.ts y vuelve a ejecutar.`);
  process.exit(1);
}
