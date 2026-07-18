const cards = document.querySelector(".cards");

const apps = [
{
name:"Offline Web Search",
image:"https://via.placeholder.com/300x180",
description:"Search websites and blogs offline."
},
{
name:"LibreTorrent",
image:"https://via.placeholder.com/300x180",
description:"Open-source torrent client."
},
{
name:"Journal",
image:"https://via.placeholder.com/300x180",
description:"Multilingual journal application."
},
{
name:"Task Companion",
image:"https://via.placeholder.com/300x180",
description:"Android productivity app."
},
{
name:"TapLock",
image:"https://via.placeholder.com/300x180",
description:"Secure your screen instantly."
},
{
name:"Petals",
image:"https://via.placeholder.com/300x180",
description:"Plant and garden manager."
}
];

apps.forEach(app => {
cards.innerHTML += `
<div class="card">
<img src="${app.image}" alt="${app.name}">
<h3>${app.name}</h3>
<p>${app.description}</p>
</div>
`;
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {
document.body.classList.toggle("dark");
};
