import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';
import server from './dist/front-ecommerce/server/server.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde Angular
app.use(express.static(join(__dirname, 'dist/front-ecommerce/browser')));

// SSR handler
app.get('*', async (req, res, next) => {
  try {
    const { handler } = await server();
    handler(req, res, next);
  } catch (err) {
    console.error('❌ Error en SSR:', err);
    res.status(500).send('Error interno del servidor');
  }
});

createServer(app).listen(port, () => {
  console.log(`✅ SSR Angular corriendo en http://localhost:${port}`);
});
