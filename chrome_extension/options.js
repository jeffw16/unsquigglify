let page = document.getElementById('buttonDiv');
function constructOptions() {
    let button = document.createElement('button');
    button.innerHTML = "Latin only";
    
    button.addEventListener('click', function() {
        chrome.storage.sync.set({mode: 0}, function() {
            console.log('Mode is Latin only');
        })
    });
    page.appendChild(button);

    let button2 = document.createElement('button');
    button2.innerHTML = "Devanagari only";
    
    button2.addEventListener('click', function() {
        chrome.storage.sync.set({mode: 1}, function() {
            console.log('Mode is Devanagari only');
        })
    });
    page.appendChild(button2);

    let button3 = document.createElement('button');
    button3.innerHTML = "Devanagari + Latin";
    
    button3.addEventListener('click', function() {
        chrome.storage.sync.set({mode: 2}, function() {
            console.log('Mode is Devanagari + Latin');
        })
    });
    page.appendChild(button3);
}
constructOptions();