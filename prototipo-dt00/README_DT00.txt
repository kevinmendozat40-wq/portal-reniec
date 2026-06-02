DT00 - Prototipo con sincronización GitHub + Power BI

Contenido:
- index.html: página principal del prototipo.
- DT00_CORREGIDOS.html: acceso directo alternativo.
- data/registros.csv: base para Power BI.
- data/registros.json: base espejo para el prototipo.

URL GitHub Pages esperada:
https://kevinmendozat40-wq.github.io/portal-reniec/prototipo-dt00/

URL CSV para Power BI:
https://raw.githubusercontent.com/kevinmendozat40-wq/portal-reniec/main/prototipo-dt00/data/registros.csv

Sincronización automática:
1. Abra el prototipo.
2. Ingrese con admin@dt00.gob.pe / 123456.
3. Entre a Power BI / GitHub.
4. Pegue un token de GitHub con permiso Contents: Read and write sobre el repositorio portal-reniec.
5. Active Guardar automáticamente en GitHub al registrar.
6. Guarde la configuración.
7. Al registrar o editar una atención, el prototipo actualizará data/registros.csv y data/registros.json en GitHub.

Nota de seguridad:
No publique el token dentro del código HTML. El token debe ingresarse desde el navegador de la persona autorizada. Si marca "guardar token", se almacena solo en localStorage del navegador usado.

Si GitHub muestra 404:
Espere 2 a 5 minutos después del commit y recargue con Ctrl + F5.


Corrección aplicada: el prototipo siempre muestra la pantalla de inicio de sesión al abrir la URL. La sesión ya no queda persistida en el navegador.
