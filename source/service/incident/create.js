import uuid from 'uuid/v4';
import Incident from './model';
import create from '../../service/core/create';

export default (record) => {
  const reqid = uuid();
  return create(reqid, 'incident', record);
};