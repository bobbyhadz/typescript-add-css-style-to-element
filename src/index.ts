// 👇️ const box: HTMLElement | null
const box = document.getElementById('box');

if (box != null) {
  box.style.backgroundColor = 'lime';
  box.style.color = 'white';
  box.style.fontSize = '2em';
}