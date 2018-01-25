import { get } from './rest';

export default (reqid, type, filter, fields) => {
  const url = `api/now/table/${type}`;
  return get(reqid, url, filter, fields);
};
