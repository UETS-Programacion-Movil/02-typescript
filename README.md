# Semana 02: Bases de TypeScript & Puente Pedagógico con Java ⚡📱
### Programación Móvil — 3° Bachillerato Técnico (2026–2027)

> [!INFO] Repositorio de Aprendizaje & Taller Práctico con Autograding
> **Institución:** Unidad Educativa Técnico Salesiano (UETS)  
> **Organización:** [UETS-Programacion-Movil](https://github.com/UETS-Programacion-Movil)  
> **Docente Elaborador:** Ing. Milton Velásquez  
> **Ponderación Evaluativa:** Metodología Dual MIT (50% Código en GitHub con Pull Request / 50% Video Screencast de 3 min)

---

## 🌟 Diapositivas Interactivas en Vivo

Puedes acceder a la presentación interactiva proyectable (desarrollada con estética Neo-Brutalista *Creative Mode* y sin dependencias) directamente desde tu navegador:

👉 **[Ver Presentación Web 16:9 en Vivo](https://uets-programacion-movil.github.io/semana-02-typescript/)** *(o abre `index.html` localmente)*.

- ⌨ **Navegación:** Teclas `[←]` `[→]` o `[Espacio]`.
- 📺 **Pantalla Completa:** Presiona `[F]`.
- 🧠 **Quizzes Interactivos:** Evaluaciones formativas en vivo con retroalimentación instantánea.
- 📖 **Explicación de Retos & Git:** Diapositivas 9 a 16 con el tutorial paso a paso.

---

## 🎯 ¿Qué tienes que hacer en este taller? (Paso a Paso)

El taller está compuesto por **4 Retos Prácticos**. En cada reto encontrarás un problema de desarrollo móvil, código con comentarios `// TODO:` para completar y un evaluador interactivo en terminal que te dirá en tiempo real si tus respuestas son correctas.

```text
🥊 Reto 01: Tipos Primitivos, Arrays y Fichas UETS (src/01_tipos_primitivos.ts)
🥊 Reto 02: De Clases Java POO a Interfaces TypeScript (src/02_puente_java_interfaces.ts)
🥊 Reto 03: Manejador de Estados Móviles & Uniones (src/03_unions_narrowing.ts)
🥊 Reto 04: Desafío Integrador — Carrito del Bar Salesiano (src/04_desafio_integrador.ts)
```

---

## 🚀 Guía de Git y Flujo de Trabajo para Principiantes

### Paso 1: Clonar el Repositorio
Abre tu terminal en tu carpeta de proyectos y ejecuta:
```bash
git clone https://github.com/UETS-Programacion-Movil/semana-02-typescript.git
cd semana-02-typescript
```

### Paso 2: Instalar Dependencias
```bash
pnpm install
```

### Paso 3: Crear tu Rama de Trabajo Personal (¡NUNCA trabajes en `main`!)
Crea una rama con tu nombre y apellido:
```bash
# Ejemplo: si te llamas Mateo Vintimilla:
git checkout -b entrega/mateo-vintimilla
```

### Paso 4: Resolver los 4 Retos en VS Code
Abre los archivos en la carpeta `src/` y resuelve los bloques `// TODO:`. Puedes probar cada reto ejecutando:
```bash
# Probar el Reto 1:
pnpm run start:01

# Probar el Reto 2:
pnpm run start:02

# Probar el Reto 3:
pnpm run start:03

# Probar el Reto 4:
pnpm run start:04

# Probar TODOS los retos de una sola vez:
pnpm run test:all
```

### Paso 5: Verificar que no existan errores de compilación
Antes de subir tu tarea, corre:
```bash
pnpm run check
```
*(Debe terminar con 0 errores).*

### Paso 6: Guardar tus Cambios con Commits Semánticos
Usa mensajes claros siguiendo el estándar **Conventional Commits**:
```bash
git add .
git commit -m "feat(reto-01): tipar variables y calcular promedio"
git commit -m "feat(reto-02): traducir clase java a interface perfil"
git commit -m "feat(reto-03): implementar narrowing para estados de UI"
git commit -m "feat(reto-04): completar logica de carrito del bar salesiano"
```

### Paso 7: Subir tu Rama a GitHub
```bash
git push origin entrega/tu-nombre-apellido
```

### Paso 8: Abrir tu Pull Request (PR)
1. Ve al repositorio en GitHub: [UETS-Programacion-Movil/semana-02-typescript](https://github.com/UETS-Programacion-Movil/semana-02-typescript).
2. Verás un botón verde que dice **"Compare & pull request"**.
3. Ponle de título: `Entrega Semana 2 - Tu Nombre y Apellido`.
4. En la descripción se cargará la plantilla oficial: escribe tu nombre, tu paralelo y el **enlace de tu video Screencast**.
5. Haz clic en **"Create pull request"**.
6. **🤖 ¡Mira la magia del Bot!** En menos de 1 minuto el bot de la UETS revisará tu código y comentará en tu PR tu calificación preliminar del **Bloque A (5.0 / 5.0 pts)**.

---

## 📹 Grabación del Screencast (Bloque B · 5.0 pts)

Graba un video de máximo **3:00 minutos** (usando [Loom.com](https://www.loom.com/), OBS o Clipchamp):
1. **0:00 - 0:30:** Muestra tu rostro en cámara y preséntate (Nombre y Paralelo).
2. **0:30 - 1:30:** Muestra tu editor VS Code y explica una de las `interfaces` que creaste y por qué usaste `readonly` o `?`.
3. **1:30 - 2:30:** Muestra tu terminal corriendo `pnpm run test:all` con todos los tests pasando en verde.
4. **2:30 - 3:00:** Explica en tus palabras una diferencia conceptual clave entre **Java** y **TypeScript** (ej. *Duck Typing* vs *Tipado Nominal*).

Pega el enlace público del video en la descripción de tu **Pull Request**.

---

## ⚖️ Rúbrica de Calificación Dual MIT (10.0 Puntos Total)

| Bloque Evaluativo | Criterio de Logro | Ponderación |
| :--- | :--- | :---: |
| **Bloque A: Pull Request en GitHub (50%)** | • 4 Retos completados y pasando tests (4.0 pts)<br>• Cero errores de tipos con `pnpm run check` (0.5 pts)<br>• Commits semánticos y Pull Request ordenado (0.5 pts) | **5.0 pts** |
| **Bloque B: Screencast Demostrativo (50%)** | • Justificación técnica del puente Java vs TypeScript (2.5 pts)<br>• Demostración en vivo en terminal con `tsx` (1.5 pts)<br>• Calidad de audio/video y enlace en PR (1.0 pt) | **5.0 pts** |
| **CALIFICACIÓN TOTAL** | **Suma Consolidada** | **10.0 pts** |

---
*Repositorio oficial de la Semana 02 — Módulo de Programación Móvil — Unidad Educativa Técnico Salesiano (UETS).*
