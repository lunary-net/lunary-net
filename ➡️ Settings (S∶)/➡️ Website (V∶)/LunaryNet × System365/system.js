// JSON data for systems
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
        version: "v1.9.6",
        developers: "Lunary Network staff team",
        OS: "Windows 11 Pro",
        Language: "html5, css, js, json",
        system: "debug"
    }
};

// Class to handle system operations
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
            if (this.system.Language) {
                console.log(`Languages: ${this.system.Language}`);
            }
            if (this.system.system) {
                console.log(`System Mode: ${this.system.system}`);
            }
        }
    }

    addComponent(component) {
        this.system.components = this.system.components || [];
        this.system.components.push(component);
        console.log(`${component} added to ${this.system.title}.`);
    }

    removeComponent(component) {
        if (this.system.components) {
            const index = this.system.components.indexOf(component);
            if (index > -1) {
                this.system.components.splice(index, 1);
                console.log(`${component} removed from ${this.system.title}.`);
            } else {
                console.log(`${component} not found in ${this.system.title}.`);
            }
        } else {
            console.log(`${this.system.title} has no components.`);
        }
    }

    logSystemInfo() {
        console.log(this.system);
    }
}

// Example usage
const lunaryNet = new SystemManager('LunaryNetSystem365');
lunaryNet.initialize();
lunaryNet.addComponent('UserManagement');
lunaryNet.removeComponent('UserManagement');
lunaryNet.logSystemInfo();

const system365 = new SystemManager('System365');
system365.initialize();
system365.addComponent('SecurityModule');
system365.logSystemInfo();
