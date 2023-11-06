import { endpoints } from '../constants/endpoints';

const { create, read, update } = endpoints.server.api.products;
console.log(create, read, update);

const data = [
  { name: 'dell 101', id: 1 },
  { name: 'accer 201', id: 2 },
];

export const products = {
  list: {
    method: 'get',
    args: [
      read.route,
      (req, res) => {
        res.json({
          data: data,
        });
      },
    ],
  },
  delete: {
    method: 'delete',
    args: [
      '/delete',
      (req, res) => {
        data.filter((e) => e.id != req.body.id);
        res.json({
          data: [],
        });
      },
    ],
  },
};

console.log(read.route);
