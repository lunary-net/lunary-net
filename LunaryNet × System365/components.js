export const components = [];

export function addComponent(component) {
    components.push(component);
    console.log(`${component} added.`);
}

export function removeComponent(component) {
    const index = components.indexOf(component);
    if (index > -1) {
        components.splice(index, 1);
        console.log(`${component} removed.`);
    } else {
        console.log(`${component} not found.`);
    }
}

export function listComponents() {
    console.log("Current components:", components);
}
