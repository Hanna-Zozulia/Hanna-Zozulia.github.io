(function(){
  var MENU = {
    breakfast: { label: "Завтраки", items: [
      {n:"Сырники с ягодным соусом", d:"Со сметаной и свежими ягодами", p:"7.20"},
      {n:"Омлет с овощами", d:"Три яйца, сезонные овощи, зелень", p:"6.50"},
      {n:"Овсяная каша с фруктами", d:"На молоке или воде, мёд по желанию", p:"5.40"}
    ]},
    main: { label: "Основные блюда", items: [
      {n:"Котлета по-домашнему", d:"С картофельным пюре и овощами", p:"10.90"},
      {n:"Паста с курицей", d:"В сливочном соусе с пармезаном", p:"10.50"},
      {n:"Греческий салат", d:"Овощи, фета, оливки, оливковое масло", p:"7.90"}
    ]},
    soup: { label: "Супы", items: [
      {n:"Куриный суп с домашней лапшой", d:"Наваристый бульон, зелень", p:"6.90"},
      {n:"Крем-суп из тыквы", d:"Со сливками и семечками", p:"6.40"}
    ]},
    dessert: { label: "Десерты", items: [
      {n:"Домашний чизкейк", d:"Classic New York style", p:"5.20"},
      {n:"Яблочный пирог", d:"С корицей, подаётся тёплым", p:"4.90"}
    ]},
    coffee: { label: "Кофе", items: [
      {n:"Cappuccino", d:"Классический эспрессо с молочной пенкой", p:"3.20"},
      {n:"Latte", d:"Мягкий кофе с молоком", p:"3.50"},
      {n:"Americano", d:"Эспрессо с горячей водой", p:"2.80"}
    ]}
  };

  function itemMarkup(item){
    return '<div class="menu-item"><div><div class="name">' + item.n + '</div><div class="desc">' + item.d + '</div></div><div class="price">' + item.p + ' €</div></div>';
  }

  function renderPreview(category){
    document.getElementById('menuPreview').innerHTML = MENU[category].items.map(itemMarkup).join('');
  }

  function renderFullMenu(){
    var html = '';
    Object.keys(MENU).forEach(function(key){
      html += '<div class="modal-cat">' + MENU[key].label + '</div>';
      html += MENU[key].items.map(itemMarkup).join('');
    });
    document.getElementById('modalBody').innerHTML = html;
  }

  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(item){ item.classList.remove('active'); });
      tab.classList.add('active');
      renderPreview(tab.dataset.cat);
    });
  });
  renderPreview('breakfast');

  var modal = document.getElementById('menuModal');
  var closeModal = function(){
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };
  document.getElementById('openMenuModal').addEventListener('click', function(){
    renderFullMenu();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('closeModal').addEventListener('click', closeModal);
  modal.addEventListener('click', function(event){ if(event.target === modal) closeModal(); });
  document.addEventListener('keydown', function(event){ if(event.key === 'Escape') closeModal(); });

  var burger = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', function(){
    var open = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobileMenu.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  var sticky = document.getElementById('mobileSticky');
  var stickyVisible = false;
  window.addEventListener('scroll', function(){
    var show = window.scrollY > 420;
    if(show !== stickyVisible){
      stickyVisible = show;
      sticky.classList.toggle('show', show);
    }
  }, {passive:true});

  var revealItems = document.querySelectorAll('.reveal');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced || !('IntersectionObserver' in window)){
    revealItems.forEach(function(item){ item.classList.add('in'); });
  } else {
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    revealItems.forEach(function(item){ observer.observe(item); });
  }
})();
