export default (state = {}, action) => {
  switch (action.type) {
    case 'NEW_ACCOUNT':
      return {
        uid: action.uid
      };
    default:
      return state;
  }
};
