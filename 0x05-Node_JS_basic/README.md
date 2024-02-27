# 0x05-Node_JS_basic

### BULLET POINTS TO REMEMBER

- Node.js utilizes the V8 JavaScript engine
- V8 JavaScript engine is developed by google and used in chrome browser to execute js code.
- V8 Javascript is known for its high performance and efficiency in executing JS code.
- The nodeJs app runs as a single process without running a thread for every request.
- Python's web freamworks use multiprocessing to handle requests. It uses the workers processes to run similtaniously the requests.
- Non-blocking paradigm that nodeJs uses, Vs blocking paradigm.
- NodeJs uses non-blocking since it relies on single processing, So in order to handle I/O efficiently without blocking the execution flow. On the other hand python uses the blocking paradigm along with multiprocessing in order to go beyond the limitations of having to wait for a block to finish executing then move on to the other.
- The aproch that NodeJs follows allows it to handle thousands of concurrent connections with a single server.


==**Create a repo for contributions where the contributors can
push examples of different codes of different languages.**==

- The difference between synchronous and asychronous tasks. Synchronous are executed in blocking paradigm, meaning the tasks can be executed one after the other and the program has to wait for the execution. Asychronous on the other hand are non-blocking, meanig the tasks can be executed independently from the main program.
- Asychronous: Reading or writing from and to a file, network requests, timers...
- Sychronous: Simple equation, iterating over an array...

- In order to read the standar input and put out the standar output or error. We use process.stdin, process.stdout, process.stderr.

- We use process.argv to get the arguments.
- process.execPath to get the pathname of the executable that started the process.

Use this link for more functions :
[NodeJs process keywords.](https://node.readthedocs.io/en/latest/api/process/)

- Subprocessing is applied with the help of spawn from the node:sub_process module.

[NodeJs subprocessing keywards.](https://nodejs.org/api/child_process.html)

- We can also use exec from the same module for executables.

- We can also use async and await while executing subprocess for more controle. And for that we can use util.promisify from node:util.

- We can test our JS code using Mocha, check the link :
[Mocha](https://mochajs.org/)
