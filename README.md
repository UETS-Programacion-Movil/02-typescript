# Semana 02: Bases de TypeScript & Puente Pedagógico con Java ⚡📱
### Programación Móvil — 3° Bachillerato Técnico (2026–2027)

> [!INFO] Repositorio de Aprendizaje & Taller Práctico
> **Institución:** Unidad Educativa Técnico Salesiano (UETS)  
> **Organización:** [UETS-Programacion-Movil](https://github.com/UETS-Programacion-Movil)  
> **Docente Elaborador:** Ing. Milton Velásquez  
> **Unidad de Trabajo:** [[PUT-1]] Actividad 2: Bases de TypeScript (6 Períodos)  
> **Ponderación:** Metodología Dual MIT (50% Código en GitHub / 50% Video Screencast de 3 min)

---

## 🌟 Diapositivas Interactivas en Vivo

Puedes acceder a la presentación interactiva proyectable (desarrollada con estética Neo-Brutalista *Creative Mode* y sin dependencias) directamente desde tu navegador:

👉 **[Ver Presentación Web 16:9 en Vivo](https://uets-programacion-movil.github.io/semana-02-typescript/)** *(o abre `index.html` localmente)*.

- ⌨ **Navegación:** Teclas `[←]` `[→]` o `[Espacio]`.
- 📺 **Pantalla Completa:** Presiona `[F]`.
- 🧠 **Quizzes Interactivos:** Evaluaciones formativas en vivo con retroalimentación instantánea.

---

## 🎯 Objetivos de la Semana

1. **Dominar el Tipado Estático:** Comprender cómo TypeScript previene errores en tiempo de ejecución (`undefined is not a function`) antes de publicar el APK móvil.
2. **Transferir Conceptos desde Java:** Cruzar los conocimientos de POO (tipos, clases DTO, contratos con interfaces) hacia la sintaxis ágil de TypeScript.
3. **Modelar Interfaces y Estados:** Definir estructuras con `interface`, `readonly`, opcionales (`?`) y uniones para pantallas de React Native.
4. **Ejecutar con `tsx`:** Correr código TypeScript al instante en la terminal y comprobar cero errores con `pnpm run check`.
5. **Defensa Técnica Dual MIT:** Grabar y publicar una demostración en video de 3 minutos.

---

## 🚀 Inicio Rápido (Instrucciones para el Estudiante)

### 1. Clonar el Repositorio
```bash
git clone https://github.com/UETS-Programacion-Movil/semana-02-typescript.git
cd semana-02-typescript
```

### 2. Instalar Dependencias
```bash
pnpm install
```

### 3. Ejecutar los Ejercicios Prácticos con `tsx`
```bash
# Ejercicio 1: Tipos primitivos, arrays y funciones
pnpm run start:01

# Ejercicio 2: Puente Java POO a Interfaces TypeScript
pnpm run start:02

# Ejercicio 3: Union Types y Discriminated Unions para UI móvil
pnpm run start:03

# Ejercicio 4: Desafío Integrador (Tienda y Carrito Móvil)
pnpm run start:04
```

### 4. Validar Cero Errores de Tipado
```bash
pnpm run check
```

---

## 📁 Estructura del Proyecto

```text
semana-02-typescript/
├── index.html                        # 🌟 Presentación interactiva 16:9 (Creative Mode)
├── GUIA_DOCENTE_SEMANA_02.md         # Plan de clase docente DUA (6 períodos, analogías y solucionario)
├── CHEATSHEET_ESTUDIANTE.md          # Tabla comparativa sintáctica Java vs TypeScript
├── ANEXO_ACTIVIDAD_2_TS_JAVA.html    # Formato institucional UETS (A4 Full-Bleed)
├── render_pdf.js                     # Script Puppeteer para compilar el PDF oficial
├── img/                              # Recursos gráficos y firmas oficiales
└── src/
    ├── 01_tipos_primitivos.ts        # Reto 1: Primitivos, arrays y funciones tipadas
    ├── 02_puente_java_interfaces.ts  # Reto 2: De clases Java POO a interfaces TS
    ├── 03_unions_narrowing.ts        # Reto 3: Union types y manejo de estados móviles
    └── 04_desafio_integrador.ts      # Reto 4: Catálogo y carrito de la cafetería escolar
```

---

## 📹 Entrega y Defensa Técnica MIT (Screencast de 3 min)

Pega aquí el enlace público de tu video demostrativo (Loom, YouTube no listado, Drive):

- **Nombre del Estudiante:** `___________________________________`
- **Paralelo:** `3° BGU Informática 'E1' / 'E2'`
- **Enlace al Screencast:** `https://loom.com/share/...`
- **Duración del Video:** `____:____ (Máximo 3:00 min)`

### Puntos que debes abordar en tu video:
1. Muestra tu rostro y tu editor VS Code en pantalla.
2. Explica una `interface` creada y por qué se usó `readonly` o `?`.
3. Ejecuta `pnpm run start:04` en terminal demostrando la salida formateada del ticket.
4. Explica en 30 segundos una diferencia conceptual clave entre **Java** y **TypeScript** (ej. *Duck Typing vs Tipado Nominal*).

---

## ⚖️ Rúbrica de Evaluación (10 Puntos Total)

| Bloque Evaluativo | Criterio de Logro | Ponderación |
| :--- | :--- | :---: |
| **Bloque A: Repositorio GitHub (50%)** | Modelado estricto de interfaces, cero uso de `any`, `pnpm run check` con 0 errores y commits claros en Git. | **5.0 pts** |
| **Bloque B: Screencast Técnico (50%)** | Justificación del puente Java $\leftrightarrow$ TS, fluidez verbal, ejecución en vivo con `tsx` y enlace funcional. | **5.0 pts** |
| **Total de la Actividad** | **Suma consolidada (Escala sobre 10.0)** | **10.0 pts** |

---
*Repositorio oficial de la Semana 02 — Módulo de Programación Móvil — Unidad Educativa Técnico Salesiano (UETS).*
