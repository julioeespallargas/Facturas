# Extractor de facturas — Aspar KSB

Herramienta web que lee facturas (PDF, JPG, PNG) con la API de Claude y genera una tabla lista para pegar en Excel: proveedor, nº de factura, fecha, concepto desglosado, cantidad, importe y total.

## Cómo funciona

- Subes una o varias facturas.
- Claude extrae cada línea de concepto con su cantidad e importe.
- Clasificas cada línea por categoría (Moto 4, Talent, Conjunto, Estructura).
- Exportas: **Descargar CSV** (recomendado), **Copiar para Excel** o copia manual.

Todo ocurre en tu navegador. La clave de API se guarda solo en `localStorage` y las facturas no pasan por ningún servidor propio.

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior.
- Una clave de API de Anthropic: https://console.anthropic.com/settings/keys

## Uso en local

```bash
npm install
npm run dev
```

Abre la URL que indica la terminal (normalmente `http://localhost:5173`), pega tu clave de API y empieza a subir facturas.

## Compilar para producción

```bash
npm run build
```

El resultado queda en `dist/`. Puedes servir esa carpeta en cualquier hosting estático.

## Desplegar en GitHub Pages

1. Sube el repo a GitHub.
2. En **Settings → Pages**, elige desplegar desde GitHub Actions, o sube la carpeta `dist/` a la rama `gh-pages`.

`vite.config.js` ya usa `base: "./"`, así que funciona en subrutas sin configuración extra.

## Nota sobre la clave de API

La app llama a `api.anthropic.com` directamente desde el navegador usando la cabecera
`anthropic-dangerous-direct-browser-access`. Esto expone la clave a quien use tu navegador,
así que **úsala solo con tu propia clave en un equipo de confianza**. Para un despliegue
público compartido, lo correcto sería mover la llamada a un pequeño backend que guarde la
clave del lado del servidor.

## Categorías

Las categorías por defecto (`Moto 4`, `Talent`, `Conjunto`, `Estructura`) se editan en
`src/App.jsx`, en la constante `CATEGORIES`.
