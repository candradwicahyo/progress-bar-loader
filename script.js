window.onload = () => {
  
  let interval, number = 0;
  
  const bar = document.querySelector('.bar');
  const text = document.querySelector('.text');
  const button = document.querySelector('.button');
  button.addEventListener('click', loader);
  
  function loader() {
    // bersihkan
    clear();
    // jalankan set interval
    interval = setInterval(() => {
      // jika isi variabel number tidak lebih besar dari angka 100
      if (number <= 100) {
        // masukkan isi variabel number ke element text dan bar
        text.textContent = `${number++}%`;
        bar.style.width = `${number++}%`;
      }
    }, 30);
  }
  
  function clear() {
    // hentikan set interval 
    clearInterval(interval);
    // set variabel number menjadi angka 0
    number = 0;
  }
  
}