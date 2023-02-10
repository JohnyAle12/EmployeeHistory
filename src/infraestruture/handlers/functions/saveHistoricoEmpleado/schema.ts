export default {
    type: "object",
    properties: {
        beforeAmount: { type: 'number' },
        newAmount: { type: 'number' }
    },
    required: ['beforeAmount', 'newAmount']
  } as const;
  