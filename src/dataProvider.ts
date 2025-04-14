import simpleRestProvider from "ra-data-simple-rest";

const baseProvider = simpleRestProvider("http://localhost:3000");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapId = (item: any) => ({
  ...item,
  id: item._id,
});

const dataProvider = {
  ...baseProvider,

  getList: async (resource, params) => {
    const result = await baseProvider.getList(resource, params);
    return {
      ...result,
      data: result.data.map(mapId),
    };
  },

  getOne: async (resource, params) => {
    const result = await baseProvider.getOne(resource, params);
    return {
      ...result,
      data: mapId(result.data),
    };
  },

  create: async (resource, params) => {
    const result = await baseProvider.create(resource, params);
    return {
      ...result,
      data: mapId(result.data),
    };
  },

  update: async (resource, params) => {
    const result = await baseProvider.update(resource, {
      ...params,
      data: {
        ...params.data,
        _id: params.data.id,
      },
    });
    return {
      ...result,
      data: mapId(result.data),
    };
  },

  delete: async (resource, params) => {
    const result = await baseProvider.delete(resource, params);
    return {
      ...result,
      data: mapId(result.data),
    };
  },
};

export default dataProvider;
