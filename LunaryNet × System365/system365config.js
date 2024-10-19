const system365Config = {
    settings: {
        theme: "dark",
        autoSave: true,
        notifications: true
    },
    preferences: {
        language: "en",
        backupFrequency: "daily",
        errorReporting: "detailed"
    }
};

// Function to get configuration settings
function getConfig(setting) {
    return system365Config[setting] || null;
}

// Function to update configuration settings
function updateConfig(setting, value) {
    if (system365Config.hasOwnProperty(setting)) {
        system365Config[setting] = value;
        console.log(`Updated ${setting} to`, value);
    } else {
        console.error(`Setting ${setting} not found.`);
    }
}

// Example usage
console.log(getConfig('settings'));
updateConfig('preferences', { language: "cz", backupFrequency: "weekly", errorReporting: "summary" });
console.log(getConfig('preferences'));
