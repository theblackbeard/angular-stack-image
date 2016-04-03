var mongoose  = require('mongoose');
var Article = require('../core/models/article');

module.exports = function() {
    return {
        /*
         * Get route to retrieve all the superheroes.
         */
        getAll : function(req, res){
            //Query the DB and if no errors, send all the superheroes
            var query = Article.find({});
            query.exec(function(err, articles){
                if(err) res.send(err);
                //If no errors, send them back to the client
                res.json(articles);
            });
        },
        /*
         * Post route to save a new superhero into the DB.
         */
        post: function(req, res){
            //Creates a new superhero
            const newArticle = new Article(req.body);
            //Save it into the DB.
            newArticle.save(function(err){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(req.body);
            });
        },
        /*
         * Get a single superhero based on id.
         */
        getOne: function(req, res){
            Article.findById(req.params.id, function(err, article){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(article);
            });     
        }
    }
};  