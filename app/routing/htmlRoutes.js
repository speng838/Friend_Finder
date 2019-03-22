var path = require("path");

module.exports = function(app){

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

        // if no page is found, it defaults to the homepage
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
};