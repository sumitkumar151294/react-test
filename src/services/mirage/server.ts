import { Server, Model, Factory, Response, belongsTo, hasMany } from 'miragejs';


export const handleErrors = (error: any, message = 'An error ocurred') => {
  console.error('Error: ', error);
  return new Response(400, undefined, {
    data: {
      message,
      isError: true,
    },
  });
};

export const setupServer = (env?: string): Server => {
  return new Server({
    environment: env ?? 'development',

  });
};
