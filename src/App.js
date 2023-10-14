import React from "react";
import AppRoute from "./common/AppRoute";
import { getAllProducts } from "./redux/slices/productSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    dispatch(getAllProducts());
  });
  return <AppRoute />;
}

export default App;
