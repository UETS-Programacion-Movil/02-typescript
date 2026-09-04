# ⚡ Cheatsheet: De Java a TypeScript para Móviles
### Guía Rápida de Sintaxis, Comandos y Flujo de Entrega — 3° BGU Informática (UETS)

---

## ❄️ 0. Setup Diario Anti-Deep Freeze (Obligatorio)

```bash
# 1. Configurar identidad Git:
git config --global user.name "TU_USUARIO_GITHUB"
git config --global user.email "tu_correo_registrado@ejemplo.com"

# 2. Instalar pnpm globalmente:
npm install -g pnpm

# 3. Health Check:
node -v
git --version
pnpm -v
```

---

## 🍴 1. Flujo de Trabajo en 4 Pasos (Fork & Pull Request)

```bash
# PASO 1: En GitHub, haz clic en "Fork" en:
# https://github.com/UETS-Programacion-Movil/02-typescript

# PASO 2: Clona TU fork personal en tu computadora:
git clone https://github.com/TU_USUARIO/02-typescript.git
cd 02-typescript

# PASO 3: Crea tu rama de entrega personal:
git checkout -b entrega/nombre-apellido

# PASO 4: Instala dependencias y programa en src/:
pnpm install
```

---

## 🛠️ 2. Comandos de Prueba y Validación

```bash
# Probar cada reto individualmente mientras programas:
pnpm run start:01   # Reto 01: Tipos Primitivos
pnpm run start:02   # Reto 02: Interfaces y Puente Java
pnpm run start:03   # Reto 03: Estados Móviles y Uniones
pnpm run start:04   # Reto 04: Desafío Integrador Bar Salesiano

# Ejecutar la suite completa con Auto-Sync Inteligente:
pnpm test
# (o también: pnpm run test:all)

# Verificar que no tengas NINGÚN error de tipos (0 errores):
pnpm run check
```

---

## 📤 3. Guardar, Subir y Entregar tu Tarea

```bash
# 1. Guarda tus cambios con Commits Semánticos:
git add -A
git commit -m "feat(reto-01): resolver tipos y promedios"

# 2. Sube tu rama a tu Fork en GitHub:
git push origin entrega/nombre-apellido
```

> [!WARNING]
> **⚠️ Regla Crítica de Rama para el Pull Request:**  
> Compara: `compare: entrega/nombre-apellido` contra `base: main`.  
> *(No compares main con main).*

> [!TIP]
> **💡 Entrega Parcial Salesiana: ¡Nunca te quedes con 0!**  
> Si se acaba la clase, sube tu avance parcial y graba el video oral para asegurar los **5.00 puntos del Bloque B**.

---

## ☕ 4. Java vs ⚡ TypeScript: Tabla Comparativa

| Concepto | ☕ Java (POO Clásica) | ⚡ TypeScript (Ecosistema Móvil) |
| :--- | :--- | :--- |
| **Enteros & Decimales** | `int a = 10; double b = 5.9;` | `const a: number = 10; const b: number = 5.9;` |
| **Cadenas de Texto** | `String nombre = "Juan";` | `const nombre: string = "Juan";` |
| **Booleanos** | `boolean activo = true;` | `const activo: boolean = true;` |
| **Arreglos** | `String[] lista = {"A", "B"};` | `const lista: string[] = ["A", "B"];` |
| **Colecciones** | `List<String> items = new ArrayList<>();` | `const items: Array<string> = [];` |
| **Constantes / Inmutabilidad** | `final int MAX = 100;` | `const MAX = 100;` o `readonly id: string;` |
| **Contrato de Datos** | `public class Alumno { ... getters/setters }` | `export interface Alumno { nombre: string; }` |
| **Valores Opcionales** | `Optional<String> tel;` | `telefono?: string;` |
| **Unión de Tipos** | Enums pesados o Interfaces heredadas | `type Estado = "cargando" \| "exito" \| "error";` |
| **Funciones / Métodos** | `public int sumar(int a, int b) { return a+b; }` | `export const sumar = (a: number, b: number): number => a + b;` |
| **Módulos** | `package com.uets.app; import ...` | `export { ... }; import { ... } from "...";` |

---

## 🛡️ 5. Las 5 Reglas de Oro de TypeScript

1. **Usa `const` por defecto:** Usa `let` solo si la variable cambiará de valor; ¡jamás uses `var`!
2. **Cero `any`:** `any` apaga la seguridad de TypeScript. Si el dato es incierto de una API, usa `unknown` y valida con `typeof`.
3. **Propiedades Opcionales con `?`:** Si un dato puede no existir, márcalo con `?` y accede con *Optional Chaining* (`usuario?.telefono`).
4. **Interfaces para Modelos, Types para Uniones:**
   - Usa `interface Usuario { ... }` para modelar objetos y entidades.
   - Usa `type Rol = "ADMIN" | "ESTUDIANTE"` para uniones y tipos literales.
5. **Tipa los retornos de las funciones:** Siempre indica qué devuelve una función: `(x: number): string => ...`.

---

## 📹 6. Guión Rápido para tu Screencast (3 a 5 min)

1. **[0:00 - 0:45] Presentación:** Muestra tu rostro en cámara y di tu nombre y paralelo.
2. **[0:45 - 2:00] Código:** Muestra tus interfaces creadas y explica `readonly` y propiedades opcionales (`?`).
3. **[2:00 - 3:15] Terminal en Vivo:** Ejecuta `pnpm test` mostrando todos los tests en verde y corre `pnpm run check` con 0 errores.
4. **[3:15 - 4:15] Sustentación Teórica:** Explica una diferencia clave entre Java y TypeScript (ej. *Tipado Estructural* vs *Tipado Nominal*).
