var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------  
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    data.forEach(function(point){
        point.distance = distance(newPoint, point);
    });

    return 'Completed';

};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //------------------- 
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    return data.slice(0,k); //return the first k numbers of that sorted array (k smallest distances) 
    return "func 3 not done yet";
};

module.exports = exercise;
