// import Page from './page';
// import Offline from './offline';

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
    // Arrivals.loadData();
}, false);

window.addEventListener('offline', function(e) {
    // queue up events for server
    console.log("You are offline");
    page.showOfflineWarning();
}, false);

// check if the user is connected
if (navigator.onLine) {
    // Arrivals.loadData();
} else {
    // show offline message
    page.showOfflineWarning();
}

page.load("login.html");
$("#offline-content").hide();
