export default () => next => action => {
  const { payload, type } = action;
  const data = {};
  switch (type) {
    default: {
      data.type = type;
      if (
        typeof payload === 'boolean' ||
        payload
      ) {
        if (
          typeof payload !== 'object' ||
          typeof payload.getMonth ===
            'function'
        ) {
          data.payload = payload;
        } else if (
          type === 'SHOW_MODAL'
        ) {
          data.payload = JSON.stringify(
            payload
          );
        } else {
          data.payload = 'Object';
        }
      }
    }
  }
  if (data.type) {
    console.log(data);
  }
  return next(action);
};
