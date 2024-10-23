function generateRealmCode(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function generateMultipleRealmCodes(count = 100, length = 10) {
    const codes = [];
    for (let i = 0; i < count; i++) {
        codes.push(generateRealmCode(length));
    }
    return codes;
}

// Generování 100 Realm kódů
const realmCodes = generateMultipleRealmCodes(100);
console.log(realmCodes);
