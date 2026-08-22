# ⚡ Cheatsheet: De Java a TypeScript para Móviles
### Guía Rápida de Sintaxis y Modelado — 3° BGU Informática (UETS)

---

## ☕ Java vs ⚡ TypeScript: Tabla Comparativa

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

## 🛠️ Comandos Esenciales en Terminal

```bash
# 1. Instalar dependencias
pnpm install

# 2. Ejecutar un ejercicio individual con tsx (ultra rápido)
pnpm run start:01
pnpm run start:02
pnpm run start:03
pnpm run start:04

# 3. Validar todo el proyecto en busca de errores de tipado
pnpm run check

# 4. Ejecutar todos los ejercicios secuencialmente
pnpm run test:all
```

---

## 🛡️ Las 5 Reglas de Oro de TypeScript

1. **Usa `const` por defecto:** Usa `let` solo si la variable cambiará de valor; ¡jamás uses `var`!
2. **Cero `any`:** `any` apaga la seguridad de TypeScript. Si el dato es incierto de una API, usa `unknown` y valida con `typeof`.
3. **Propiedades Opcionales con `?`:** Si un dato puede no existir (ej. teléfono o foto), márcalo con `?` y accede con *Optional Chaining* (`usuario?.telefono`).
4. **Interfaces para Modelos, Types para Uniones:**
   - Usa `interface Usuario { ... }` para modelar objetos y entidades.
   - Usa `type Rol = "ADMIN" | "ESTUDIANTE"` para uniones y tipos literales.
5. **Tipa los retornos de las funciones:** Siempre indica qué devuelve una función: `(x: number): string => ...`.
