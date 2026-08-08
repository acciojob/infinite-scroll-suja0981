//your code here!
const list=document.getElementById("infi-list");

for(let i=1;i<=10;i++){
    addItem(i);
}

function addItem(){
	const li=document.createElement("li");
    li.textContent = `${number}`;
    list.appendChild(li);
}
window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        const currentCount = list.children.length;

        addItem(currentCount + 1);
        addItem(currentCount + 2);
    }
});
