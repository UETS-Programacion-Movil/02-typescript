# Semana 02: Bases de TypeScript & Puente Pedagógico con Java ⚡📱
### Programación Móvil — 3° Bachillerato Técnico (2026–2027)

> [!IMPORTANT]
> **Modelo Evaluativo Dual MIT (10.0 Puntos Total):**
> - **Bloque A (50% · 5.0 pts):** Código fuente en GitHub con pruebas superadas (`pnpm test`), TypeScript check limpio (`pnpm run check`), commits semánticos y entrega en Pull Request.
> - **Bloque B (50% · 5.0 pts):** Video Screencast demostrativo oral (3 a 5 min) con cámara y voz explicando el modelado de datos, corriendo las pruebas en vivo y justificando las diferencias con Java.

> [!NOTE]
> **💡 Pruebas con Auto-Sync Inteligente (Cero Estrés de Rebase):**
> Al ejecutar `pnpm test`, tus suites de prueba se sincronizan automáticamente con la rama `main` del docente en segundo plano.

---

## 📺 Guía Maestra & Diapositivas en Vivo (Cloudflare Edge)

[![Ver Diapositivas en Vivo](https://img.shields.io/badge/Diapositivas_Interactivas-Ver_en_Línea-10B981?style=for-the-badge&logo=cloudflare)](https://uets-pm-portal.vgmiltonisaac.workers.dev/02-typescript/)

👉 **[Abrir Diapositivas en el Portal Oficial (Cloudflare Workers)](https://uets-pm-portal.vgmiltonisaac.workers.dev/02-typescript/)**  
👉 **[Ver Portal Principal de la Materia](https://uets-pm-portal.vgmiltonisaac.workers.dev/)**

- ⌨ **Navegación:** Teclas `[←]`, `[→]` o `[Espacio]`.
- 📺 **Pantalla Completa:** Presiona `[F]`.
- 🧠 **Quizzes Formativos:** Evaluaciones interactivas con retroalimentación instantánea.

---

## ❄️ 1. Setup Diario Anti-Deep Freeze (Obligatorio al sentarse)

```bash
# 1. Configurar tu identidad exacta de GitHub:
git config --global user.name "TU_USUARIO_GITHUB"
git config --global user.email "tu_correo_registrado@ejemplo.com"

# 2. Instalar pnpm de forma global si el sistema se congeló:
npm install -g pnpm

# 3. Comprobación rápida de versiones (Health Check):
node -v    # v20+ o v22+ LTS
git --version
pnpm -v
```

---

## 🎯 ¿Qué tienes que hacer en este taller? (Los 4 Retos)

En cada reto encontrarás un problema de desarrollo móvil con comentarios `// TODO:` para completar en `src/`:

```text
🥊 Reto 01: Tipos Primitivos, Arrays y Fichas UETS (src/01_tipos_primitivos.ts)
🥊 Reto 02: De Clases Java POO a Interfaces TypeScript (src/02_puente_java_interfaces.ts)
🥊 Reto 03: Manejador de Estados Móviles & Uniones (src/03_unions_narrowing.ts)
🥊 Reto 04: Desafío Integrador — Carrito del Bar Salesiano (src/04_desafio_integrador.ts)
```

---

## 🛠️ Comandos de Verificación Local

```bash
# 1. Instalar dependencias:
pnpm install

# 2. Probar reto por reto:
pnpm run start:01   # Reto 01: Tipos Primitivos
pnpm run start:02   # Reto 02: Interfaces y Puente Java
pnpm run start:03   # Reto 03: Estados Móviles y Uniones
pnpm run start:04   # Reto 04: Desafío Integrador Bar Salesiano

# 3. Probar TODOS los retos con Auto-Sync:
pnpm test
# (o también: pnpm run test:all)

# 4. Verificar que no existan errores de compilación:
pnpm run check
```

---

## 🚀 Flujo Git & Entrega en Pull Request

### Paso 1: Fork & Clonado
1. Haz clic en **Fork** en [`UETS-Programacion-Movil/02-typescript`](https://github.com/UETS-Programacion-Movil/02-typescript).
2. Clona **tu propio fork**:
   ```bash
   git clone https://github.com/TU_USUARIO/02-typescript.git
   cd 02-typescript
   pnpm install
   ```

### Paso 2: Crear tu Rama Personal
```bash
git checkout -b entrega/nombre-apellido
```

### Paso 3: Commits Semánticos (Conventional Commits)
```bash
git add -A
git commit -m "feat(reto-01): tipar variables y calcular promedio"
git commit -m "feat(reto-02): traducir clase java a interface perfil"
git commit -m "feat(reto-03): implementar narrowing para estados de UI"
git commit -m "feat(reto-04): completar logica de carrito del bar salesiano"
git push origin entrega/nombre-apellido
```

### Paso 4: Abrir el Pull Request
> [!WARNING]
> **⚠️ Regla Crítica de Rama para el PR:**  
> Al abrir el Pull Request en GitHub, verifica minuciosamente las ramas seleccionadas:  
> - **base repository:** `UETS-Programacion-Movil/02-typescript` · **base:** `main`  
> - **head repository:** `TU_USUARIO/02-typescript` · **compare:** `entrega/nombre-apellido`  
> *(Si dejas seleccionada la rama `main` de tu fork, GitHub dirá "There isn't anything to compare").*

### 💡 Guía de Entrega Parcial Salesiana: ¡Nunca te quedes con 0!
Si la clase termina y solo completaste 2 retos:
1. Haz `git add -A`, `git commit -m "feat: avance parcial"` y `git push origin entrega/nombre-apellido`.
2. Abre el Pull Request normalmente.
3. Graba tu Video Screencast oral explicando con honestidad hasta dónde avanzaste para rescatar los **5.00 puntos orales completos**.

---

## 📹 Video Screencast Demostrativo (Bloque B · 5.0 pts)

Graba un video de **3 a 5 minutos** (Loom / YouTube No Listado / Google Drive):
1. **0:00 - 0:45:** Cámara con tu rostro visible. Di tu nombre completo y paralelo (`3E1` o `3E2`).
2. **0:45 - 2:00:** Muestra tu editor VS Code y explica una de las `interfaces` creadas y por qué usaste `readonly` o `?`.
3. **2:00 - 3:15:** Muestra tu terminal ejecutando `pnpm test` con todos los tests pasando en verde.
4. **3:15 - 4:15:** Explica en tus palabras una diferencia conceptual clave entre Java y TypeScript (ej. *Tipado Nominal* vs *Tipado Estructural*).
5. **Entrega:** Pega el enlace del video en el Pull Request.

---

## ⚖️ Rúbrica de Calificación Dual MIT (10.0 Puntos Total)

| Bloque Evaluativo | Criterio de Logro | Ponderación |
| :--- | :--- | :---: |
| **Bloque A: Pull Request en GitHub (50%)** | • 4 Retos completados pasando tests con `pnpm test` (4.0 pts)<br>• Cero errores de tipos con `pnpm run check` (0.5 pts)<br>• Commits semánticos y entrega en PR (0.5 pts) | **5.0 pts** |
| **Bloque B: Screencast Demostrativo (50%)** | • Justificación técnica del puente Java vs TypeScript (2.5 pts)<br>• Demostración en vivo en terminal (1.5 pts)<br>• Calidad audiovisual y enlace válido en PR (1.0 pt) | **5.0 pts** |
| **CALIFICACIÓN TOTAL** | **Suma Consolidada** | **10.0 pts** |

---

*Módulo Formativo: Aplicaciones Web y Móviles (Programación Móvil) — Unidad Educativa Técnico Salesiano (UETS) 2026–2027.*
