import superagent from 'superagent';

const DEV_URL = 'https://dev.to/api/articles/';

export const getPosts = async () => {
  try {
    const result = superagent
      .get(DEV_URL)
      .query({ username: process.env.NEXT_PUBLIC_DEVTO_USER_ID })
      .then((res) => {
        return res.body;
      });
    return result;
  } catch (error) {
    console.log('WE HAVE FETCH POST ERROR', error);
  }
};
