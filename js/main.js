
// register the service worker if available
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}

window.addEventListener('online', function(e) {
    // re-sync data with server
    console.log("You are online");
    page.hideOffilineWarning();
    //load anything here
}, false);

window.addEventListener('offline', function(e) {
    // queue up events for server
    console.log("You are offline");
    page.showOfflineWarning();
}, false);

// check if the user is connected
if (navigator.onLine) {
    //load anything here
} else {
    // show offline message
    page.showOfflineWarning();
}

$("#offline-content").hide();
