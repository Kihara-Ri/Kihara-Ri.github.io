var posts=["posts/50ff3135.html","posts/a61e47fc.html","posts/30b5ce3c.html","posts/96dfbe70.html","posts/d1768b01.html","posts/31317a0f.html","posts/acdcb1d8.html","posts/e6684ad8.html","posts/f4ffe1c9.html","posts/5e168f7e.html","posts/2865e7f9.html","posts/c8fdcefd.html","posts/d7736deb.html","posts/c16236b1.html","posts/328be7f8.html","posts/6457b245.html","posts/6e9d639a.html","posts/c4c88997.html","posts/489d2b02.html","posts/f1ac5ec8.html","posts/4f7968c3.html","posts/ba2ef824.html","posts/f479e4d4.html","posts/94b524b3.html","posts/c60188e0.html","posts/48a142a2.html","posts/c022ec35.html","posts/87c851fd.html","posts/1fa216f2.html","posts/9a11e3ae.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };