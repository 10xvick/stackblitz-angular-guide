import { endpoints } from '../constants/endpoints';

const { create, read, update } = endpoints.server.api.products;
console.log(create, read, update);

export const products = {
  list: {
    method: 'get',
    args: [
      read.route,
      (req, res) => {
        res.json({
          data: [
            { name: 'dell 101', id: 1 },
            { name: 'accer 201', id: 2 },
          ],
        });
      },
    ],
  },
  delete: {
    method: 'delete',
    args: [],
  },
};

console.log(read.route);
