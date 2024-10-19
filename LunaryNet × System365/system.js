import { logEvent, validateComponent } from './helper.js';

const systemData = {
    LunaryNetSystem365: {
        title: "LunaryNetSystem365",
        description: "Lunary Network » System 365",
        version: "v3.9.8",
        developers: "Vojtaa3181",
        OS: "Windows 11 Pro"
    },
    System365: {
        title: "System365 ツ",
        description: "LunarySystem365",
        version: "v2.0",
        developers: "Lunary Network staff team",
        OS: "Windows 11 Pro",
        languages: ["HTML", "CSS", "JavaScript", "JSON"],
        system: "release"
    }
};

class SystemManager {
    constructor(systemName) {
        this.system = systemData[systemName];
        if (!this.system) {
            console.error(`System ${systemName} not found.`);
        }
    }

    initialize() {
        if (this.system) {
            console.log(`Initializing ${this.system.title}...`);
            console.log(`Description: ${this.system.description}`);
            console.log(`Version: ${this.system.version}`);
            console.log(`Developers: ${this.system.developers}`);
            console.log(`Operating System: ${this.system.OS}`);
            if (this.system.languages) {
                console.log(`Languages: ${this.system.languages.join(', ')}`);
            }
            if (this.system.system) {
                console.log(`System Mode: ${this.system.system}`);
            }
            this.triggerEvent('initialized');
        }
    }

    addComponent(component) {
        if (validateComponent(component)) {
            this.system.components = this.system.components || [];
            this.system.components.push(component);
            logEvent('componentAdded', component);
        }
    }

    removeComponent(component) {
        if (this.system.components) {
            const index = this.system.components.indexOf(component);
            if (index > -1) {
                this.system.components.splice(index, 1);
                logEvent('componentRemoved', component);
            } else {
                logEvent('componentNotFound', component);
            }
        } else {
            logEvent('noComponents', this.system.title);
        }
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
        console.log(this.system);
    }

    updateConfiguration(newData) {
        Object.assign(this.system, newData);
        this.triggerEvent('configurationUpdated', newData);
    }
}

// Example usage
const system365 = new SystemManager('System365');
system365.on('initialized', () => console.log(`${system365.system.title} has been initialized.`));
system365.on('componentAdded', (component) => console.log(`Event: ${component} was added.`));
system365.on('componentRemoved', (component) => console.log(`Event: ${component} was removed.`));
system365.on('configurationUpdated', (newConfig) => console.log('Configuration updated:', newConfig));

system365.initialize();
system365.addComponent('UserManagement');
system365.addComponent('AnalyticsModule');
system365.removeComponent('UserManagement');
system365.logSystemInfo();

// Update configuration example
system365.updateConfiguration({ version: 'v2.1', system: 'debug' });
system365.logSystemInfo();
