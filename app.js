// =======================================
// TypeScript-like Interface (for understanding)
// interface User {
//    id: number;
//    name: string;
//    email: string;
// }
// =======================================
// API Layer (Async Programming)
const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "laxmikanthreddy", email: "laxmikanthreddy@klh.edu.in" },
                        { id: 2, name: "vivek", email: "vivek@143" },
                        { id: 3, name: "partheev", email: "partheev@love" },
                        { id: 4, name: "sathivik", email: "chotu@143"},
                        { id: 5, name: "shanthi", email:"shanthi@1432"},
                        { id: 6, name: "chotu", email:"sathivik@1432"},
                        { id: 7, name: "king", email:"@1432"},
                        { id: 8, name: "danger", email:"book@143"},
                        { id: 9, name: "chotu", email:"sathivik@1432"},

                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
