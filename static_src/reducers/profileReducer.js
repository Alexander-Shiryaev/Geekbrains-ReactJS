import update from 'react-addons-update';


const initialStore = {
    profiles: {
            1: {name: 'Brendan', lastname: 'Eich', about: 'I created a Javascript!'},
    },
};

 
export default function profileReducer(store = initialStore, action) {
    return store;
}