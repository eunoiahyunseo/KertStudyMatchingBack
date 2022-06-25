/* eslint-disable no-undef */
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';
import cors from '@koa/cors';
import multer from '@koa/multer';
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
  ),
});

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, './uploads/'));
    },
    filename: function (req, file, cb) {
      const ext = '.png';
      cb(null, path.basename(file.originalname, ext) + '-' + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

console.log(process.cwd());
console.log(process.env.NODE_ENV);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_HOST}:${process.env.MONGODB_PASSWORD}@cluster0.pdnpdm5.mongodb.net/?retryWrites=true&w=majority`,
    {
      dbName: 'blog',
    },
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const app = new Koa();
const router = new Router();

// TODO: 다른 도메인에서의 cookie공유 (x)
let corsOption = {
  origin: process.env.CLIENT_HOST,
  credentials: true,
};

app.proxy = true;
app.use(cors(corsOption));
app.use(serve(__dirname + '/uploads'));

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);

router.post('/api/upload', upload.single('image'), (ctx) => {
  console.log(ctx.file);
  const IMG_URL = `${process.env.CLIENT_HOST}/${ctx.file.filename}`;
  console.log(IMG_URL);
  ctx.body = { url: IMG_URL };
});

app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.resolve(__dirname, '../build');
app.use(serve(buildDirectory));

app.use(async (ctx) => {
  // Not Found이고, 주소가 /api로 시작하지 않는 경우
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    // index.html내용을 반환한다.
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('HTTP server Listening on PORT ' + port);
});
