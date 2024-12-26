function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = 'BOTID-'; 
    for (let i = 0; i < 8; i++) { 
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters[randomIndex];
    }
    return randomId;
}

document.getElementById('btn').addEventListener('click', function () {
    const botName = document.getElementById('name').value;
    const botType = document.getElementById('bot').value;
    const botDescription = document.getElementById('text').value;

    if (!botName || !botType || !botDescription) {
        alert('Please fill out all fields!');
        return;
    }
    const botId = generateRandomId(); 
    alert(`your "${botId}" is created succesfully`);
});