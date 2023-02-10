export default {
    type: "object",
    properties: {
        beforeAmount: { type: 'string' },
        newAmount: { type: 'string' }
    },
    required: ['beforeAmount', 'newAmount']
  } as const;
  