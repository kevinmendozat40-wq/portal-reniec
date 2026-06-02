DT02 UGP-OPH RENIEC - listo para GitHub + Power BI

Estructura que debe subir a la raíz del repositorio portal-reniec:

prototipo-dt02/
  index.html
  DT02_CORREGIDOS.html
  README_DT02.txt
  .nojekyll
  data/
    registros.csv
    registros.json

La base oficial se guarda en:
prototipo-dt02/data/registros.csv
prototipo-dt02/data/registros.json

El archivo registros.csv mantiene las cabeceras oficiales indicadas por el usuario, en este orden:
1. DNI
2. NOMBRES APELLIDOS DEL QUE OCUPA EL PUESTO
3. CÓDIGO SIA RENIEC
4. CÓDIGO CAP / CÓDIGO CAS
5. CÓDIGO AIRHSP / TEMPORAL - SOSTENIBLE
6. TIPO DE ÓRGANO
7. PRIMER NIVEL
8. SEGUNDO NIVEL
9. TERCER NIVEL
10. SUBSISTEMA(S) A CARGO
11. PROCESO(S) PRINCIPALES A CARGO
12. FUNCIONES SEGÚN MCC
13. PROCESOS COMPLEMENTARIOS
14. ASIGNACION DE FUNCIONES (POR JEFATURA )
15. PUESTO CAP  / CARGO CAS
16. NIVEL REMUNERATIVO / REMUNERACIÓN MENSUAL
17. SITUACIÓN DEL PUESTO / CARGO / SERVICIO2
18. REG LAB / CONTRACTUAL ( Tercero)
19. PUESTO DE ORIGEN  O PROCEDENCIA por DESPLAZAMIENTO
20. CATEGORIA / GRUPO OCUPACIONAL
21. PROFESIÓN / NIVEL ACADEMICO
22. FUNCIÓN GRAL   / ACTIVIDAD GENERAL  / SERVICIO TERCERO
23. Asignacion de funcion general
24. TALLA DE CAMISA / BLUSA
25. GENERO
26. N° CELULAR
27. F_NACIMIENTO
28. EDAD EN AÑOS /MESES / DÍAS
29. TIPO DE EMPLEADO
30. GENERO
31. N° CELULAR
32. F_NACIMIENTO
33. EDAD EN AÑOS /MESES / DÍAS
34. CORREO PERSONAL
35. CORREO INSTITUCIONAL
36. F_INGRESO
37. F_CESE(los que estan por vencer)
38. TIEMPO DE SERVICIOS
39. REM MENSUAL DL 728
40. REM MENSUAL CAS
41. HONORARIOS MES / OS TERCERO
42. ESTADO  DEL FUNCIONARIO / DIRECTIVO / SERVDIDOR / LOCADOR
43. MODALIDAD DE TRABAJO / TELETRABAJO
44. SEDE
45. UBICACIÓN FISICA2
46. ESTADO Orden de Servicio
47. N° ULTIMA OS
48. F_ ULTIMA  OS
49. MONTO TOTAL de OS
50. OBS

Configuración dentro del prototipo:
Owner: kevinmendozat40-wq
Repo: portal-reniec
Branch: main
CSV: prototipo-dt02/data/registros.csv
JSON: prototipo-dt02/data/registros.json

Permiso del token GitHub requerido:
Contents: Read and write

Link del prototipo cuando esté publicado:
https://kevinmendozat40-wq.github.io/portal-reniec/prototipo-dt02/

Link CSV para Power BI:
https://raw.githubusercontent.com/kevinmendozat40-wq/portal-reniec/main/prototipo-dt02/data/registros.csv

Flujo operativo:
1. Ingresar al prototipo DT02.
2. Configurar GitHub con token de escritura.
3. Registrar o editar un registro.
4. Presionar Guardar registro.
5. El prototipo actualiza registros.csv y registros.json en GitHub.
6. Power BI consume registros.csv desde la URL raw.
