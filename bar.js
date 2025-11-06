function jhahyge3678a() {
  const style = document.createElement('style');
  style.setAttribute('nonce', 'jhahyge3678a');
  style.textContent = `
    :root{--altura:36px}
    body{padding-top:0 !important;margin:0 0 0 auto !important}
    .top-bar-jhahyge3678a{list-style:none;background:hsl(0, 0%, 97%);border-bottom:1px solid hsl(0, 0%, 87%);font-size:14px;font-family:ui-monospace, monospace;display:flex;align-items:center;justify-content:space-around;z-index:99999;margin:0;padding:0;height:var(--altura);white-space:nowrap;overflow-x:auto;overflow-y:hidden;scrollbar-width:none}
    .top-bar-jhahyge3678a::-webkit-scrollbar{display:none}
    .top-bar-jhahyge3678a *{margin:0;padding:0}
    .top-bar-jhahyge3678a li{margin:0}
    .top-bar-jhahyge3678a ul li a{padding:10px 6px}
    .top-bar-jhahyge3678a a{flex-shrink:0;font-weight:400}
    .top-bar-jhahyge3678a a,.top-bar-jhahyge3678a a:visited{color:hsl(229, 100%, 39%);text-decoration:underline}
    .top-bar-jhahyge3678a a:hover{color:hsl(240, 63%, 27%)}
    @media (max-width: 728px){.top-bar-jhahyge3678a{justify-content:start;column-gap:1rem;padding-inline:1rem}}
    @media (prefers-color-scheme: dark){
      .top-bar-jhahyge3678a{background-color:hsl(0, 0%, 18%);box-shadow:none}
      .top-bar-jhahyge3678a a,.top-bar-jhahyge3678a a:visited{color:hsl(224, 100%, 83%)}
      .top-bar-jhahyge3678a a:hover{color:hsl(224, 100%, 71%)}
    }
    header.container{margin-top:1rem}
    .side-nav.fixed{padding-top:var(--altura)}
  `;

  const ul = document.createElement('ul');
  ul.className = 'top-bar-jhahyge3678a';
  const links = [
    ['Blog', 'https://manualdousuario.net/'],
    ['Órbita', 'https://manualdousuario.net/orbita/'],
    ['Assine', 'https://manualdousuario.net/apoie/', true],
    ['PC do Manual', 'https://pcdomanual.com/'],
    ['Podcasts', 'https://manualdousuario.net/podcast/'],
    ['Lojinha', 'https://manualdousuario.net/loja/'],
    ['Lerama', 'https://lerama.pcdomanual.com'],
  ];

  links.forEach(([text, href, bold]) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    if (bold) a.style.fontWeight = 'bold';
    li.appendChild(a);
    ul.appendChild(li);
  });

  document.body.prepend(ul);
  document.head.appendChild(style);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', jhahyge3678a);
} else {
  jhahyge3678a();
}
