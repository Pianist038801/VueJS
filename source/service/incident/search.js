import uuid from 'uuid/v4';
import search from '../../service/core/search';
import Incident, { COLUMNS, mapper } from './model';

export default (reqid, filter) => {
  const type = 'incident';
  return search(reqid, type, filter, COLUMNS)
    .then(
    (data) => (mapper(data)),
  );
};