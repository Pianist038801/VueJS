import uuid from 'uuid/v4';
import search from './search';

export default (state) => {
  return search(uuid(), `state=${state}`);
};