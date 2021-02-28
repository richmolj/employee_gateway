const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'employees_api', url: 'http://localhost:3000/api/v1/gql' },
    { name: 'positions_api', url: 'http://localhost:3001/api/v1/gql' },
    { name: 'departments_api', url: 'http://localhost:3002/api/v1/gql' },
    { name: 'teams_api', url: 'http://localhost:3003/api/v1/gql' },
    { name: 'tasks_api', url: 'http://localhost:3004/api/v1/gql' },
    { name: 'milestones_api', url: 'http://localhost:3005/api/v1/gql' }
  ],
  debug: true,
});

(async () => {
  const server = new ApolloServer({ gateway, subscriptions: false });

  server.listen({ port: 5000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
