---
title: "典型案例"
permalink: /teachingachievement/example/
# layout: archive
author_profile: false
parent: "“高时效-强泛化-自演进”的电子信息类拔尖创新人才培养模式探索与实践"
---

<div class="student-case">
  <img src="/assets/images/student-project.jpg" alt="学生项目展示" class="case-image">
  
  <div class="case-content">
    <h2>张明：智能校园导航系统项目</h2>
    <p><strong>项目背景：</strong>张明同学在大三上学期参与的创新实践项目，旨在解决新生在校内迷路的问题。</p>
    <p><strong>技术栈：</strong>使用React框架开发前端界面，结合Node.js后端服务，集成百度地图API实现路径规划功能。</p>
    <p><strong>项目亮点：</strong>
    <ul>
      <li>实现实时室内外导航，精度达到2米以内</li>
      <li>开发无障碍路径规划，方便特殊需求用户</li>
      <li>集成课程表同步，智能推荐最优路径</li>
    </ul>
    </p>
    <p><strong>成果：</strong>该项目获得校级创新大赛一等奖，目前已在校园内小范围试用，用户满意度达95%。</p>
    <p><strong>个人成长：</strong>通过这个项目，张明同学掌握了全栈开发技能，提升了项目管理和团队协作能力。</p>
  </div>
  <div style="clear: both;"></div>
</div>


[← 返回](/teachingachievement/)
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

.student-case {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-left: 5px solid #4e54c8;
}

.case-images {
  display: flex;
  flex-direction: column; /* 两张竖排可以改成 row 横排 */
  gap: 30px;
  margin-right: 25px;
}

.case-image {
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 25px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  border: 3px solid white;
  flex-shrink: 0; /* 防止图片被压缩 */
}

.case-content {
  flex: 1;
  min-width: 300px; /* 避免在小屏幕时太窄 */
}

.case-content h2 {
  color: #2d3748;
  margin-top: 0;
  border-bottom: 2px solid #4e54c8;
  padding-bottom: 10px;
}

.case-content p {
  line-height: 1.8;
  color: #4a5568;
  text-align: justify;
  margin-bottom: 15px;
}

.case-content ul {
  padding-left: 20px;
  margin: 10px 0;
}

.case-content li {
  margin-bottom: 8px;
  line-height: 1.6;
}
