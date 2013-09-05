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
  
  /**
   * /picture/index
   */ 
  index: function (req,res) {
    Picture.find().done(function(err,pic){
	    if(err){
		    return console.log(err);
	    } else { 
		    return console.log(pic);
	    }
	});
    // This will render the view: 
    // /Users/kevin/Documents/workspace/sails-photogur/views/Picture/index.ejs
    res.view();

  },


  /**
   * /picture/show
   */ 
  show: function (req,res) {
    
    // This will render the view: 
    // /Users/kevin/Documents/workspace/sails-photogur/views/Picture/show.ejs
    res.view();

  },


  /**
   * /picture/create
   */ 
  create: function (req,res) {
    var title = req.param('title');
    var url = req.param('url');
    var artist = req.param('artist');
    
    Picture.create({ title: title, url: url, artist: artist})
    	.done(function newCreatePicture(err,pic){
		if(err){
			res.send(500,{error:"DB Error"});
		} else {
			res.send(200,{success: "yolo"});
		}
	});
    
    // This will render the view: 
    // /Users/kevin/Documents/workspace/sails-photogur/views/Picture/create.ejs
    // res.view();

  },


  /**
   * /picture/edit
   */ 
  edit: function (req,res) {

    // This will render the view: 
    // /Users/kevin/Documents/workspace/sails-photogur/views/Picture/edit.ejs
    res.view();

  },


  /**
   * /picture/delete
   */ 
  delete: function (req,res) {

    // This will render the view: 
    // /Users/kevin/Documents/workspace/sails-photogur/views/Picture/delete.ejs
    res.view();

  }

};
