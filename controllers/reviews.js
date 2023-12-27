const Glaze = require('../models/glaze');

module.exports = {
  create,
  delete: deleteReview
};

async function deleteReview(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const glaze = await Glaze.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  // Rogue user!
  if (!glaze) return res.redirect('/glazes');
  // Remove the review using the remove method available on Mongoose arrays
  glaze.reviews.remove(req.params.id);
  // Save the updated movie doc
  await glaze.save();
  // Redirect back to the movie's show view
  res.redirect(`/glazes/${glaze._id}`);
}

async function create(req, res) {
  const glaze = await Glaze.findById(req.params.id);

  // Add the user-centric info to req.body (the new review)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // I can push (or unshift) subdocs into Mongoose arrays
  glaze.reviews.push(req.body);
  try {
    // Save any changes made to the movie doc
    await glaze.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/glazes/${glaze._id}`);
}