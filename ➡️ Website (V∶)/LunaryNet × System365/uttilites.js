export function logEvent(event, data) {
    console.log(`Event: ${event}, Data: ${data}`);
}

export function validateComponent(component) {
    if (component && typeof component === 'string') {
        return true;
    } else {
        console.error('Invalid component.');
        return false;
    }
}
