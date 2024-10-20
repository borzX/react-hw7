import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from '../store/userReduser';

export async function fetchUsersApi() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetch('.data.json');
    if (!response.ok) {
        throw new Error('Something go wrong')
    }
    return await response.json();
}

function* fetchUsers() {
    try {
        const data = yield call(fetchUsersApi)
        yield put(fetchUsersSuccess(data))
    } catch (error) {
        yield put(fetchUsersFailure(error.message))
    }
}

function* usersSaga() {
    yield takeEvery(fetchUsersRequest.type, fetchUsers);
}

export default usersSaga;