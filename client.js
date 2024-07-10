const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './groceries.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const groceriesPackage = grpc.loadPackageDefinition(packageDefinition).groceries;

const client = new groceriesPackage.GroceriesService('localhost:50051', grpc.credentials.createInsecure());

client.AddGrocery({ name: 'Spinach', quantity: 1, unit: 'bunch' }, (error, response) => {
  if (!error) {
    console.log(response);
  } else {
    console.error(error);
  }
});