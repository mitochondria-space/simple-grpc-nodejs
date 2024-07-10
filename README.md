# Simple gRPC Node.js Example

This project demonstrates a basic gRPC implementation using Node.js. gRPC is a high performance, open-source universal RPC framework that Google developed. In this example, we have a simple server-client setup where the server provides a greeting service, and the client sends a request to get a greeting message.

## Prerequisites

Before running this project, ensure you have Node.js and npm installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

## Installation

1. Clone the repository to your local machine:

    `` git clone https://github.com/your-repository/simple-grpc-nodejs.git ``

2. Navigate to the cloned repository:
    
    `` cd simple-grpc-nodejs ``

3. Install the necessary dependencies:

    `` npm install ``

## Running the Server

To start the gRPC server, run the following command in your terminal:

    `` node server.js ``


This will start the gRPC server on a predefined port (e.g., 50051). The server will listen for incoming gRPC requests from clients.

## Running the Client

After starting the server, you can run the client to send a request to the server and receive a greeting message. Open a new terminal window and run:
    
        `` node client.js ``

The client will send a request to the server, and you should see a greeting message in response. This confirms that the client-server communication over gRPC is working as expected.

## Conclusion

This simple example demonstrates the basics of setting up a gRPC service using Node.js. You can expand this example by defining more complex service methods in the `.proto` file and implementing them in the server, while also extending the client to make requests to those methods.