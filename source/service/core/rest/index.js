import axios from 'axios';
import chalk from 'chalk';

const adapter = axios.create({
  responseType: 'json',
  auth: {
    username: 'rajeev.dasara',
    password: 'password',
  },
  baseURL: 'https://dev34299.service-now.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = (reqid, url, filter, fields) => {
  console.debug(chalk.yellow('(mvs,adapter,get),reqid:%s,url:%s,filter:%s,fields:%s'),
    reqid, url, JSON.stringify(filter), JSON.stringify(fields));

  return new Promise((resolve, reject) => {
    const url2 = `${url}?sysparm_query=${filter}`
    adapter.get(url2, {
      params: {
        'sysparm_fields': fields.join(),
        'sysparm_display_value': true,
        'sysparm_exclude_reference_link': true,
      }
    }).catch((error) => {
      reject({ reqid, url, filter, fields, error });
    }).then((response) => {
      const { result } = response.data;
      if (!(result)) {
        reject({ reqid, url, filter, fields, error: response.data });
      } else {
        console.debug(chalk.green('(mvs,adapter,get)[results],reqid:%s,found:%s'),
          reqid, JSON.stringify(result.length));
        resolve(result ? result : []);
      }
    });
  });
};

export const post = (reqid, url, record) => {
  console.debug('(mvs,adapter,post),reqid:%s,url:%s,record:%s',
    reqid, url, JSON.stringify(record));

  return adapter.post(url, record)
    .catch((error) => {
      throw { reqid, url, record, error };
    })
    .then((response) => {
      const { result } = response.data;
      if (!(result)) {
        throw { reqid, url, record, error: response.data };
      }
      console.debug('(mvs,axios,post),reqid:%s,result:%s',
        reqid, JSON.stringify(result));
      return result;
    });
};

export const put = (reqid, url, record) => {
  console.debug('(mvs,adapter,put),reqid:%s,url:%s,record:%s',
    reqid, url, JSON.stringify(record));

  return adapter.put(url, record)
    .catch((error) => {
      throw { reqid, url, record, error };
    })
    .then((response) => {
      const { result } = response.data;
      if (!(result)) {
        throw { reqid, url, record, error: response.data };
      }
      console.debug('(mvs,axios,put),reqid:%s,result:%s',
        reqid, JSON.stringify(result));
      return result;
    });
};

export default adapter;
