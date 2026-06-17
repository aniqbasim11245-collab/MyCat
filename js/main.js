console.log("MyCAT website loaded");

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
},
{
threshold:0.15
}
);
reveals.forEach(item=>{
observer.observe(item);
});