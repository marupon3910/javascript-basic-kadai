//ボタンが押されているかどうかの確認
const button = document.getElementById('btn');

//ボタンが押された2秒後の処理
button.addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('text').innerHTML = 'ボタンがクリックされました'; 
  },2000);
});
