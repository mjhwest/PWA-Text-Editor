const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// DONE TODO: Add an event handler to the `beforeinstallprompt` event DONE
window.addEventListener('beforeinstallprompt', (event) => {

    //store the triggred events 
    window.deferredPrompt = event;

    //Remove the hidden class from the button. 
    butInstall.classList.toggle('hidden', false);

});

// DONE  TODO: Implement a click event handler on the `butInstall` element DONE
butInstall.addEventListener('click', async() => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // Show prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});