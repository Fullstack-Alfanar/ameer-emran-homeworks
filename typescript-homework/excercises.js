"use strict";
// question 1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.promisifyAll = exports.api = exports.promisify = exports.requestCoffeeMachineQueueLength = exports.requestCurrentServerTime = exports.requestUsers = exports.requestAdmins = exports.swap = exports.adminsOfAge23 = exports.usersOfAge23 = exports.filterPersons = exports.filterUsers = exports.isUser = exports.isAdmin = exports.persons = exports.logPerson = exports.users = void 0;
exports.users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
console.log('Users:');
exports.users.forEach(logPerson);
exports.users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
console.log('Users:');
exports.users.forEach(logPerson);
exports.persons /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
exports.persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
exports.persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(person) {
    var additionalInformation;
    if (person.role) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
exports.persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(person) {
    var additionalInformation;
    if ('role' in person) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
function isAdmin(person) {
    return person.type === 'admin';
}
exports.isAdmin = isAdmin;
function isUser(person) {
    return person.type === 'user';
}
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
console.log('Admins:');
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
exports.persons.filter(isUser).forEach(logPerson);
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
function isAdmin(person) {
    return person.type === 'admin';
}
exports.isAdmin = isAdmin;
function isUser(person) {
    return person.type === 'user';
}
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
console.log('Admins:');
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
exports.persons.filter(isUser).forEach(logPerson);
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];
var isAdmin = function (person) { return person.type === 'admin'; };
exports.isAdmin = isAdmin;
var isUser = function (person) { return person.type === 'user'; };
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
function filterUsers(persons, criteria) {
    return persons.filter(isUser).filter(function (user) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return user[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterUsers = filterUsers;
console.log('Users of age 23:');
filterUsers(exports.persons, {
    age: 23
}).forEach(logPerson);
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];
var isAdmin = function (person) { return person.type === 'admin'; };
exports.isAdmin = isAdmin;
var isUser = function (person) { return person.type === 'user'; };
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
function filterUsers(persons, criteria) {
    return persons.filter(isUser).filter(function (user) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return user[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterUsers = filterUsers;
console.log('Users of age 23:');
filterUsers(exports.persons, {
    age: 23
}).forEach(logPerson);
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
exports.logPerson = logPerson;
function filterPersons(persons, personType, criteria) {
    return persons
        .filter(function (person) { return person.type === personType; })
        .filter(function (person) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterPersons = filterPersons;
exports.usersOfAge23 = filterPersons(exports.persons, 'user', { age: 23 });
exports.adminsOfAge23 = filterPersons(exports.persons, 'admin', { age: 23 });
console.log('Users of age 23:');
exports.usersOfAge23.forEach(logPerson);
console.log();
console.log('Admins of age 23:');
exports.adminsOfAge23.forEach(logPerson);
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
exports.logPerson = logPerson;
var getObjectKeys = function (obj) { return Object.keys(obj); };
function filterPersons(persons, personType, criteria) {
    return persons
        .filter(function (person) { return person.type === personType; })
        .filter(function (person) {
        var criteriaKeys = getObjectKeys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterPersons = filterPersons;
exports.usersOfAge23 = filterPersons(exports.persons, 'user', { age: 23 });
exports.adminsOfAge23 = filterPersons(exports.persons, 'admin', { age: 23 });
console.log('Users of age 23:');
exports.usersOfAge23.forEach(logPerson);
console.log();
console.log('Admins of age 23:');
exports.adminsOfAge23.forEach(logPerson);
function logUser(user) {
    var pos = exports.users.indexOf(user) + 1;
    console.log(" - #".concat(pos, " User: ").concat(user.name, ", ").concat(user.age, ", ").concat(user.occupation));
}
function logAdmin(admin) {
    var pos = admins.indexOf(admin) + 1;
    console.log(" - #".concat(pos, " Admin: ").concat(admin.name, ", ").concat(admin.age, ", ").concat(admin.role));
}
var admins = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];
var users = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];
function swap(v1, v2) {
    return [v2, v1];
}
exports.swap = swap;
function test1() {
    console.log('test1:');
    var _a = swap(admins[0], exports.users[1]), secondUser = _a[0], firstAdmin = _a[1];
    logUser(secondUser);
    logAdmin(firstAdmin);
}
function test2() {
    console.log('test2:');
    var _a = swap(exports.users[0], admins[1]), secondAdmin = _a[0], firstUser = _a[1];
    logAdmin(secondAdmin);
    logUser(firstUser);
}
function test3() {
    console.log('test3:');
    var _a = swap(exports.users[0], exports.users[1]), secondUser = _a[0], firstUser = _a[1];
    logUser(secondUser);
    logUser(firstUser);
}
function test4() {
    console.log('test4:');
    var _a = swap(admins[1], admins[0]), firstAdmin = _a[0], secondAdmin = _a[1];
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}
function test5() {
    console.log('test5:');
    var _a = swap(123, 'Hello World'), stringValue = _a[0], numericValue = _a[1];
    console.log(" - String: ".concat(stringValue));
    console.log(" - Numeric: ".concat(numericValue));
}
[test1, test2, test3, test4, test5].forEach(function (test) { return test(); });
function logUser(user) {
    var pos = exports.users.indexOf(user) + 1;
    console.log(" - #".concat(pos, " User: ").concat(user.name, ", ").concat(user.age, ", ").concat(user.occupation));
}
function logAdmin(admin) {
    var pos = admins.indexOf(admin) + 1;
    console.log(" - #".concat(pos, " Admin: ").concat(admin.name, ", ").concat(admin.age, ", ").concat(admin.role));
}
var admins = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];
var users = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];
function swap(v1, v2) {
    return [v2, v1];
}
exports.swap = swap;
function test1() {
    console.log('test1:');
    var _a = swap(admins[0], exports.users[1]), secondUser = _a[0], firstAdmin = _a[1];
    logUser(secondUser);
    logAdmin(firstAdmin);
}
function test2() {
    console.log('test2:');
    var _a = swap(exports.users[0], admins[1]), secondAdmin = _a[0], firstUser = _a[1];
    logAdmin(secondAdmin);
    logUser(firstUser);
}
function test3() {
    console.log('test3:');
    var _a = swap(exports.users[0], exports.users[1]), secondUser = _a[0], firstUser = _a[1];
    logUser(secondUser);
    logUser(firstUser);
}
function test4() {
    console.log('test4:');
    var _a = swap(admins[1], admins[0]), firstAdmin = _a[0], secondAdmin = _a[1];
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}
function test5() {
    console.log('test5:');
    var _a = swap(123, 'Hello World'), stringValue = _a[0], numericValue = _a[1];
    console.log(" - String: ".concat(stringValue));
    console.log(" - Numeric: ".concat(numericValue));
}
[test1, test2, test3, test4, test5].forEach(function (test) { return test(); });
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];
function isAdmin(person) {
    return person.type === 'admin';
}
function isUser(person) {
    return person.type === 'user';
}
function isPowerUser(person) {
    return person.type === 'powerUser';
}
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = "".concat(person.role, ", ").concat(person.occupation);
    }
    console.log("".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
console.log('Admins:');
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
exports.persons.filter(isUser).forEach(logPerson);
console.log();
console.log('Power users:');
exports.persons.filter(isPowerUser).forEach(logPerson);
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];
function isAdmin(person) {
    return person.type === 'admin';
}
function isUser(person) {
    return person.type === 'user';
}
function isPowerUser(person) {
    return person.type === 'powerUser';
}
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = "".concat(person.role, ", ").concat(person.occupation);
    }
    console.log("".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
console.log('Admins:');
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
exports.persons.filter(isUser).forEach(logPerson);
console.log();
console.log('Power users:');
exports.persons.filter(isPowerUser).forEach(logPerson);
var admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
var users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];
function requestAdmins(callback) {
    callback({
        status: 'success',
        data: admins
    });
}
exports.requestAdmins = requestAdmins;
function requestUsers(callback) {
    callback({
        status: 'success',
        data: exports.users
    });
}
exports.requestUsers = requestUsers;
function requestCurrentServerTime(callback) {
    callback({
        status: 'success',
        data: Date.now()
    });
}
exports.requestCurrentServerTime = requestCurrentServerTime;
function requestCoffeeMachineQueueLength(callback) {
    callback({
        status: 'error',
        error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
}
exports.requestCoffeeMachineQueueLength = requestCoffeeMachineQueueLength;
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
function startTheApp(callback) {
    requestAdmins(function (adminsResponse) {
        console.log('Admins:');
        if (adminsResponse.status === 'success') {
            adminsResponse.data.forEach(logPerson);
        }
        else {
            return callback(new Error(adminsResponse.error));
        }
        console.log();
        requestUsers(function (usersResponse) {
            console.log('Users:');
            if (usersResponse.status === 'success') {
                usersResponse.data.forEach(logPerson);
            }
            else {
                return callback(new Error(usersResponse.error));
            }
            console.log();
            requestCurrentServerTime(function (serverTimeResponse) {
                console.log('Server time:');
                if (serverTimeResponse.status === 'success') {
                    console.log("   ".concat(new Date(serverTimeResponse.data).toLocaleString()));
                }
                else {
                    return callback(new Error(serverTimeResponse.error));
                }
                console.log();
                requestCoffeeMachineQueueLength(function (coffeeMachineQueueLengthResponse) {
                    console.log('Coffee machine queue length:');
                    if (coffeeMachineQueueLengthResponse.status === 'success') {
                        console.log("   ".concat(coffeeMachineQueueLengthResponse.data));
                    }
                    else {
                        return callback(new Error(coffeeMachineQueueLengthResponse.error));
                    }
                    callback(null);
                });
            });
        });
    });
}
startTheApp(function (e) {
    console.log();
    if (e) {
        console.log("Error: \"".concat(e.message, "\", but it's fine, sometimes errors are inevitable."));
    }
    else {
        console.log('Success!');
    }
});
var admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
var users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];
function requestAdmins(callback) {
    callback({
        status: 'success',
        data: admins
    });
}
exports.requestAdmins = requestAdmins;
function requestUsers(callback) {
    callback({
        status: 'success',
        data: exports.users
    });
}
exports.requestUsers = requestUsers;
function requestCurrentServerTime(callback) {
    callback({
        status: 'success',
        data: Date.now()
    });
}
exports.requestCurrentServerTime = requestCurrentServerTime;
function requestCoffeeMachineQueueLength(callback) {
    callback({
        status: 'error',
        error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
}
exports.requestCoffeeMachineQueueLength = requestCoffeeMachineQueueLength;
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
function startTheApp(callback) {
    requestAdmins(function (adminsResponse) {
        console.log('Admins:');
        if (adminsResponse.status === 'success') {
            adminsResponse.data.forEach(logPerson);
        }
        else {
            return callback(new Error(adminsResponse.error));
        }
        console.log();
        requestUsers(function (usersResponse) {
            console.log('Users:');
            if (usersResponse.status === 'success') {
                usersResponse.data.forEach(logPerson);
            }
            else {
                return callback(new Error(usersResponse.error));
            }
            console.log();
            requestCurrentServerTime(function (serverTimeResponse) {
                console.log('Server time:');
                if (serverTimeResponse.status === 'success') {
                    console.log("   ".concat(new Date(serverTimeResponse.data).toLocaleString()));
                }
                else {
                    return callback(new Error(serverTimeResponse.error));
                }
                console.log();
                requestCoffeeMachineQueueLength(function (coffeeMachineQueueLengthResponse) {
                    console.log('Coffee machine queue length:');
                    if (coffeeMachineQueueLengthResponse.status === 'success') {
                        console.log("   ".concat(coffeeMachineQueueLengthResponse.data));
                    }
                    else {
                        return callback(new Error(coffeeMachineQueueLengthResponse.error));
                    }
                    callback(null);
                });
            });
        });
    });
}
startTheApp(function (e) {
    console.log();
    if (e) {
        console.log("Error: \"".concat(e.message, "\", but it's fine, sometimes errors are inevitable."));
    }
    else {
        console.log('Success!');
    }
});
var admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
var users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];
function promisify(arg) {
    return null;
}
exports.promisify = promisify;
var oldApi = {
    requestAdmins: function (callback) {
        callback({
            status: 'success',
            data: admins
        });
    },
    requestUsers: function (callback) {
        callback({
            status: 'success',
            data: exports.users
        });
    },
    requestCurrentServerTime: function (callback) {
        callback({
            status: 'success',
            data: Date.now()
        });
    },
    requestCoffeeMachineQueueLength: function (callback) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
        });
    }
};
exports.api = {
    requestAdmins: promisify(oldApi.requestAdmins),
    requestUsers: promisify(oldApi.requestUsers),
    requestCurrentServerTime: promisify(oldApi.requestCurrentServerTime),
    requestCoffeeMachineQueueLength: promisify(oldApi.requestCoffeeMachineQueueLength)
};
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
function startTheApp() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    console.log('Admins:');
                    return [4 /*yield*/, exports.api.requestAdmins()];
                case 1:
                    (_h.sent()).forEach(logPerson);
                    console.log();
                    console.log('Users:');
                    return [4 /*yield*/, exports.api.requestUsers()];
                case 2:
                    (_h.sent()).forEach(logPerson);
                    console.log();
                    console.log('Server time:');
                    _b = (_a = console).log;
                    _c = "   ".concat;
                    _d = Date.bind;
                    return [4 /*yield*/, exports.api.requestCurrentServerTime()];
                case 3:
                    _b.apply(_a, [_c.apply("   ", [new (_d.apply(Date, [void 0, _h.sent()]))().toLocaleString()])]);
                    console.log();
                    console.log('Coffee machine queue length:');
                    _f = (_e = console).log;
                    _g = "   ".concat;
                    return [4 /*yield*/, exports.api.requestCoffeeMachineQueueLength()];
                case 4:
                    _f.apply(_e, [_g.apply("   ", [_h.sent()])]);
                    return [2 /*return*/];
            }
        });
    });
}
startTheApp().then(function () {
    console.log('Success!');
}, function (e) {
    console.log("Error: \"".concat(e.message, "\", but it's fine, sometimes errors are inevitable."));
});
var admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
var users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];
function promisify(fn) {
    return function () { return new Promise(function (resolve, reject) {
        fn(function (response) {
            if (response.status === 'success') {
                resolve(response.data);
            }
            else {
                reject(new Error(response.error));
            }
        });
    }); };
}
exports.promisify = promisify;
function promisifyAll(obj) {
    var result = {};
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        result[key] = promisify(obj[key]);
    }
    return result;
}
exports.promisifyAll = promisifyAll;
var oldApi = {
    requestAdmins: function (callback) {
        callback({
            status: 'success',
            data: admins
        });
    },
    requestUsers: function (callback) {
        callback({
            status: 'success',
            data: exports.users
        });
    },
    requestCurrentServerTime: function (callback) {
        callback({
            status: 'success',
            data: Date.now()
        });
    },
    requestCoffeeMachineQueueLength: function (callback) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
        });
    }
};
exports.api = {
    requestAdmins: promisify(oldApi.requestAdmins),
    requestUsers: promisify(oldApi.requestUsers),
    requestCurrentServerTime: promisify(oldApi.requestCurrentServerTime),
    requestCoffeeMachineQueueLength: promisify(oldApi.requestCoffeeMachineQueueLength)
};
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
function startTheApp() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    console.log('Admins:');
                    return [4 /*yield*/, exports.api.requestAdmins()];
                case 1:
                    (_h.sent()).forEach(logPerson);
                    console.log();
                    console.log('Users:');
                    return [4 /*yield*/, exports.api.requestUsers()];
                case 2:
                    (_h.sent()).forEach(logPerson);
                    console.log();
                    console.log('Server time:');
                    _b = (_a = console).log;
                    _c = "   ".concat;
                    _d = Date.bind;
                    return [4 /*yield*/, exports.api.requestCurrentServerTime()];
                case 3:
                    _b.apply(_a, [_c.apply("   ", [new (_d.apply(Date, [void 0, _h.sent()]))().toLocaleString()])]);
                    console.log();
                    console.log('Coffee machine queue length:');
                    _f = (_e = console).log;
                    _g = "   ".concat;
                    return [4 /*yield*/, exports.api.requestCoffeeMachineQueueLength()];
                case 4:
                    _f.apply(_e, [_g.apply("   ", [_h.sent()])]);
                    return [2 /*return*/];
            }
        });
    });
}
startTheApp().then(function () {
    console.log('Success!');
}, function (e) {
    console.log("Error: \"".concat(e.message, "\", but it's fine, sometimes errors are inevitable."));
});
