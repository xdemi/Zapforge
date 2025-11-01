// Zapforge interactive script (modal + toggles)
(function(){
  const priceData = {
    "iPhone 15 Pro":[["Amazon","$999","https://www.amazon.com/"],["eBay","$965","https://www.ebay.com/"],["AliExpress","$949","https://www.aliexpress.com/"]],
    "Samsung Galaxy S24 Ultra":[["Amazon","$1199","https://www.amazon.com/"],["eBay","$1150","https://www.ebay.com/"],["AliExpress","$1099","https://www.aliexpress.com/"]],
    "Google Pixel 9":[["Amazon","$799","https://www.amazon.com/"],["eBay","$769","https://www.ebay.com/"],["AliExpress","$749","https://www.aliexpress.com/"]],
    "AirPods Pro":[["Amazon","$199","https://www.amazon.com/"],["eBay","$185","https://www.ebay.com/"],["AliExpress","$169","https://www.aliexpress.com/"]],
    "Galaxy Buds FE":[["Amazon","$69","https://www.amazon.com/"],["eBay","$64","https://www.ebay.com/"],["AliExpress","$59","https://www.aliexpress.com/"]],
    "Sony WH-1000XM5":[["Amazon","$348","https://www.amazon.com/"],["eBay","$329","https://www.ebay.com/"],["AliExpress","$310","https://www.aliexpress.com/"]],
    "Apple Watch Series 10":[["Amazon","$399","https://www.amazon.com/"],["eBay","$379","https://www.ebay.com/"],["AliExpress","$349","https://www.aliexpress.com/"]],
    "MacBook Air M3":[["Amazon","$1199","https://www.amazon.com/"],["eBay","$1150","https://www.ebay.com/"],["AliExpress","$1099","https://www.aliexpress.com/"]]
  };
  const modal = document.getElementById('dealsModal');
  const dealsBody = document.getElementById('dealsBody');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');
  function openDeals(product) {
    const rows = priceData[product] || [];
    modalTitle.textContent = `${product} — Best Available Prices`;
    dealsBody.innerHTML = '';
    rows.forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${r[0]}</td><td>${r[1]}</td><td><a class="deal-link" href="${r[2]}" target="_blank" rel="noopener">Buy</a></td>`;
      dealsBody.appendChild(tr);
    });
    modal.setAttribute('aria-hidden', 'false');
  }
  modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.setAttribute('aria-hidden', 'true'); });
  document.querySelectorAll('.deal-btn').forEach(b => b.addEventListener('click', () => openDeals(b.dataset.product)));
  const gridBtn = document.getElementById('gridBtn');
  const carouselBtn = document.getElementById('carouselBtn');
  if (gridBtn && carouselBtn) {
    gridBtn.addEventListener('click', () => {
      document.querySelectorAll('.grid-view').forEach(el => el.style.display = 'grid');
      document.querySelectorAll('.carousel-view').forEach(el => el.style.display = 'none');
      gridBtn.classList.add('active'); carouselBtn.classList.remove('active');
    });
    carouselBtn.addEventListener('click', () => {
      document.querySelectorAll('.grid-view').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.carousel-view').forEach(el => el.style.display = 'block');
      gridBtn.classList.remove('active'); carouselBtn.classList.add('active');
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });
})();
