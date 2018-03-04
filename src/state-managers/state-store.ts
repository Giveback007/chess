import { createStore } from "redux";

const applyUpdater = (oldState) => (newState) => ({...oldState, ...newState});

const reducer = (state = {name: "Bob"}, action) => {
    const update = action.change;
    const updater = applyUpdater(state);

    switch (action.type) {
        case "CHANGE_NAME":
            return updater({name: update.name});
        case "CHANGE_AGE":
            return updater({age: update.age});
        default:
            return updater({});
    }
};

const reduxStore = createStore(reducer, {});
reduxStore.subscribe(() => {
    console.log(reduxStore.getState());
});

reduxStore.dispatch({type: "INIT"});
reduxStore.dispatch({
    type: "CHANGE_NAME",
    change: { name: "Dovy" }
});
reduxStore.dispatch({
    type: "CHANGE_AGE",
    change: { age: 26 }
});
