

var friends = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

app.post("/api/friends", function(req, res){
    if(friends.length){
    friends.push(req.body);
    }
});

app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friends.length = [];

    res.json({ ok: true });
  });
};