import uuid from 'uuid/v4';
import search from './search';

export default (num) => {
  return search(uuid(), `number=${num}`);
};