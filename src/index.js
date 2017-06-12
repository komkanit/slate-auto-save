const debounce = require('lodash.debounce');

export const delay = time => debounce((save, state) => {
  save(state);
}, time);
const func = delay(2000);

export default (save, deBouncer = func) => ({
  onChange: (state) => {
    deBouncer(save, state);
  },
});
