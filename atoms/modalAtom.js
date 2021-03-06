import { atom } from "recoil";

const modalComponent = atom({
    key: 'modalComponent', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export default modalComponent;