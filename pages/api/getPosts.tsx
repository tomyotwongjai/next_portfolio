import superagent from 'superagent';

const DEV_URL = 'https://dev.to/api/articles/';
const USER_NAME = 'tomyotwongjai';

export const getPosts = async () => {
  try {
    const result = superagent
      .get(DEV_URL)
      .query({ username: USER_NAME })
      .then((res) => {
        return res.body;
      });
    return result;
  } catch (error) {
    console.log('WE HAVE FETCH POST ERROR', error);
  }
};
