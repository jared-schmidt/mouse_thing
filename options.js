// Saves options to chrome.storage
function save_options() {
    var color = document.getElementById('color').value;
    var circle_size = document.getElementById('circle_size').value;
    chrome.storage.sync.set({
        favoriteColor: color,
        circle_size: circle_size
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        favoriteColor: 'none',
        circle_size: '20'
    }, function(items) {
        document.getElementById('color').value = items.favoriteColor;
        document.getElementById('circle_size').value = items.circle_size;s
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
