const { spawn } = require('child_process');

// Replace 'your_input_here' with the actual input you want to pass
const input = 'Nitin Billa';

// Replace 'Generator.py' with the actual name of your Python file
const pythonProcess = spawn('python3', ['Generator.py',  input]);

pythonProcess.stdout.on('data', (data) => {
  console.log(`Python script output: ${data}`);
});

pythonProcess.stderr.on('data', (data) => {
  console.error(`Error from Python script: ${data}`);
});

pythonProcess.on('close', (code) => {
  console.log(`Python script exited with code ${code}`);
});
