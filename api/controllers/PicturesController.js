/**
 * PicturesController
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
   * /pictures/index
   */ 
  index: function (req,res) {

    // This will render the view: 
    // /Users/kevin/Documents/workspace/sails-photogur/views/pictures/index.ejs
    res.view(
    	var pictures = [
	    		{title:"The old church on the coast of White sea",
    			 artist:"Sergey Ershov",
			 url:"http://monicao.s3.amazonaws.com/bitmaker/house.jpg"
    			},
			{title:"Sea Power",
			 artist:"Stephen Scullion",
			 url:"http://monicao.s3.amazonaws.com/bitmaker/wave.jpg"
			},
			{title:"Into the Poppies",
			 artist:"John Wilhelm",
			 url:"http://monicao.s3.amazonaws.com/bitmaker/girl.jpg"
			}
    		];
    );

  }

};
