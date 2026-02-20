import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:8080/nivo/coupon/bar', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          label: 'January',
          'Person A': 120,
          'Person B': 150,
        },
        {
          label: 'February',
          'Person A': 100,
          'Person B': 180,
        },
      ])
    );
  }),

  rest.get('http://localhost:8080/nivo/coupon/pie', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 'Category A', value: 300 },
        { id: 'Category B', value: 500 },
      ])
    );
  }),
];
