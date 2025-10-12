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
  
  <div class="slider-dots">
    <span class="dot active"></span>
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
  position: relative;
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
  text-align: center;
}

.caption p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 500;
}

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.dot {
  width: 14px;
  height: 14px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  margin: 0 8px;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.dot.active {
  background: white;
  transform: scale(1.2);
  border-color: rgba(0, 0, 0, 0.2);
}

.dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* 响应式设计 */
@media (max-width: 850px) {
  .image-slider {
    max-width: 95%;
  }
  
  .slides {
    height: 400px;
  }
}

@media (max-width: 600px) {
  .slides {
    height: 350px;
  }
  
  .caption p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .slides {
    height: 300px;
  }
  
  .caption {
    padding: 10px 15px;
  }
  
  .dot {
    width: 12px;
    height: 12px;
    margin: 0 6px;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  let currentIndex = 0;
  const slideCount = slides.length;
  
  // 更新滑块位置
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // 更新指示点状态
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  // 点击指示点跳转
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
      resetAutoPlay(); // 重置自动播放计时器
    });
  });
  
  // 自动播放功能
  let autoPlayTimer;
  
  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlider();
    }, 5000); // 每5秒切换一次
  }
  
  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  }
  
  // 鼠标悬停时暂停自动播放
  const sliderContainer = document.querySelector('.image-slider');
  
  sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoPlayTimer);
  });
  
  // 鼠标离开时恢复自动播放
  sliderContainer.addEventListener('mouseleave', () => {
    startAutoPlay();
  });
  
  // 初始化和启动自动播放
  startAutoPlay();
});
</script>
