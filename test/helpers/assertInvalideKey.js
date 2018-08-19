export default async promise => {
    try {
      await promise;
      assert.fail('Expected Bad MAC not received');
    } catch (error) {
      const messageFound = error.message.search('Bad MAC') >= 0;
      assert(messageFound, `Expected "Bad MAC", got ${error} instead`);
    }
  };