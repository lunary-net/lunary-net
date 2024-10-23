export const services = [];

export function addService(name, execute) {
    services.push({ name, execute });
    console.log(`Service ${name} added.`);
}

export function executeService(name) {
    const service = services.find(service => service.name === name);
    if (service) {
        service.execute();
        console.log(`Service ${name} executed.`);
    } else {
        console.log(`Service ${name} not found.`);
    }
}
