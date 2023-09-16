//変数numを定義する
num = 30;

/*変数numが3と5の倍数の場合の処理、3の倍数の処理、
5の倍数の処理、それ以外の処理の順で作成する。*/
if (num % 15 == 0){
  console.log('3と5の倍数です');
}else if (num % 3 == 0){
  console.log('3の倍数です');
}else if(num % 5 == 0){
  console.log('5の倍数です');
}else{
  console.log(num);
}
