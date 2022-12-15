//console.log(Object.keys(process))

const commands = require('./commands/index.js');
const print = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

process.stdout.write('\nprompt > ');
process.stdin.on('data', function (data) {

let args = data.toString().trim().split(" ");
let cmd = args.shift();

if (commands[cmd]) {
    commands[cmd](args, print);
} else {
    print('Command not found');
}
})