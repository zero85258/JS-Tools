const { spawn } = require('child_process');
const subProcess = spawn('ls', ['-lh', '/usr']);

subProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

subProcess.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

subProcess.on('close', (code) => {
  console.log(`process returnn ${code}`);
});
