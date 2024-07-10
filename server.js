const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('groceries.proto');
const { connectToPostgres, pool } = require('./database');
const groceriesProto = grpc.loadPackageDefinition(packageDefinition).groceries;

const server = new grpc.Server();
const { v4: uuidv4 } = require('uuid');


server.addService(groceriesProto.GroceriesService.service, {
  AddGrocery: async (call, callback) => {
    const id = uuidv4();
    const { name, quantity, unit } = call.request;
    try {
      const client = await pool.connect();
      const timestamp = new Date().toISOString();
      const result = await client.query('INSERT INTO groceries(id, name, added_at, updated_at, quantity, unit) VALUES($1, $2, $3, $4, $5, $6) RETURNING id', [id, name, timestamp, timestamp, quantity, unit]);
      client.release();
      callback(null, {message : "Item created with ID: " + result.rows[0].id});
    } catch (error) {
      callback({
        code: grpc.status.INTERNAL,
        message: "Failed to create item",
        details: error
      });
    }
  },
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (async () => {
    await connectToPostgres();
    console.log('Server running at http://0.0.0.0:50051');
}));