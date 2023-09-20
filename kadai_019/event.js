//ボタンが押されていると、ボタンをクリックしましたが表示される、その他はそのまま
const btn = document.getElementById('btn');

//ボタンをクリックした後の処理を記述
function getItDone () {
  const txt = document.getElementById('text').innerHTML = 'ボタンをクリックしました';
  console.log(txt);
}

//ボタンを押されたときの処理を実行
btn.addEventListener('click', getItDone);
