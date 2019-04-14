// Coding Challenge for Sprint 04/10 Week 

const developer = {

  author: 'Eduardo Ruiz' ,
  title: 'Software Engineer'

}


opposite = (num) => { 
  if(num == 0){
    return 0;
  }
  console.log('first num :',num);

  numberReverse = (num) =>{
    let str = num.toString(),
    strSplit = str.split(''),
    reverse = strSplit.reverse();

    return reverse.join('');
  }

  
  if(num > 0){
    numberReverse(num);
    let negative = '-';

    negative += num;
    console.log(negative);
    return Number(negative);
  }

  if(num < 0){
    
    let str = num.toString(),
        strSplit = str.split('');
        strSplit.shift();
        console.log(strSplit);
        console.log(strSplit.join(''));
        return Number(strSplit.join(''));
  
  }


}


oppositeNumber(-12525220.3325);