var posts=["posts/f1ac5ec8.html","posts/LaTeX常用表达式.html","posts/489d2b02.html","posts/30b5ce3c.html","posts/markdown语法.html","posts/Mathmap.html","posts/Mermaid画图.html","posts/96dfbe70.html","posts/4f7968c3.html","posts/328be7f8.html","posts/48a142a2.html","posts/f479e4d4.html","posts/6e9d639a.html","posts/94b524b3.html","posts/1fa216f2.html","posts/6457b245.html","posts/e6684ad8.html","posts/31317a0f.html","posts/ba2ef824.html","posts/c60188e0.html","posts/7c851fd.html","posts/5e168f7e.html","posts/50ff3135.html","posts/c022ec35.html","posts/2865e7f9.html","posts/c16236b1.html","posts/c8fdcefd.html","posts/a61e47fc.html","posts/f4ffe1c9.html","posts/489d2b02.html","posts/d7736deb.html","posts/d1768b01.html","posts/acdcb1d8.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };