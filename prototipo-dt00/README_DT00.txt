DT00 UGH-OPH RENIEC 2026 - Autosync GitHub + Power BI

Carpeta lista para GitHub Pages.

Estructura:
prototipo-dt00/
- index.html
- DT00_CORREGIDOS.html
- README_DT00.txt
- .nojekyll
- data/registros.csv
- data/registros.json

Uso:
1. Subir la carpeta completa prototipo-dt00 a la raiz del repositorio portal-reniec.
2. Abrir:
   https://kevinmendozat40-wq.github.io/portal-reniec/prototipo-dt00/
3. Entrar al prototipo.
4. Abrir Configurar GitHub.
5. Configurar:
   Owner: kevinmendozat40-wq
   Repositorio: portal-reniec
   Rama: main
   JSON: prototipo-dt00/data/registros.json
   CSV: prototipo-dt00/data/registros.csv
   Autosync al guardar: Activado
6. Pegar token GitHub PAT con permiso Contents: Read and write.
7. Guardar configuración.
8. Probar token.
9. Cargar data desde GitHub.
10. Registrar o editar datos y presionar Guardar registro.

Base para Power BI:
https://raw.githubusercontent.com/kevinmendozat40-wq/portal-reniec/main/prototipo-dt00/data/registros.csv

Nota de seguridad:
El token se guarda solo en el navegador local mediante localStorage. No se sube al repositorio.
No escriba el token dentro de index.html, DT00_CORREGIDOS.html, secure.js ni otros archivos del repositorio.
