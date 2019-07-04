import { runSaga } from "redux-saga";

import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const response = [{}];

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(RepositoriesActions.getSuccess(response));
  });
});
