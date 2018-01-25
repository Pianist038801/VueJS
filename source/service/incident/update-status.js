import uuid from 'uuid/v4';
import update from './update';

export default (id, state) => {
  const reqid = uuid();
  return update(reqid, id, {
    state
  });
};