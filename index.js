// Code your solution in this file!
function distanceFromHqInBlocks (num) {
    //returns the number of blocks given a value
    if (num<42){
      return(42-num);
    }
    else {
  
    return(num-42);
  }
  }
  
  
  
  function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks(distance)*264;
  }
  
  function distanceTravelledInFeet(a,b){
    if (b>a){
      return((b-a)*264);
    }
    else
      return((a-b)*264);
  }
  
  
  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }
