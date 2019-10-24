
const foodList = function(req, res, next) {
  res.render('foodList', { title: 'Food List' });
};

const favouriteFood = function(req, res, next) {
  res.render('favouriteFood', { title: 'My favourite food' });
};

module.exports = {
    
    foodList,
    favouriteFood
};