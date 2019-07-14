module.exports = {
  configureWebpack: {
    devServer: {
      before(app) {
        app.get('/api/goods', function(req, res) {
          res.json({
            code: 0,
            list: [
              {id: 1, text: "c", price: 100},
              {id: 2, text: "web", price: 80},
              {id: 3, text: "Python", price: 60},
              {id: 4, text: "Java", price: 80}
            ]
          })
        })
      }
    }
  }
}