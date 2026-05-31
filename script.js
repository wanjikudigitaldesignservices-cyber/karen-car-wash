document.addEventListener('DOMContentLoaded',()=>{
    const nb=document.getElementById('navbar');window.addEventListener('scroll',()=>nb.classList.toggle('scrolled',window.scrollY>50));
    const h=document.getElementById('hamburger'),l=document.getElementById('navLinks');
    h.addEventListener('click',()=>{h.classList.toggle('active');l.classList.toggle('active')});
    l.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{h.classList.remove('active');l.classList.remove('active')}));
    const obs=new IntersectionObserver(e=>e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('visible')}),{threshold:0.1});
    document.querySelectorAll('.price-card,.why-card,.review-card,.cc').forEach(el=>{el.classList.add('fade-in');obs.observe(el)});
    // Animated star counter
    const starObs=new IntersectionObserver(e=>e.forEach(en=>{if(en.isIntersecting){en.target.style.animation='starPulse 1s ease';starObs.unobserve(en.target)}}),{threshold:0.5});
    document.querySelectorAll('.five-stars').forEach(el=>starObs.observe(el));
    // Booking
    document.getElementById('bookingForm').addEventListener('submit',e=>{
        e.preventDefault();const d=Object.fromEntries(new FormData(e.target));d.id=Date.now();d.submittedAt=new Date().toISOString();d.status='New';
        const all=JSON.parse(localStorage.getItem('kcw_bookings')||'[]');all.push(d);localStorage.setItem('kcw_bookings',JSON.stringify(all));
        e.target.reset();showToast('✅ Booking confirmed! We\'ll see you soon.');
    });
});
function showToast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),4000)}
