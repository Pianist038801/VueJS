import uuid from 'uuid/v4';
import search from './search';

export default () => {
  return search(uuid(),
    'sys_created_on ON Thisweek@javascript:gs.beginningOfThisWeek() @javascript:gs.endOfThisWeek()'
  );
};