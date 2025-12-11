async function loadFeatured(){
  const res = await fetch('data/featured.json');
  if(!res.ok) return;
  const items = await res.json();
  const grid = document.getElementById('featured');
  grid.classList.add('grid');
  grid.innerHTML = items.map(it=>`
    <article class="card">
      <a href="work/index.html#${it.year}">
        <img src="${it.thumb}" alt="${it.title}">
        <div class="meta">${it.title} — ${it.year}</div>
      </a>
    </article>`).join('');
}

async function loadHeroCopy(){
  const heading = document.querySelector('.hero h1');
  const blurb = document.querySelector('.hero p');
  try{
    const res = await fetch('data/content.json');
    if(!res.ok) return;
    const data = await res.json();
    if(data.hero?.headline) heading.textContent = data.hero.headline;
    if(data.hero?.subhead) blurb.textContent = data.hero.subhead;
  }catch(e){}
}

loadFeatured();
loadHeroCopy();