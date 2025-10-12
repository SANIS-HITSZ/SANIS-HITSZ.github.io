---
permalink: /
# layout: archive
# title: "广东省空天网络与智能感知重点实验室"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---
{% include base_path %}


广东省空天网络与智能感知重点实验室
======

<div class="image-slider">
  <div class="slides">
    <div class="slide">
      <img src="/assets/images/image_20250707152638.jpg" alt="图1">
      <div class="caption">
        <p>实验室挂牌仪式合影</p>
      </div>
    </div>
    <div class="slide">
      <img src="/assets/images/image_20250707152730.jpg" alt="图2">
      <div class="caption">
        <p>2024届硕士毕业生合影</p>
      </div>
    </div>
  </div>
  
  <div class="slider-controls">
    <button class="prev-btn">← 上一张</button>
    <span class="slide-counter">1 / 3</span>
    <button class="next-btn">下一张 →</button>
  </div>
  
  <div class="slider-dots">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>

<style>
.image-slider {
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  background: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 450px;
}

.slide {
  min-width: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px 20px;
}

.caption h3 {
  margin: 0 0 8px 0;
  font-size: 1.4rem;
  color: #4fc3f7;
}

.caption p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.slider-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f8f9fa;
  border-top: 1px solid #eee;
}

.prev-btn, .next-btn {
  background: #4285f4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.3s;
}

.prev-btn:hover, .next-btn:hover {
  background: #3367d6;
}

.slide-counter {
  font-size: 0.95rem;
  color: #5f6368;
}

.slider-dots {
  display: flex;
  justify-content: center;
  padding: 15px;
  background: #f8f9fa;
  border-top: 1px solid #eee;
}

.dot {
  width: 12px;
  height: 12px;
  background: #ccc;
  border-radius: 50%;
  margin: 0 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: #4285f4;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dots = document.querySelectorAll('.dot');
  const counter = document.querySelector('.slide-counter');
  
  let currentIndex = 0;
  const slideCount = slides.length;
  
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    counter.textContent = `${currentIndex + 1} / ${slideCount}`;
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });
  
  // 初始更新
  updateSlider();
});
</script>
