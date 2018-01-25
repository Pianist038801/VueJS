import uuid from 'uuid/v4';
import search from './search';

export default (id) => {
  return search(uuid(), `sys_id=${id}`);
};