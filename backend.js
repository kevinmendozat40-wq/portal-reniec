// ==========================================================
// BACKEND.JS - PORTAL RENIEC
// Usuarios, claves y permisos del portal interno.
// Este archivo es el único que editarás para agregar usuarios.
// ==========================================================

const USERS = [
  {
    u: "kevin.mendoza",
    p: "KM2026",
    permisos: [
      "dt00", "dt00bd",
      "dt01", "dt01bd",
      "dt02", "dt02bd",
      "dt03", "dt03bd",
      "reloj", "relojbd"
    ]
  },
  {
    u: "pepito",
    p: "BD2026",
    permisos: [
      "dt00bd",
      "dt01bd",
      "dt02bd",
      "dt03bd",
      "relojbd"
    ]
  },
  {
    u: "juanito",
    p: "PBI2026",
    permisos: [
      "dt00",
      "dt01",
      "dt02",
      "dt03",
      "reloj"
    ]
  }
];
// ==========================================================
// LINKS DE APLICACIONES / POWER BI / BASE DE DATOS
// Aquí se administran las rutas internas del dashboard.
// ==========================================================

const APP_LINKS = {
  dt00: "PEGA_AQUI_LINK_POWERBI_DT00",
  dt00bd: "PEGA_AQUI_LINK_DT00_BD",

  dt01: "PEGA_AQUI_LINK_POWERBI_DT01",
  dt01bd: "PEGA_AQUI_LINK_DT01_BD",

  dt02: "https://app.powerbi.com/view?r=eyJrIjoiODM0ZDgzYzgtYTNkNS00Mzg1LWExYzgtNjEzMjI5MWNiZGUzIiwidCI6IjM0ZjMyNDE5LTFjMDUtNDc1Ni04OTZlLTQ1ZDYzMzcyNjU5YiIsImMiOjR9",
  dt02bd: "https://kevinmendozat40-wq.github.io/portal-reniec/prototipo-dt02/DT02_v5_1_Final_BOTONES_CORREGIDOS_AUTO_GITHUB.html",

  dt03: "PEGA_AQUI_LINK_POWERBI_DT03",
  dt03bd: "PEGA_AQUI_LINK_DT03_BD",

  reloj: "PEGA_AQUI_LINK_POWERBI_RELOJ",
  relojbd: "PEGA_AQUI_LINK_RELOJ_BD"
};

function obtenerLinkAplicacionReniec(codigo) {
  const codigoLimpio = String(codigo || "").trim().toLowerCase();

  if (APP_LINKS[codigoLimpio]) {
    return APP_LINKS[codigoLimpio];
  }

  return "#";
}
// ==========================================================
// VALIDACIÓN DE LOGIN
// ==========================================================

function validarLoginReniec(usuario, clave) {
  const usuarioLimpio = String(usuario || "").trim().toLowerCase();
  const claveLimpia = String(clave || "").trim();

  const usuarioEncontrado = USERS.find(function (item) {
    return String(item.u).trim().toLowerCase() === usuarioLimpio &&
           String(item.p).trim() === claveLimpia;
  });

  if (usuarioEncontrado) {
    return usuarioEncontrado.u;
  }

  return null;
}

// ==========================================================
// SESIÓN Y PERMISOS
// ==========================================================

function guardarSesionReniec(usuario) {
  const usuarioLimpio = String(usuario || "").trim().toLowerCase();

  const usuarioEncontrado = USERS.find(function (item) {
    return String(item.u).trim().toLowerCase() === usuarioLimpio;
  });

  const permisos = usuarioEncontrado && Array.isArray(usuarioEncontrado.permisos)
    ? usuarioEncontrado.permisos
    : [];

  sessionStorage.setItem("reniec_auth", "1");
  sessionStorage.setItem("reniec_user", usuarioLimpio);
  sessionStorage.setItem("reniec_permisos", JSON.stringify(permisos));
}

function cerrarSesionReniec() {
  sessionStorage.removeItem("reniec_auth");
  sessionStorage.removeItem("reniec_user");
  sessionStorage.removeItem("reniec_permisos");
}

function estaAutenticadoReniec() {
  return sessionStorage.getItem("reniec_auth") === "1";
}

function obtenerUsuarioReniec() {
  return sessionStorage.getItem("reniec_user") || "";
}

function obtenerPermisosSesionReniec() {
  try {
    return JSON.parse(sessionStorage.getItem("reniec_permisos") || "[]");
  } catch (error) {
    return [];
  }
}

// ==========================================================
// PROTECCIÓN BÁSICA VISUAL
// ==========================================================

document.oncontextmenu = function () {
  return false;
};

document.onkeydown = function (e) {
  if (e.keyCode === 123) return false; // F12

  if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) return false;
  if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) return false;
  if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) return false;
};