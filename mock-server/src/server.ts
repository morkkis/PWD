import express from 'express';
import cors from 'cors';
import path from 'path';
//import minimist from 'minimist';
//import proxy from 'http-proxy-middleware';
import router from './router';
import {AddressInfo} from 'net';

const PORT = 4202;
const app = express();
app.use(cors());

/*
const args = (process.argv.slice(2));
if(args['appProxy']){
  //work with app proxy
  console.log('===========> using proxy', args['appProxy']);
  app.use('/gateway', proxy({target: args['appProxy'], changeOrigin: true}));
}

/*app.use('/assets', express.static(path.join(__dirname, '../src/assets')));
app.use('/config', express.static(path.join(__dirname, '../src/config')));*/

app.use('', router);


const server = app.listen(PORT, () => {
  const address: AddressInfo = <AddressInfo>server.address();
  console.log('App listening at http://localhost:%s', address.port);
});

