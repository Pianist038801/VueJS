import Incident from './model';
import update from '../../service/core/update';

export default (reqid, id, record) => {
  return update(reqid, 'incident', id, record);
};