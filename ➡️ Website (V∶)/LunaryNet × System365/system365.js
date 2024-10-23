import { components, addComponent, removeComponent, listComponents } from './components.js';
import { services, addService, executeService } from './services.js';
import { logEvent, validateComponent } from './utilities.js';

const system365Data = {
    title: "System365 - LunaryNet",
    description: "LunaryNet System365 New Version",
    version: "v3.9.8",
    softversion: "v1.9.6",
    Editors: "LunaryNetDev, Vojtaa3181",
    Developers: "Vojtaa3181",
    OS: "Windows 11",
    CodeLang: "JS, JSON, HTML, CSS",
    Device: "Windows 7-11, Android, PlayStasion PS3-5, Nintendo",
    serviceUrl: "https://github.com/lunary-net/lunary-network.mc/blob/main/README.md",
    websiteUrl: "https://lunary-net.github.io/lunary-network.mc",
    system365Url: "https://github.com/lunary-net/System365",
    services: []
};

class System365 {
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.version = data.version;
        this.softversion = data.softversion;
        this.Editors = data.Editors;
        this.Developers = data.Developers;
        this.OS = data.OS;
        this.CodeLang = data.CodeLang;
        this.Device = data.Device;
        this.serviceUrl = data.serviceUrl;
        this.websiteUrl = data.websiteUrl;
        this.system365Url = data.system365Url;
        this.components = components;
        this.events = {};
        this.services = data.services;
    }

    initialize() {
        logEvent('initialized', this.title);
        console.log(`Initializing ${this.title}...`);
        console.log(`Description: ${this.description}`);
        console.log(`Version: ${this.version}`);
        console.log(`Software Version: ${this.softversion}`);
        console.log(`Editors: ${this.Editors}`);
        console.log(`Developers: ${this.Developers}`);
        console.log(`Operating System: ${this.OS}`);
        console.log(`Code Languages: ${this.CodeLang}`);
        console.log(`Devices: ${this.Device}`);
        console.log(`Service URL: ${this.serviceUrl}`);
        console.log(`Website URL: ${this.websiteUrl}`);
        console.log(`System365 URL: ${this.system365Url}`);
    }

    addComponent(component) {
        if (validateComponent(component)) {
            addComponent(component);
            logEvent('componentAdded', component);
        }
    }

    removeComponent(component) {
        if (validateComponent(component)) {
            removeComponent(component);
            logEvent('componentRemoved', component);
        }
    }

    listComponents() {
        listComponents();
    }

    addService(serviceName, serviceFunction) {
        addService(serviceName, serviceFunction);
        logEvent('serviceAdded', serviceName);
    }

    executeService(serviceName) {
        executeService(serviceName);
        logEvent('serviceExecuted', serviceName);
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    triggerEvent(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }

    logSystemInfo() {
        console.log(this);
    }

    updateConfiguration(newData) {
        Object.assign(this, newData);
        this.triggerEvent('configurationUpdated', newData);
    }
}

// Example usage
const system365 = new System365(system365Data);

system365.on('initialized', () => console.log(`${system365.title} has been initialized.`));
system365.on('componentAdded', (component) => console.log(`Event: ${component} was added.`));
system365.on('componentRemoved', (component) => console.log(`Event: ${component} was removed.`));
system365.on('configurationUpdated', (newConfig) => console.log('Configuration updated:', newConfig));

system365.initialize();
system365.addComponent('UserManagement');
system365.addComponent('AnalyticsModule');
system365.removeComponent('UserManagement');
system365.listComponents();

// Update configuration example
system365.updateConfiguration({ version: 'v4.0', system: 'release' });
system365.logSystemInfo();

// Add and execute services example
system365.addService('Backup', () => console.log('Backup service executed.'));
system365.executeService('Backup');
