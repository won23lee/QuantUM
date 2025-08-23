
// Simple active link highlighter
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === here){ a.classList.add('active'); }
  });
})();
