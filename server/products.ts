import { endpoints } from '../constants/endpoints';

const { create, read, update } = endpoints.server.api.products;
console.log(create, read, update);

let data = [
  { name: 'dell 101', id: 1 },
  { name: 'accer 201', id: 2 },
  { name: 'accer 202', id: 3 },
  { name: 'lenovo 301', id: 4 },
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
  create: {
    method: 'post',
    args: [
      '/create',
      (req, res) => {
        data.push({ name: req.body.name, id: data.length + 1 });
        console.log(data, req.body);
        res.json({
          data: 'successfully created ' + req.body.name,
        });
      },
    ],
  },
  delete: {
    method: 'delete',
    args: [
      '/delete/:id',
      (req, res) => {
        data = data.filter((e) => e.id != req.params.id);

        res.json({
          data: 'successfully deleted ' + req.params.id,
        });
      },
    ],
  },
};

console.log(read.route);
