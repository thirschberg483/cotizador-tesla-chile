# Cotizador Tesla

Aplicación estática para generar cotizaciones Tesla en PDF desde el navegador.

## Uso

1. Abre `index.html` en el navegador.
2. Completa cliente, RUT, fecha, modelo, versión, opciones, cantidad y descuento.
3. Revisa el resumen calculado.
4. Presiona **Guardar PDF**. El archivo se descargará como `cotizacion-tesla-<cliente>.pdf`.

Los valores del catálogo fueron incorporados desde `configuraciones_tesla_chile_solo_tabla.xlsx` y quedaron en `app.js`. Si cambian precios, versiones u opciones comerciales, actualiza ese bloque de datos.
