# 广东省空天网络与智能感知重点实验室网站

本仓库用于维护实验室官网。网站由 Jekyll 生成，当前维护分支为 `cxl_dev`；所有面向网站的更新应提交并推送到该分支。

## 日常维护入口

| 要更新的内容 | 编辑位置 | 上传资源位置 |
| --- | --- | --- |
| 首页简介与近期动态 | `_pages/about.md` | `assets/images/` |
| 新闻动态 | `_pages/news.md` | 如有配图，放入 `assets/images/` |
| 人员构成 | `_pages/architecture.md` | 成员头像放入 `assets/images/authors/` |
| 研究方向、案例视频、最新文章 | `_pages/research.html`、`_data/articles.yml` | 方向背景放入 `assets/images/research/` |
| 开放资源、数据集、代码与平台 | `_pages/datasets.md` | 下载文件放入 `files/` |
| 近期成果 | `_pages/achievements.md` | 成果图放入 `assets/images/diagrams/` 或相关子目录 |
| 导航栏名称与顺序 | `_data/navigation.yml` | 无 |

## 新闻动态

在 `_pages/news.md` 的 `<ol class="news-list">` 内新增一条 `<li>`，建议按时间从新到旧排列：

```html
<li>
  <time datetime="2026">2026</time>
  <div>
    <h2>新闻标题</h2>
    <p>新闻正文。<a href="https://example.com" target="_blank" rel="noopener">查看详情</a></p>
  </div>
</li>
```

无明确年份的征稿或专题活动可使用 `<time>专题征稿</time>`。

## 课题组最新文章

文章数据集中维护在 `_data/articles.yml`。每篇文章必须包含 `title`、`authors`、`year`、`direction`、`type` 和 `venue`；`url` 可选。研究方向页会自动生成列表，并按方向、年份和类型筛选。

```yml
articles:
  - title: "Article title"
    authors: "Author A, Author B"
    year: "2025"
    direction: "isac"       # isac | uav | vitals
    type: "journal"         # journal | conference | magazine
    venue: "Journal or conference name"
    url: "https://doi.org/..."
```

方向取值：`isac` 为通信感知定位一体化，`uav` 为智能无人机与具身系统，`vitals` 为无线生命体征感知。文章类型会直接映射到筛选控件，请保持小写。

## 研究案例与视频

研究方向与案例分组位于 `_pages/research.html`。新增视频时，放入对应的 `<details class="case-group">`：

- 通信感知定位一体化：`id="isac"`
- 智能无人机与具身系统：`id="uav"`
- 无线生命体征感知：`id="vitals"`

Bilibili 视频使用 iframe，并保留 `autoplay=0`；本地 MP4 放入 `_pages/search_videos/` 或 `assets/video/` 后使用 `<video controls>` 引用。方向背景图分别存放为：

- `assets/images/research/isac.png`
- `assets/images/research/uav-mas.png`
- `assets/images/research/wireless-vitals.png`

## 开放资源

在 `_pages/datasets.md` 中新增资源卡片。大文件、压缩包、报告等先上传到 `files/`，再将下载地址填入卡片按钮的 `href`。外部平台、代码仓库或在线仿真系统可直接使用完整 HTTPS 地址。

## 图片与命名

- 使用 PNG、JPG 或 WebP；文件名使用英文小写和连字符，例如 `uwb-localization.png`。
- 人员头像使用 `assets/images/authors/`；研究方向卡片背景使用 `assets/images/research/`。
- 不覆盖已有图片。需要替换时创建新文件名，再更新页面引用。
- 图片应避免嵌入难以裁切的文字；方向背景会以半透明方式覆盖在卡片中。

## 发布流程

1. 修改页面、数据或资源文件。
2. 检查链接、图片路径和 YAML 缩进。
3. 提交并推送到 `cxl_dev`。
4. GitHub Pages 完成构建后，访问 `https://sanis-hitsz.github.io/` 检查页面。

若网站未更新，先确认 GitHub 仓库 `Settings` -> `Pages` 的发布分支为 `cxl_dev`，目录为 `/(root)`。
