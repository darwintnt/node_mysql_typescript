
import Server from './server/server';
import router from './router/routes';


const server = Server.init(Number(process.env.PORT));

server.app.use(router);

server.start(() => {
  console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});