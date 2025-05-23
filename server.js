const express = require('express');
const request = require('request');
const app = express();

const streams = {
  '18456': 'https://anasvirat.github.io/PHP/513.m3u8',
  '18457': 'https://anasvirat.github.io/PHP/500.m3u8',
  '18458': 'https://allinonereborn.com/ipl92.m3u8/?id=18456',
  '18745': 'https://m3u.8088y.site/X/Box.php?id=379755',
  'Tamil': 'https://m3u.8088y.site/X/Box.php?id=497418',
  '18746': 'https://8088y.site/Api/JioTV/app/ts_live_2853.m3u8',
  '18747': 'https://8088y.site/Api/JioTV/app/ts_live_550.m3u8'
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
