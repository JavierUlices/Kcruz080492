const loadDataBtn = document.getElementById("loadDataBtn");
const userList = document.getElementById("userList");
async function loadUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.status}`);
        }
        const users = await response.json();
        userList.innerHTML = "";
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}
loadDataBtn.addEventListener("click", loadUserData);