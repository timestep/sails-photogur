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
    res.view();

  }

};
