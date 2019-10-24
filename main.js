const index = function(req, res, next) {
  res.render('index', { title: 'Karan' });
};

module.exports = {
    index
};