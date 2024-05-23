# node-worker-thread

## Description 

This is basic demo of node worker thread which contains two routes non-blocking and other route is to calculate the nth fibonacci term(mathematical computation)

While performing the mathematical computation mainThread is blocked so we have created a separate thread for its execution

## Overview of Worker threads in nodeJs

In Node.js, Worker Threads are used to enable multithreading, which allows for parallel execution of JavaScript code in multiple threads within the same process. 

This capability is especially useful for handling CPU-intensive tasks that would otherwise block the event loop.

### List of tasks where Worker Threads can be particularly beneficial:

1. Mathematical Computations
2. Data Processing
3. Cryptographic Operations
4. Image/Video Processing



## Setup

Execute below commands
```
git clone https://github.com/sujalmandalia/node-worker-thread.git

cd node-worker-thread

npm install

npm run start
```





