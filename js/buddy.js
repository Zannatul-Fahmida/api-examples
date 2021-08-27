const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = buddy =>{
    console.log(buddy);
    const buddies = buddy.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
        const img = document.createElement('img');
        img.src = buddy.picture.large;
        buddiesDiv.appendChild(img);
    }
}