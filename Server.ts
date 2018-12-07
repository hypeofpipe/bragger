import _React, { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import FeedComponent from './src/routes/feed/Feed'
import Template from './src/Template'
const server = express();
const port = process.env.PORT || 3000;

server.use('/public', express.static('public'));

server.get('/', (_req, res) => {
  const appString = renderToString(createElement(FeedComponent));

  res.send(
    Template(
      {
        body: appString,
        title: "Sample app"
      }
    )
  );
});

server.listen(port);

console.log(`Server is listening on ${port}`);
