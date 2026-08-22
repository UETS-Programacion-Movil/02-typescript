# Guía Pedagógica Docente — Semana 2: Bases de TypeScript & Puente con Java

> [!INFO] Datos Informativos y Curriculares
> - **Institución:** Unidad Educativa Técnico Salesiano (UETS)
> - **Módulo:** Aplicaciones Web y Móviles (Programación Móvil) — 3° Bachillerato Técnico
> - **Docente:** Ing. Milton Velásquez
> - **Unidad de Trabajo:** UT1 — Fundamentos, TypeScript & Setup Expo (Actividad 2)
> - **Carga Horaria:** 6 Períodos Académicos (45 min c/u)
> - **Metodología Didáctica:** Diseño Universal para el Aprendizaje (DUA) + Modelo Evaluativo Dual MIT

---

## 🎯 1. Objetivos de Aprendizaje

Al finalizar la Semana 2, el estudiante será capaz de:
1. **Diferenciar** el tipado estático en tiempo de desarrollo de TypeScript frente al dinamismo de JavaScript vanilla.
2. **Transferir** los conceptos de Programación Orientada a Objetos de Java (tipado de variables, contratos con interfaces, métodos) hacia la sintaxis concisa de TypeScript.
3. **Modelar** estructuras de datos e interfaces para pantallas móviles (`interface`, `type`, `readonly`, optional `?`, union types).
4. **Ejecutar y validar** código TypeScript localmente utilizando `tsx` y el compilador `tsc --noEmit`.
5. **Defender oralmente** mediante un Screencast de 3 minutos las decisiones técnicas y el funcionamiento de su código.

---

## 🗓️ 2. Plan de Clase Detallado (6 Períodos DUA)

### ⏱️ Períodos 1 y 2: De Java a TypeScript (Anticipación & Motivación)
- **Fase de Anticipación (20 min):**
  - Proyectar la presentación interactiva (`index.html` — Slides 1 a 3).
  - Demostración en vivo en terminal: Ejecutar un script JavaScript donde se produce el clásico error `TypeError: Cannot read properties of undefined` y contrastarlo inmediatamente con la alerta roja del analizador de TypeScript.
  - Explicar el concepto de **Type Erasure**: *TypeScript protege en tiempo de desarrollo y desaparece en runtime para que la app corra rápido en el teléfono.*
- **Conceptualización Inicial (40 min):**
  - Slides 4 y 5: Comparativa sintáctica Java vs TypeScript.
  - Tipos primitivos: ¿Por qué en TS no hay `int` o `double` separados sino `number`?
  - Arrays tipados (`string[]`) e inmutabilidad con `readonly`.
- **Cierre del Bloque (30 min):**
  - Resolver en vivo el primer ejercicio guiado: `pnpm run start:01`.

---

### ⏱️ Períodos 3 y 4: Interfaces, Duck Typing y Uniones (Conceptualización Profunda)
- **Conceptualización Guiada (45 min):**
  - Slides 6 a 9 de la presentación interactiva.
  - **El gran salto POO:** De 30 líneas de clase Java (getters/setters) a 6 líneas de `interface` en TypeScript.
  - Explicar **Tipado Estructural ("Duck Typing")**: Si dos objetos tienen los mismos campos requeridos, TypeScript los considera compatibles.
  - **Union Types:** Modelado de estados de carga móvil (`"LOADING" | "SUCCESS" | "ERROR"`).
  - Destructuración de objetos (`const { nombre, precio } = producto`) para preparar a los estudiantes para los props de React Native.
- **Evaluación Formativa Interactiva (25 min):**
  - Slides 10 y 11: Realizar los **Quizzes Interactivos en Vivo** pidiendo a los estudiantes que voten a mano alzada o desde sus pantallas antes de mostrar la justificación.
- **Práctica Guiada (20 min):**
  - Ejecutar y analizar `pnpm run start:02` y `pnpm run start:03`.

---

### ⏱️ Períodos 5 y 6: Taller Hands-On & Grabación Screencast (Aplicación Autónoma)
- **Fase de Aplicación (55 min):**
  - Los estudiantes abren su repositorio local en VS Code.
  - Resuelven el desafío integrador en `src/04_desafio_integrador.ts` (Sistema de órdenes para el Bar Salesiano).
  - Verifican que no existan errores ejecutando `pnpm run check`.
- **Defensa Técnica y Cierre MIT (35 min):**
  - Los estudiantes graban su Screencast técnico de 3 minutos (usando Loom, OBS o Clipchamp) donde:
    1. Muestran su rostro y su editor VS Code.
    2. Explican una interface y una función con retorno tipado.
    3. Ejecutan el script en terminal con `pnpm run start:04`.
    4. Explican en 30 segundos una diferencia clave entre Java y TypeScript.
  - Suben los cambios a su repositorio de GitHub y pegan el enlace del video en el `README.md`.

---

## ❓ 3. Preguntas Frecuentes y Errores Típicos de Alumnos que vienen de Java

| Pregunta / Duda del Estudiante | Explicación Pedagógica Recomendada |
| :--- | :--- |
| **"¿Por qué no uso `new` para crear un objeto a partir de una `interface`?"** | En TypeScript, las interfaces no son clases ejecutables. Son **contratos de tipo**. El objeto se crea directamente como un literal `{ ... }` y el compilador valida que cumpla el contrato. |
| **"¿Dónde está el archivo compilado `.class`?"** | En TypeScript el compilador `tsc` genera archivos JavaScript estándar `.js` (o en desarrollo usamos `tsx` que compila en memoria al instante). |
| **"¿Puedo usar `any` si me da un error de tipos?"** | ¡No! `any` desactiva el cerebro de TypeScript. Si no sabes el tipo exacto, usa `unknown` y valida con `typeof` o modela una `interface` adecuada. |
| **"¿Cuál es la diferencia entre `type` e `interface`?"** | Como regla general: usa `interface` para modelar objetos/entidades de datos y `type` para uniones (`"A" \| "B"`), primitivos o funciones específicas. |

---

## 📊 4. Rúbrica de Calificación Dual MIT (10 Puntos)

```text
┌─────────────────────────────────────────────────────────────┬────────┐
│ CRITERIO DE EVALUACIÓN                                      │ PUNTOS │
├─────────────────────────────────────────────────────────────┼────────┤
│ BLOQUE A: CÓDIGO FUENTE EN GITHUB                           │  5.0   │
│  - Tipado Estricto (cero any, uso de interfaces y uniones)  │ (2.5)  │
│  - Resolución de los 4 retos (pnpm run check limpio)        │ (1.5)  │
│  - Commits claros en Git y arquitectura ordenada            │ (1.0)  │
├─────────────────────────────────────────────────────────────┼────────┤
│ BLOQUE B: SCREENCAST DEMOSTRATIVO (3 MIN)                   │  5.0   │
│  - Explicación del puente de conceptos Java vs TypeScript   │ (2.5)  │
│  - Demostración de ejecución en vivo en terminal con tsx    │ (1.5)  │
│  - Calidad de audio/video y enlace en README.md             │ (1.0)  │
├─────────────────────────────────────────────────────────────┼────────┤
│ TOTAL DE LA ACTIVIDAD PRÁCTICA                              │  10.0  │
└─────────────────────────────────────────────────────────────┴────────┘
```
