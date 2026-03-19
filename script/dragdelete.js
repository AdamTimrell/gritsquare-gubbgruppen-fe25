export function setupDragAndDelete(deleteUser, getAllUsers, displayAllUsers) {

const deleteZone = document.getElementById("deleteZone");

deleteZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  deleteZone.classList.add("hover");
});

deleteZone.addEventListener("dragleave", () => {
  deleteZone.classList.remove("hover");
});

deleteZone.addEventListener("drop", async (e) => {
  e.preventDefault();
  deleteZone.classList.remove("hover");

  const key = e.dataTransfer.getData("text/plain");

  if (key) {
    const success = await deleteUser(key);

    if (success) {
      const users = await getAllUsers();
      displayAllUsers(users);
    } else {
      alert("Kunde inte ta bort meddelandet");
    }
  }
});
}