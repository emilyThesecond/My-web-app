const Glaze = require('../models/glaze')

const newGlaze = (req, res) => {
  res.render('glazes/new', { errorMsg: '' });
}


const create = async (req, res) => {
 let num = parseInt(req.body.itemNumber)
  req.body.itemNumber = num
  console.log(req.body)
  try {
      const glaze = await Glaze.create(req.body)
      console.log(glaze)
      res.redirect('/glazes')
  } catch (err) {
      console.log(err)
      res.render('glazes/new', {errorMsg:err.message})
  }
}

const show = async (req, res) => {
  const glaze = await Glaze.findById(req.params.id)
  res.render('glazes/show', { title: 'Glaze Detail', glaze});
}

const index = async (req, res) => {
  try{
      let glazes = await Glaze.find({})
      res.render('glazes/index', {glazes})
  } catch(err) {
      res.render('glazes/index', {errorMsg: err})
  }
}


module.exports = {
    new: newGlaze,
    create,
    index,
    show
  };