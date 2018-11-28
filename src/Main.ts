import _React, { createElement } from 'react';
import ts from 'typescript'
import fs from 'fs'
import { renderToString } from 'react-dom/server';
import express = require('express');
import Template from './Template';
import App from './frontend/App';

const server = express();
const port = process.env.PORT || 3000;
const frontendApp: string = fs.readFileSync('./src/frontend/App.tsx').toString()

server.use('/public', express.static('public'));

server.get('/', (_req, res) => {
  const appString = renderToString(createElement(App));

  res.send(
    Template({
      body: appString,
      title: 'Hello World from the server',
    }),
  );
});

server.listen(port);

console.log(`Server is listening on ${port}`);
