import { execSync } from 'node:child_process';
import path from 'node:path';

const REPO_RAW_BASE = 'https://raw.githubusercontent.com/UETS-Programacion-Movil/02-typescript/main/tests';
const TEST_FILES = [
  '01_tipos_primitivos.test.ts',
  '02_puente_java_interfaces.test.ts',
  '03_unions_narrowing.test.ts',
  '04_desafio_integrador.test.ts'
];

async function syncTests() {
  const fs = await import('node:fs');
  const https = await import('node:https');

  for (const file of TEST_FILES) {
    const localPath = path.resolve(process.cwd(), 'tests', file);
    const remoteUrl = `${REPO_RAW_BASE}/${file}`;

    try {
      await new Promise<void>((resolve, reject) => {
        const req = https.get(remoteUrl, { timeout: 3000 }, (res) => {
          if (res.statusCode === 200) {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
              if (data && data.length > 50) {
                fs.writeFileSync(localPath, data, 'utf-8');
              }
              resolve();
            });
          } else {
            resolve();
          }
        });
        req.on('error', () => resolve());
        req.on('timeout', () => { req.destroy(); resolve(); });
      });
    } catch {
      // Si no hay conexión o falla, continúa con los tests locales
    }
  }
}

async function runAll() {
  console.log('\n🔄 Sincronizando pruebas con el repositorio oficial...\n');
  await syncTests();

  console.log('======================================================================');
  console.log('🎓 PROGRAMACIÓN MÓVIL (3° BGU) — EVALUACIÓN SEMANA 02: TYPESCRIPT');
  console.log('======================================================================\n');

  let passed = 0;
  const results: Array<{ id: string; name: string; ok: boolean }> = [];

  for (let i = 0; i < TEST_FILES.length; i++) {
    const file = TEST_FILES[i];
    const testPath = path.resolve(process.cwd(), 'tests', file);
    const testId = `RETO 0${i + 1}`;

    try {
      execSync(`npx tsx "${testPath}"`, { stdio: 'inherit' });
      results.push({ id: testId, name: file, ok: true });
      passed++;
    } catch {
      results.push({ id: testId, name: file, ok: false });
    }
    console.log('\n----------------------------------------------------------------------\n');
  }

  console.log('======================================================================');
  console.log(`📊 RESUMEN CONSOLIDADO: ${passed} / ${TEST_FILES.length} RETOS APROBADOS`);
  console.log(`🏆 PUNTAJE EN CÓDIGO (BLOQUE A): ${(passed * 1.0).toFixed(2)} / 4.00 PUNTOS (+1.0 pt Typecheck & Commits)`);
  console.log('======================================================================\n');

  if (passed === TEST_FILES.length) {
    console.log('🎉 ¡Excelente trabajo! Todos los retos prácticos han sido aprobados con éxito.');
    console.log('📹 Siguiente paso: Graba tu Screencast oral de 3 a 5 min y abre tu Pull Request.\n');
    process.exit(0);
  } else {
    console.log('⚠️ Revisa las pistas formativas anteriores y vuelve a ejecutar pnpm test.\n');
    process.exit(1);
  }
}

runAll();
