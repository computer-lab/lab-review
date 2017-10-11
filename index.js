var review = require('review')

review()
  .title('My Review')
  .sites({ google : 'http://google.com/' })
  .resolutions(['1280x1024', '1900x1600', '800x600'])
  .cache({
    dir : __dirname + '/cache/',
    expires : 60
  })
  .listen(8000)
