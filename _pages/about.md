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



<div class="slider-container">
  <div class="slider">
    <div class="slide">
      <img src="/assets/images/image_20250707152638.jpg" alt="图1">
      <div class="caption">实验室挂牌仪式合影</div>
    </div>
    <div class="slide">
      <img src="/assets/images/image_20250707152730.jpg" alt="图2">
      <div class="caption">2024届硕士毕业生合影</div>
    </div>
  </div>
  
  <div class="slider-dots">
    <span class="dot active"></span>
    <span class="dot"></span>
  </div>
</div>

<style>
.slider-container {
  max-width: 800px;
  margin: 2rem auto;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.slider {
  width: 100%;
  height: 450px;
  position: relative;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
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
  padding: 12px 20px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
}

/* CSS动画关键帧 */
.slide:nth-child(1) {
  animation: slideShow 10s infinite;
}

.slide:nth-child(2) {
  animation: slideShow 10s infinite;
  animation-delay: 5s;
}

@keyframes slideShow {
  0%   { opacity: 0; z-index: 1; }
  5%   { opacity: 1; z-index: 1; }
  45%  { opacity: 1; z-index: 1; }
  50%  { opacity: 0; z-index: 0; }
  100% { opacity: 0; z-index: 0; }
}

/* 指示点样式 */
.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 10px;
  z-index: 2;
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
  .slider-container {
    max-width: 95%;
  }
  
  .slider {
    height: 400px;
  }
}

@media (max-width: 600px) {
  .slider {
    height: 350px;
  }
  
  .caption {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .slider {
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
  const dots = document.querySelectorAll('.dot');
  const slides = document.querySelectorAll('.slide');
  
  // 点击指示点切换图片
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // 移除所有动画
      slides.forEach(slide => {
        slide.style.animation = 'none';
      });
      
      // 更新活动指示点
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      
      // 重置所有幻灯片为初始状态
      slides.forEach(slide => {
        slide.style.opacity = '0';
        slide.style.zIndex = '0';
      });
      
      // 显示选中的幻灯片
      slides[index].style.opacity = '1';
      slides[index].style.zIndex = '1';
      
      // 重新启动动画
      setTimeout(() => {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.style.animation = `slideShow 10s infinite`;
          } else {
            slide.style.animation = `slideShow 10s infinite ${(i - index) * 5}s`;
          }
        });
      }, 50);
    });
  });
});
</script>