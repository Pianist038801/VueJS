import { put } from './rest';

export default (reqid, type, id, record) => {
  const url = `api/now/table/${type}/${id}?sysparm_fields=sys_id,number`;
  return put(reqid, url, record);
};
