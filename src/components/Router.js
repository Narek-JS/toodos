import { TO_DATAES, TO_LISTS, PARAMS_DATA } from "../consts/paths";
import { Routes, Route } from "react-router-dom";
import { Data,Lists } from "../pages";

const Router = () => (
    <Routes>
        <Route exact path={TO_DATAES} element={<Data />} />
        <Route exact path={TO_LISTS + PARAMS_DATA} element={<Lists />} />
    </Routes>
);

export { Router };

