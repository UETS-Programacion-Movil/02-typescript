import {
  formatearIdentificador,
  renderizarEstadoUI,
  type EstadoPantalla
} from "../src/03_unions_narrowing.js";

console.log("=================================================================");
console.log("🥊 EJECUTANDO PRUEBAS: RETO 03 — Estados Móviles & Uniones");
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

console.log("🔍 Verificando Paso 1: formatearIdentificador()...");
assert(
  formatearIdentificador("usr-uets-99") === "ID-ALFANUMERICO-USR-UETS-99",
  "String formateado a mayúsculas correctamente",
  "Usa if (typeof id === 'string') y .toUpperCase() en src/03_unions_narrowing.ts"
);
assert(
  formatearIdentificador(45) === "ID-NUMERICO-#000045",
  "Number formateado a 6 dígitos con padStart",
  "Usa else con `ID-NUMERICO-#${id.toFixed(0).padStart(6, '0')}`"
);

console.log("\n🔍 Verificando Paso 2: renderizarEstadoUI() con Discriminated Unions...");
const estadoLoad: EstadoPantalla<string> = { status: "LOADING", porcentaje: 50 };
assert(
  renderizarEstadoUI(estadoLoad) === "⏳ Cargando datos (50%)...",
  "Estado LOADING renderizado correctamente",
  "Maneja case 'LOADING': return `⏳ Cargando datos (${estado.porcentaje}%)...`"
);

const estadoSuccess: EstadoPantalla<string[]> = { status: "SUCCESS", datos: ["A", "B"], hora: "10:30" };
assert(
  renderizarEstadoUI(estadoSuccess) === "🎉 Datos cargados con éxito a las 10:30",
  "Estado SUCCESS renderizado correctamente",
  "Maneja case 'SUCCESS': return `🎉 Datos cargados con éxito a las ${estado.hora}`"
);

const estadoErr: EstadoPantalla<null> = { status: "ERROR", codigo: 404, mensaje: "No encontrado" };
assert(
  renderizarEstadoUI(estadoErr) === "❌ Error 404: No encontrado",
  "Estado ERROR renderizado correctamente",
  "Maneja case 'ERROR': return `❌ Error ${estado.codigo}: ${estado.mensaje}`"
);

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Has completado el Reto 03 con 100% de éxito.");
  console.log("👉 Avanza al Reto 04 ejecutando: pnpm run start:04\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Completa tu código en src/03_unions_narrowing.ts y vuelve a ejecutar.`);
  process.exit(1);
}
