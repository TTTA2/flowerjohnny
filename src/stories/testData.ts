import type { DocNode } from "../internal/node/node";

export const nodes: DocNode[] = [
    {
        id: "Node1",
        caption: "Introduction to Variables",
        content: "#注釈\n$$$$$\nVariables are used to store data in programming.\n$$$$$\n#コードスニペット\n%%%%%\nlet x = 10; // Declare a variable\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node1-1",
        parentId: "Node1",
        caption: "Variable Types",
        content: "#注釈\n$$$$$\nCommon types include integer, string, and boolean.\n$$$$$\n#コードスニペット\n%%%%%\nlet str = 'Hello'; // String type\nlet isAvailable = true; // Boolean type\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node2",
        caption: "Control Structures",
        content: "#注釈\n$$$$$\nControl structures manage the flow of a program.\n$$$$$\n#コードスニペット\n%%%%%\nif (x > 5) {\n    console.log('x is greater than 5');\n}\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node2-1",
        parentId: "Node2",
        caption: "Loops",
        content: "#注釈\n$$$$$\nLoops allow repetitive tasks efficiently.\n$$$$$\n#コードスニペット\n%%%%%\nfor (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node3",
        caption: "Functions",
        content: "#注釈\n$$$$$\nFunctions encapsulate reusable code blocks.\n$$$$$\n#コードスニペット\n%%%%%\nfunction greet(name) {\n    return `Hello, ${name}`;\n}\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node3-1",
        parentId: "Node3",
        caption: "Arrow Functions",
        content: "#注釈\n$$$$$\nArrow functions offer concise syntax.\n$$$$$\n#コードスニペット\n%%%%%\nconst greet = (name) => `Hello, ${name}`;\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node4",
        caption: "Objects",
        content: "#注釈\n$$$$$\nObjects group related data and methods.\n$$$$$\n#コードスニペット\n%%%%%\nconst person = { name: 'Alice', age: 25 };\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node4-1",
        parentId: "Node4",
        caption: "Accessing Object Properties",
        content: "#注釈\n$$$$$\nProperties can be accessed using dot or bracket notation.\n$$$$$\n#コードスニペット\n%%%%%\nconsole.log(person.name); // Dot notation\nconsole.log(person['age']); // Bracket notation\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node5",
        caption: "Arrays",
        content: "#注釈\n$$$$$\nArrays store ordered collections of data.\n$$$$$\n#コードスニペット\n%%%%%\nconst numbers = [1, 2, 3, 4, 5];\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node5-1",
        parentId: "Node5",
        caption: "Array Methods",
        content: "#注釈\n$$$$$\nMethods like push and pop modify arrays.\n$$$$$\n#コードスニペット\n%%%%%\nnumbers.push(6);\nnumbers.pop();\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node6",
        caption: "Promises",
        content: "#注釈\n$$$$$\nPromises handle asynchronous operations.\n$$$$$\n#コードスニペット\n%%%%%\nconst promise = new Promise((resolve, reject) => {\n    resolve('Success!');\n});\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node6-1",
        parentId: "Node6",
        caption: "Using Promises",
        content: "#注釈\n$$$$$\n.then and .catch manage promise results.\n$$$$$\n#コードスニペット\n%%%%%\npromise.then(result => console.log(result));\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node7",
        caption: "Classes",
        content: "#注釈\n$$$$$\nClasses define object templates.\n$$$$$\n#コードスニペット\n%%%%%\nclass Person {\n    constructor(name) {\n        this.name = name;\n    }\n}\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node7-1",
        parentId: "Node7",
        caption: "Creating Instances",
        content: "#注釈\n$$$$$\nInstances represent specific objects.\n$$$$$\n#コードスニペット\n%%%%%\nconst alice = new Person('Alice');\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node8",
        caption: "Error Handling",
        content: "#注釈\n$$$$$\nError handling ensures graceful failure.\n$$$$$\n#コードスニペット\n%%%%%\ntry {\n    throw new Error('An error occurred');\n} catch (error) {\n    console.error(error);\n}\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node8-1",
        parentId: "Node8",
        caption: "Throwing Errors",
        content: "#注釈\n$$$$$\nUse throw to create custom errors.\n$$$$$\n#コードスニペット\n%%%%%\nthrow new Error('Custom error message');\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node9",
        caption: "Modules",
        content: "#注釈\n$$$$$\nModules enable code reuse.\n$$$$$\n#コードスニペット\n%%%%%\nexport const add = (a, b) => a + b;\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node9-1",
        parentId: "Node9",
        caption: "Importing Modules",
        content: "#注釈\n$$$$$\nImport statements bring in exported code.\n$$$$$\n#コードスニペット\n%%%%%\nimport { add } from './math';\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node10",
        caption: "APIs",
        content: "#注釈\n$$$$$\nAPIs provide access to external systems.\n$$$$$\n#コードスニペット\n%%%%%\nfetch('https://api.example.com/data')\n    .then(response => response.json())\n    .then(data => console.log(data));\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node10-1",
        parentId: "Node10",
        caption: "Handling API Errors",
        content: "#注釈\n$$$$$\nAlways handle errors when calling APIs.\n$$$$$\n#コードスニペット\n%%%%%\nfetch('https://api.example.com/data')\n    .catch(error => console.error(error));\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node11",
        caption: "Event Handling",
        content: "#注釈\n$$$$$\nEvent handling is key in interactive apps.\n$$$$$\n#コードスニペット\n%%%%%\ndocument.addEventListener('click', () => {\n    console.log('Document clicked');\n});\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node11-1",
        parentId: "Node11",
        caption: "Event Delegation",
        content: "#注釈\n$$$$$\nDelegate events for efficiency.\n$$$$$\n#コードスニペット\n%%%%%\ndocument.body.addEventListener('click', (e) => {\n    if (e.target.tagName === 'BUTTON') {\n        console.log('Button clicked');\n    }\n});\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node12",
        caption: "DOM Manipulation",
        content: "#注釈\n$$$$$\nModify elements using JavaScript.\n$$$$$\n#コードスニペット\n%%%%%\nconst div = document.createElement('div');\ndiv.textContent = 'Hello, World!';\ndocument.body.appendChild(div);\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node12-1",
        parentId: "Node12",
        caption: "Removing Elements",
        content: "#注釈\n$$$$$\nRemove nodes from the DOM.\n$$$$$\n#コードスニペット\n$$$$$",
        type: "plainText"
    },

    {
        id: "Node13",
        caption: "CSS Manipulation",
        content: "#注釈\n$$$$$\nUse JavaScript to dynamically style elements.\n$$$$$\n#コードスニペット\n%%%%%\ndiv.style.color = 'red';\ndiv.style.fontSize = '20px';\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node13-1",
        parentId: "Node13",
        caption: "Adding Classes",
        content: "#注釈\n$$$$$\nClass manipulation simplifies CSS application.\n$$$$$\n#コードスニペット\n%%%%%\ndiv.classList.add('highlight');\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node14",
        caption: "Timers",
        content: "#注釈\n$$$$$\nTimers schedule tasks in the future.\n$$$$$\n#コードスニペット\n%%%%%\nsetTimeout(() => {\n    console.log('Hello after 2 seconds');\n}, 2000);\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node14-1",
        parentId: "Node14",
        caption: "Intervals",
        content: "#注釈\n$$$$$\nIntervals repeat tasks at set durations.\n$$$$$\n#コードスニペット\n%%%%%\nconst intervalId = setInterval(() => {\n    console.log('Repeating every second');\n}, 1000);\nclearInterval(intervalId);\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node15",
        caption: "LocalStorage",
        content: "#注釈\n$$$$$\nLocalStorage persists data in the browser.\n$$$$$\n#コードスニペット\n%%%%%\nlocalStorage.setItem('key', 'value');\nconst value = localStorage.getItem('key');\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node15-1",
        parentId: "Node15",
        caption: "Removing Data",
        content: "#注釈\n$$$$$\nData can be cleared or removed from LocalStorage.\n$$$$$\n#コードスニペット\n%%%%%\nlocalStorage.removeItem('key');\nlocalStorage.clear();\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node16",
        caption: "SessionStorage",
        content: "#注釈\n$$$$$\nSessionStorage stores data for the session.\n$$$$$\n#コードスニペット\n%%%%%\nsessionStorage.setItem('sessionKey', 'sessionValue');\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node16-1",
        parentId: "Node16",
        caption: "Accessing SessionStorage",
        content: "#注釈\n$$$$$\nRetrieve values from SessionStorage.\n$$$$$\n#コードスニペット\n%%%%%\nconst sessionValue = sessionStorage.getItem('sessionKey');\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node17",
        caption: "Regular Expressions",
        content: "#注釈\n$$$$$\nRegex is used for pattern matching in strings.\n$$$$$\n#コードスニペット\n%%%%%\nconst regex = /\\d+/;\nconsole.log('123abc'.match(regex));\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node17-1",
        parentId: "Node17",
        caption: "Validation with Regex",
        content: "#注釈\n$$$$$\nValidate inputs with regular expressions.\n$$$$$\n#コードスニペット\n%%%%%\nconst emailRegex = /^[^@]+@[^@]+\\.[^@]+$/;\nconsole.log(emailRegex.test('user@example.com'));\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node18",
        caption: "Async/Await",
        content: "#注釈\n$$$$$\nAsync/Await simplifies asynchronous code.\n$$$$$\n#コードスニペット\n%%%%%\nasync function fetchData() {\n    const response = await fetch('https://api.example.com');\n    return response.json();\n}\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node18-1",
        parentId: "Node18",
        caption: "Error Handling in Async",
        content: "#注釈\n$$$$$\nUse try/catch for errors in async functions.\n$$$$$\n#コードスニペット\n%%%%%\nasync function fetchData() {\n    try {\n        const response = await fetch('https://api.example.com');\n        return await response.json();\n    } catch (error) {\n        console.error(error);\n    }\n}\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node19",
        caption: "Event Loop",
        content: "#注釈\n$$$$$\nThe event loop handles concurrency in JavaScript.\n$$$$$\n#コードスニペット\n%%%%%\nconsole.log('Start');\nsetTimeout(() => console.log('Delayed'), 0);\nconsole.log('End');\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node19-1",
        parentId: "Node19",
        caption: "Call Stack and Task Queue",
        content: "#注釈\n$$$$$\nTasks are queued and executed in order.\n$$$$$\n#コードスニペット\n%%%%%\nfunction first() {\n    console.log('First');\n}\nfunction second() {\n    console.log('Second');\n}\nfirst();\nsecond();\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node20",
        caption: "Map and Set",
        content: "#注釈\n$$$$$\nMap and Set provide alternative data structures.\n$$$$$\n#コードスニペット\n%%%%%\nconst map = new Map();\nmap.set('key', 'value');\nconst set = new Set([1, 2, 3]);\n%%%%%",
        type: "plainText"
    },
    {
        id: "Node20-1",
        parentId: "Node20",
        caption: "Iterating Over Maps and Sets",
        content: "#注釈\n$$$$$\nUse for...of to iterate through elements.\n$$$$$\n#コードスニペット\n%%%%%\nfor (const [key, value] of map) {\n    console.log(key, value);\n}\nfor (const item of set) {\n    console.log(item);\n}\n%%%%%",
        type: "plainText"
    },


    {
        id: "ANode13-1",
        parentId: "Node1",
        caption: "Adding Classes",
        content: "#注釈\n$$$$$\nClass manipulation simplifies CSS application.\n$$$$$\n#コードスニペット\n%%%%%\ndiv.classList.add('highlight');\n%%%%%",
        type: "plainText"
    },
    {
        id: "ANode14",
        caption: "Node1",
        content: "#注釈\n$$$$$\nTimers schedule tasks in the future.\n$$$$$\n#コードスニペット\n%%%%%\nsetTimeout(() => {\n    console.log('Hello after 2 seconds');\n}, 2000);\n%%%%%",
        type: "plainText"
    },
    {
        id: "ANode14-1",
        parentId: "Node1",
        caption: "Intervals",
        content: "#注釈\n$$$$$\nIntervals repeat tasks at set durations.\n$$$$$\n#コードスニペット\n%%%%%\nconst intervalId = setInterval(() => {\n    console.log('Repeating every second');\n}, 1000);\nclearInterval(intervalId);\n%%%%%",
        type: "plainText"
    },
    {
        id: "ANode15-1",
        parentId: "Node1",
        caption: "Removing Data",
        content: "#注釈\n$$$$$\nData can be cleared or removed from LocalStorage.\n$$$$$\n#コードスニペット\n%%%%%\nlocalStorage.removeItem('key');\nlocalStorage.clear();\n%%%%%",
        type: "plainText"
    },
    {
        id: "ANode16-1",
        parentId: "Node1",
        caption: "Accessing SessionStorage",
        content: "#注釈\n$$$$$\nRetrieve values from SessionStorage.\n$$$$$\n#コードスニペット\n%%%%%\nconst sessionValue = sessionStorage.getItem('sessionKey');\n%%%%%",
        type: "plainText"
    },
    {
        id: "ANode17-1",
        parentId: "Node1",
        caption: "Validation with Regex",
        content: "#注釈\n$$$$$\nValidate inputs with regular expressions.\n$$$$$\n#コードスニペット\n%%%%%\nconst emailRegex = /^[^@]+@[^@]+\\.[^@]+$/;\nconsole.log(emailRegex.test('user@example.com'));\n%%%%%",
        type: "plainText"
    },
    {
        id: "ANode18-1",
        parentId: "Node1",
        caption: "Error Handling in Async",
        content: "#注釈\n$$$$$\nUse try/catch for errors in async functions.\n$$$$$\n#コードスニペット\n%%%%%\nasync function fetchData() {\n    try {\n        const response = await fetch('https://api.example.com');\n        return await response.json();\n    } catch (error) {\n        console.error(error);\n    }\n}\n%%%%%",
        type: "plainText"
    },
    {
        id: "ANode19-1",
        parentId: "Node1",
        caption: "Call Stack and Task Queue",
        content: "#注釈\n$$$$$\nTasks are queued and executed in order.\n$$$$$\n#コードスニペット\n%%%%%\nfunction first() {\n    console.log('First');\n}\nfunction second() {\n    console.log('Second');\n}\nfirst();\nsecond();\n%%%%%",
        type: "plainText"
    },
    {
        id: "ANode20-1",
        parentId: "Node1",
        caption: "Iterating Over Maps and Sets",
        content: "#注釈\n$$$$$\nUse for...of to iterate through elements.\n$$$$$\n#コードスニペット\n%%%%%\nfor (const [key, value] of map) {\n    console.log(key, value);\n}\nfor (const item of set) {\n    console.log(item);\n}\n%%%%%",
        type: "plainText"
    },
    {
        id: "BNode13-1",
        parentId: "Node1",
        caption: "Adding Classes",
        content: "#注釈\n$$$$$\nClass manipulation simplifies CSS application.\n$$$$$\n#コードスニペット\n%%%%%\ndiv.classList.add('highlight');\n%%%%%",
        type: "plainText"
    },
    {
        id: "BNode14",
        caption: "Node1",
        content: "#注釈\n$$$$$\nTimers schedule tasks in the future.\n$$$$$\n#コードスニペット\n%%%%%\nsetTimeout(() => {\n    console.log('Hello after 2 seconds');\n}, 2000);\n%%%%%",
        type: "plainText"
    },
    {
        id: "BNode14-1",
        parentId: "Node1",
        caption: "Intervals",
        content: "#注釈\n$$$$$\nIntervals repeat tasks at set durations.\n$$$$$\n#コードスニペット\n%%%%%\nconst intervalId = setInterval(() => {\n    console.log('Repeating every second');\n}, 1000);\nclearInterval(intervalId);\n%%%%%",
        type: "plainText"
    },
    {
        id: "BNode15-1",
        parentId: "Node1",
        caption: "Removing Data",
        content: "#注釈\n$$$$$\nData can be cleared or removed from LocalStorage.\n$$$$$\n#コードスニペット\n%%%%%\nlocalStorage.removeItem('key');\nlocalStorage.clear();\n%%%%%",
        type: "plainText"
    },
    {
        id: "BNode16-1",
        parentId: "Node1",
        caption: "Accessing SessionStorage",
        content: "#注釈\n$$$$$\nRetrieve values from SessionStorage.\n$$$$$\n#コードスニペット\n%%%%%\nconst sessionValue = sessionStorage.getItem('sessionKey');\n%%%%%",
        type: "plainText"
    },
    {
        id: "BNode17-1",
        parentId: "Node1",
        caption: "Validation with Regex",
        content: "#注釈\n$$$$$\nValidate inputs with regular expressions.\n$$$$$\n#コードスニペット\n%%%%%\nconst emailRegex = /^[^@]+@[^@]+\\.[^@]+$/;\nconsole.log(emailRegex.test('user@example.com'));\n%%%%%",
        type: "plainText"
    },
    {
        id: "BNode18-1",
        parentId: "Node1",
        caption: "Error Handling in Async",
        content: "#注釈\n$$$$$\nUse try/catch for errors in async functions.\n$$$$$\n#コードスニペット\n%%%%%\nasync function fetchData() {\n    try {\n        const response = await fetch('https://api.example.com');\n        return await response.json();\n    } catch (error) {\n        console.error(error);\n    }\n}\n%%%%%",
        type: "plainText"
    },
    {
        id: "BNode19-1",
        parentId: "Node1",
        caption: "Call Stack and Task Queue",
        content: "#注釈\n$$$$$\nTasks are queued and executed in order.\n$$$$$\n#コードスニペット\n%%%%%\nfunction first() {\n    console.log('First');\n}\nfunction second() {\n    console.log('Second');\n}\nfirst();\nsecond();\n%%%%%",
        type: "plainText"
    },
    {
        id: "BNode20-1",
        parentId: "Node1",
        caption: "Iterating Over Maps and Sets",
        content: "#注釈\n$$$$$\nUse for...of to iterate through elements.\n$$$$$\n#コードスニペット\n%%%%%\nfor (const [key, value] of map) {\n    console.log(key, value);\n}\nfor (const item of set) {\n    console.log(item);\n}\n%%%%%",
        type: "plainText"
    },

    {
        id: "BNode20-2",
        parentId: "BNode20-1",
        caption: "Iterating Over Maps and Sets",
        content: "#注釈\n$$$$$\nUse for...of to iterate through elements.\n$$$$$\n#コードスニペット\n%%%%%\nfor (const [key, value] of map) {\n    console.log(key, value);\n}\nfor (const item of set) {\n    console.log(item);\n}\n%%%%%",
        type: "plainText"
    },

    {
        id: "BNode20-3",
        parentId: "BNode20-1",
        caption: "Iterating Over Maps and Sets",
        content: "#注釈\n$$$$$\nUse for...of to iterate through elements.\n$$$$$\n#コードスニペット\n%%%%%\nfor (const [key, value] of map) {\n    console.log(key, value);\n}\nfor (const item of set) {\n    console.log(item);\n}\n%%%%%",
        type: "plainText"
    }
];


