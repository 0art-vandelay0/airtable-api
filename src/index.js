import './css/styles.css';
import AirtableLogic from './js/airtable.js';

// UI Logic

function displayRecords(records) {
    const list = document.getElementById("records-list");
    list.innerHTML = "";
    records.forEach(record => {
        const listItem = document.createElement("li");
        listItem.textContent = record;
        list.appendChild(listItem);
    });
    list.classList.remove("hidden");
}

// Event Handler
document.getElementById('fetch-records').addEventListener('click', async () => {
    const base = AirtableLogic.initializeAirtable();
    try {
        const records = await AirtableLogic.fetchRecords(base);
        displayRecords(records);
    } catch (err) {
        console.error("Error:", err);
    }
});
