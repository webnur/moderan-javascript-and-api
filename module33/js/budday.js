
// website name random user
// api link: https://randomuser.me/api/?results=5000
// rendom friend api
const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}

loadBuddies()
const displayBuddies = data => {
    // console.log(data);
    const buddies = data.results;

    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){

        console.log(buddy);

        const p = document.createElement('p');
        p.innerText =`name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}` ;

        buddiesDiv.appendChild(p)
        // console.log(buddy.email)
    }
}