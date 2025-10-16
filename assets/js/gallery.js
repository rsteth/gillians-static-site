const YEARS = ['2023-24','2022','2021'];
const TABS = document.getElementById('yearTabs');
const G = document.getElementById('gallery');
const LB = {
  el: document.getElementById('lightbox'),
  img: document.getElementById('lbImg'),
  cap: document.getElementById('lbCap'),
  open(src, cap){ this.img.src=src; this.cap.textContent = cap||''; this.el.classList.add('open');},
  close(){ this.el.classList.remove('open'); this.img.src=''; this.cap.textContent='';}
};
window.LB = LB;
LB.el.addEventListener('click', (e)=>{ if(e.target===LB.el) LB.close(); });

function tabTemplate(year, active){ return `<button class="tab ${active?'active':''}" role="tab" aria-selected="${!!active}" onclick="loadYear('${year}', this)">${year}</button>`; }

TABS.innerHTML = YEARS.map((y,i)=>tabTemplate(y, i===0)).join('');

async function loadYear(year, btn){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  if(btn){ btn.classList.add('active'); }
  const res = await fetch(`../data/work-${year}.json`);
  const items = res.ok ? await res.json() : [];
  G.innerHTML = items.map(it=>`
    <figure class="thumb">
      <img src="${it.src}" alt="${it.title}" onclick="LB.open(this.src, '${it.title} - ${it.medium||''} ${it.size||''} ${it.year||''}')">
      <figcaption>${it.title}${it.year?` (${it.year})`:''}${it.medium?` — ${it.medium}`:''}${it.size?` — ${it.size}`:''}</figcaption>
    </figure>`).join('');
}

const initial = decodeURIComponent(location.hash.slice(1)) || YEARS[0];
loadYear(initial);