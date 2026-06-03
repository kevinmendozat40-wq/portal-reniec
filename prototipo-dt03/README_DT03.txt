DT03_UGP-OPH-RENIEC - GitHub Pages + Autosync GitHub + Power BI

Estructura lista para subir al repositorio portal-reniec:

prototipo-dt03/index.html
prototipo-dt03/DT03_CORREGIDOS.html
prototipo-dt03/README_DT03.txt
prototipo-dt03/.nojekyll
prototipo-dt03/assets/img/reniec_logo.png
prototipo-dt03/documentos/*.pdf
prototipo-dt03/soporte/FORMATO_OFICIAL_DT03.xlsx
prototipo-dt03/data/registros.json
prototipo-dt03/data/registros.csv

Link del prototipo:
https://kevinmendozat40-wq.github.io/portal-reniec/prototipo-dt03/

Base para Power BI:
https://raw.githubusercontent.com/kevinmendozat40-wq/portal-reniec/main/prototipo-dt03/data/registros.csv

Configuracion dentro del prototipo:
Owner: kevinmendozat40-wq
Repositorio: portal-reniec
Rama: main
JSON: prototipo-dt03/data/registros.json
CSV: prototipo-dt03/data/registros.csv
Autosync al guardar: Activado

Usar el mismo token GitHub PAT utilizado para DT00, DT01 y DT02, con permiso Contents: Read and write sobre portal-reniec.

Notas:
- Los PDF se guardan en la carpeta documentos/ dentro del repositorio.
- El HTML no sube PDF desde el navegador: solo los muestra y permite ver/descargar desde GitHub Pages.
- La matriz DT03 si se guarda/sincroniza en GitHub como JSON y CSV.
- Power BI debe conectarse al CSV raw indicado arriba.
