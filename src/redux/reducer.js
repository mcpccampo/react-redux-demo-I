/* 
  Redux file
  -- Can have muiltiple files 
  -- Hold their own state and 
     _hold action creator functions, which can change state
     _Hold a reducer fuction that will work together to change the app state

  Store File
  -- Makes the state from reducers avaailable to application
  -- also called as subscriber

*/

const initialState = {
  user: {},
};

const LOGIN_USER = 'LOGIN_USER';

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user,m 
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
