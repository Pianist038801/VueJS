import uuid from 'uuid/v4';
import update from './update';

export default (id, user) => {
  const reqid = uuid();
  return update(reqid, id, {
    'assigned_to': user
  });
};