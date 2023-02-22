document.addEventListener('DOMContentLoaded', () => {
  // コンテナを指定
  const section = document.querySelector('.bubble-background');

  // 泡を生成する関数
  const createBubble = () => {
    const bubbleEl = document.createElement('span');
    bubbleEl.className = 'bubble';
    const minSize = 20;
    const maxSize = 100;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    bubbleEl.style.width = `${size}px`;
    bubbleEl.style.height = `${size}px`;
    bubbleEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(bubbleEl);

    // 一定時間が経てば泡を消す
    setTimeout(() => {
      bubbleEl.remove();
    }, 15000);
  }

  // 泡の生成を開始するトリガー（初期値はOFF）
  let activeBubble = null;

  // 泡の生成をストップする関数
  const stopBubble = () => {
    clearInterval(activeBubble);
  };

  // Intersection observerに渡すコールバック関数
  const cb = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        activeBubble = setInterval(createBubble, 800);
      } else {
        stopBubble();
      }
    })
  };

  // Intersection observerに渡すオプション
  const options = {
    rootMargin: "100px 0px"
  }

  // Intersection observerの初期化
  const io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100; // Polyfill
  io.observe(section);
});
