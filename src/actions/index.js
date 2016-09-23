import {FETCH_USERS} from './types';
export function fetchUser(){
    return {
        type : FETCH_USERS,
        payload : [
                        { name : 'Jane' },
                        {name: 'TAranjeet' },
                        {name : 'Amandeep' }
                    ]
    };
}