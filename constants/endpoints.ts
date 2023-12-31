const serverport = 8080;

export const endpoints: Endpoints = {
  server: {
    port: serverport,
    url: `https://nodeangularx1-zvoh--${serverport}--09144545.local-corp.webcontainer.io`,
    api: {
      products: {
        create: { route: 'create' },
        read: { route: 'read' },
        update: { route: 'update' },
        delete: { route: 'delete' },
      },
    },
  },
};

interface Endpoints {
  server: {
    port: number;
    url: string;
    api: any;
  };
}

for (let key in endpoints.server.api) {
  const operations = endpoints.server.api[key];
  for (let operation in operations) {
    operations[operation]['route'] = '/' + operations[operation]['route'];
    operations[operation]['url'] =
      endpoints.server.url + operations[operation].route;
  }
}

console.log(endpoints.server.api);
