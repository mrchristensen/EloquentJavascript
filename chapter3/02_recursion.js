function isEven(num){
  if(num < 0){
    num = -num;
  }

  if(num == 0){
    return true;
  }
  else if(num == 1){
    return false;
  }
  else{
    return isEven(num -2);
  }
}