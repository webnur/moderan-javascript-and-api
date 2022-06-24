
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
    
}



function displayUsers(data){

    const users = document.getElementById('users');
    for(const user of data){

    const userName = document.createElement('li');
    userName.innerText = `name: ${user.name}, Email: ${user.email}`;
    users.appendChild(userName)

    }


}