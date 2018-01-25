import { post } from './rest';

export default (reqid, type, record) => {
  const url = `api/now/table/${type}?sysparm_fields=number,sys_id`;
  return post(reqid, url, record);
};
