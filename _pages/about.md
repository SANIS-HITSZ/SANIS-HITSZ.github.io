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

/* CSS动画关键帧 - 8秒切换 */
.slide:nth-child(1) {
  animation: slideShow 16s infinite;
}

.slide:nth-child(2) {
  animation: slideShow 16s infinite;
  animation-delay: 8s;
}

@keyframes slideShow {
  0%   { opacity: 0; z-index: 1; }
  5%   { opacity: 1; z-index: 1; } /* 淡入 */
  45%  { opacity: 1; z-index: 1; } /* 保持显示 */
  50%  { opacity: 0; z-index: 0; } /* 淡出 */
  100% { opacity: 0; z-index: 0; } /* 保持隐藏 */
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
}
</style>