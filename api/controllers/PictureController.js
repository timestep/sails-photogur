/**
 * PictureController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
	index: function(req,res){
		Picture.findAll(function(err,pic){
			if(err) return res.send(err,500);

			res.view({
				model: pic
			});
		 });
	
	}
};