// export const nodes: DocNode[] = [
//     {
//         id: "node1",
//         caption: "test1",
//         content: "aaaa",
//         type: "plainText"
//     },

//     {
//         id: "node2",
//         caption: "test2",
//         content: "aaaa",
//         type: "plainText"
//     },

//     {
//         id: "node3",
//         caption: "test3",
//         content: "aaaa",
//         type: "plainText"
//     },

//     {
//         id: "node1-node1",
//         caption: "test1-test1",
//         parentId: "node1",
//         content: "aaaa",
//         type: "plainText"
//     },

//     {
//         id: "node1-node2",
//         caption: "test1-test2",
//         parentId: "node1",
//         content: "bbbb",
//         type: "plainText"
//     },

//     {
//         id: "node1-node3",
//         caption: "test1-test3",
//         parentId: "node1",
//         content: "cccc",
//         type: "plainText"
//     },

//     {
//         id: "node1-node2-node1",
//         caption: "test1-test2-test1",
//         parentId: "node1-node2",
//         content: 
// `$$$$$aaaa
// bvbbb$$$$$
// test aaa
// aaaadwadnwajdbwa

// こんにてゃテストですよ

// ああああおおおお
// うおいおおおお
// あああb

// $$$$$
// aaaa
// bvbbb
// ccccc
// $$$$$

// aadwa

// $$$$$aaaa
// bvbbb$$$$$

// aaaatest
// %%%%%
// code = code
// %%%%%
// aa
// %%%%%
// メロスは激怒した。必ず、かの 邪智暴虐 （ じゃちぼうぎゃく ） の王を除かなければならぬと決意した。メロスには政治がわからぬ。メロスは、村の牧人である。
// %%%%%
// %%%%%
// メロスは激怒した。
// 必ず、かの 邪智暴虐 （ じゃちぼうぎゃく ） の王を除かなければならぬと決意した。
// メロスには政治がわからぬ。
// メロスは、村の牧人である。
// %%%%%

// bb
// Text before
// $$$$$
// 注釈
// $$$$$
// `,
//         type: "plainText"
//     },

//     {
//         id: "node1-node2-node2",
//         caption: "test1-test2-test2",
//         parentId: "node1-node2",
//         content: 
// `$$$$$注釈テスト$$$$$
// こんにちは
// テストです。
// こんにちは
// `,
//         type: "plainText"
//     },

    
// ];


// export const test: DocNode[] = [
//     {
//         id: "ノードID",
//         caption: "キャプション",
//         content: "説明",
//         type: "plainText"
//     },
// ];