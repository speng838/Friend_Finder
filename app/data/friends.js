

var friendsArray = [
    {
        name:"Ahmed",
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        name:"Tony",
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[
            "2",
            "3",
            "2",
            "1",
            "5",
            "3",
            "2",
            "2",
            "5",
            "1"
        ]
    },
    {
        name:"Sophia",
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[
            "3",
            "1",
            "2",
            "1",
            "4",
            "3",
            "1",
            "2",
            "1",
            "1"
        ]
    }


];

module.exports = friendsArray;

var scoresTotal = 0;
var array = [];
for(i=0; i<friendsArray.length; i++){
    scoresTotal = 0;
    for(j=0; j<friendsArray[i].scores.length; j++){
        
        scoresTotal += parseInt(friendsArray[i].scores[j]);
    }
    array.push(scoresTotal);
    console.log(array);
}
var array2 =[];
for(i=0; i<array.length-1; i++){
    array2.push(Math.abs(array[array.length-1] - array[i]));
}
console.log(array2);

var index = 0;
var value = array2[0];
for (var i = 1; i < array2.length; i++) {
  if (array2[i] < value) {
    value = array2[i];
    index = i;
  }
  console.log(index);
}

