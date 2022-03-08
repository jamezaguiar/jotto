import moxios from 'moxios';
import { actionTypes, correctGuess, getSecretWord } from './';

describe('correctGuess', () => {
  it('should returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return the secretWord', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    // TODO: update to test app in Redux / ContextAPI sections
    const secretWord = await getSecretWord();
    expect(secretWord).toBe('party');
  });
});
