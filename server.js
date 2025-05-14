const express = require('express');
const request = require('request');
const app = express();

const streams = {
  '18456': 'https://anasvirat.github.io/PHP/513.m3u8',
  '18457': 'https://anasvirat.github.io/PHP/500.m3u8',
  '18457': 'https://allinonereborn.com/ipl92.m3u8/?id=18456'
};

app.get('/Box.m3u8', (req, res) => {
  const id = req.query.id;
  const streamUrl = streams[id];

  if (streamUrl) {
    request.get(streamUrl).pipe(res);
  } else {
    res.status(404).send('#EXTM3U\n# Stream Not Found');
  }
});

app.listen(3000, () => console.log('Server running'));
