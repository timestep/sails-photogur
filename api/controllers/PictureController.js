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

    // This will render the view: 
    // /Users/kevin/Documents/workspace/sails-photogur/views/Picture/create.ejs
    res.view();

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
