
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e=>{
cursor.style.left = e.clientX + 'px';
cursor.style.top = e.clientY + 'px';
});

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
},{threshold:0.2});
sections.forEach(section=>observer.observe(section));
