import React, { createContext, useReducer } from "react";

export type User = string | null;

interface UserContextInterface {
  user: User;
  dispatch: React.Dispatch<LoginUser | LogoutUser>;
}

export enum UserActionsKind {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

// interface UserActions {
//   type: UserActionsKind;
//   payload: User;
// }

// interfaccia generica che accetta due tipi
interface Action<T, P> {
  type: T;
  payload: P;
}

// UserActionsKind.LOGIN viene assegnato a T
// User viene assegnato a P
type LoginUser = Action<UserActionsKind.LOGIN, User>;
type LogoutUser = Action<UserActionsKind.LOGOUT, User>;

// qui puoi accedere sia a type che a payload con i tipi che gli hai dato sopra
// const ciao : LoginUser = {
//   type: UserActionsKind.LOGOUT, // qui ti da errore perché non è LOGIN ok ma non ne capisco il senso ç.ç
//   payload: 'utente'
// }

interface ReducerInitialState {
  user: User;
}

const initialState: ReducerInitialState = {
  user: null,
}

export const AuthContext = createContext<UserContextInterface>({
  user: null,
  dispatch: () => {}
});

export const authReducer = (
  state: ReducerInitialState,
  action: LoginUser | LogoutUser
): ReducerInitialState => {
  const { type, payload } = action;
  switch (type) {
    case UserActionsKind.LOGIN:
      return { user: payload || initialState.user };
    case UserActionsKind.LOGOUT:
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
const [state, dispatch] = useReducer(authReducer, initialState);
  console.log('AuthContext.state is currenly set to: ', state);
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
