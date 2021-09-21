const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//   //QUESTION!!!QUESTION!!!QUESTION!!!QUESTION!!!
// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
//   try {
//     const categoryData = await Category.findByPk(req.params.id, {
//       include: [{ model: Product, through: ????????, as: 'category_id' }]
//     });

//     if (!travellerData) {
//       res.status(404).json({ message: 'No traveller found with this id!' });
//       return;
//     }

//     res.status(200).json(travellerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});





//QUESITON!!!QUESTION!!!

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});









router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
