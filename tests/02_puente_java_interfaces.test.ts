import {
  usuarioEjemplo,
  formatearPerfilUsuario,
  calcularPrecioFinal,
  type ProductoItem
} from "../src/02_puente_java_interfaces.js";

console.log("=================================================================");
console.log("🥊 EJECUTANDO PRUEBAS: RETO 02 — Interfaces & Puente Java");
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

const perfilFormateado = formatearPerfilUsuario(usuarioEjemplo);
if (perfilFormateado && perfilFormateado.length > 0) {
  console.log("┌────────────────────────────────────────────────────────┐");
  console.log("│ 📱 PERFIL DE USUARIO FORMATEADO EN CONSOLA             │");
  console.log(`│ ${perfilFormateado.padEnd(54)} │`);
  console.log("└────────────────────────────────────────────────────────┘\n");
}

console.log("🔍 Verificando Paso 1: Interface PerfilUsuario...");
assert(typeof usuarioEjemplo.id === "string" && usuarioEjemplo.id.length > 0, "usuarioEjemplo tiene un id tipo string válido");
assert(typeof usuarioEjemplo.nombreCompleto === "string" && usuarioEjemplo.nombreCompleto.length > 0, "usuarioEjemplo tiene nombreCompleto", "Asigna tu nombre en usuarioEjemplo.nombreCompleto en src/02_puente_java_interfaces.ts");
assert(typeof usuarioEjemplo.correo === "string" && usuarioEjemplo.correo.includes("@"), "usuarioEjemplo tiene correo válido");
assert(
  usuarioEjemplo.rol === "ADMIN" || usuarioEjemplo.rol === "DOCENTE" || usuarioEjemplo.rol === "ESTUDIANTE",
  "usuarioEjemplo tiene un rol válido del union type"
);
assert(
  Boolean(perfilFormateado && perfilFormateado.includes("[PERFIL]") && perfilFormateado.includes(usuarioEjemplo.id)),
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
