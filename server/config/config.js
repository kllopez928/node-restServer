// =================
// Puerto
// =================

process.env.PORT = process.env.PORT || 3000;


// =================
// Entorno
// =================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// =================
//  Base de datos
// =================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://kllopez928:e91Gu8Q1ZPfwv5E0@cluster0-8e0sh.mongodb.net/cafe'
}

process.env.URLDB = urlDB;