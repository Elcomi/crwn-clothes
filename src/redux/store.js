import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import { logger } from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [];
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

export const Store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(Store);

export default { Store, persistor };
