---
permalink: /
title: "广东省空天网络与智能感知重点实验室"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---
{% include base_path %}




<div class="slider">
  <img src="/assets/images/image_20250707152638.jpg" alt="图1">
  <img src="/assets/images/image_20250707152730.jpg" alt="图2">
</div>

<style>
.slider {
  width: 100%;
  max-width: 800px;
  height: 300px;
  overflow: hidden;
  position: relative;
}
.slider img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: slideShow 10s infinite;
  opacity: 0;
}
.slider img:nth-child(1) { animation-delay: 0s; }
.slider img:nth-child(2) { animation-delay: 5s; }

@keyframes slideShow {
  0%   { opacity: 0; }
  5%   { opacity: 1; }
  45%  { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 0; }
}
</style>