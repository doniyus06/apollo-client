describe.skip('cache control', () => {
  it('normalizes a path', () => {
    // cacheControl.hints[x].path
    // "cacheControl": {
    //   "version": 1,
    //       "hints": [
    //     {
    //       "path": [
    //         "locationSearch"
    //       ],
    //       "maxAge": 0
    //     },
    //     {
    //       "path": [
    //         "locationSearch",
    //         "layer"
    //       ],
    //       "maxAge": 15
    //     }
    //   ]
    // }

    // TODO: mock date now
    // Date.now = jest.fn or global.Date = jest.fn().
    // const mockDate =
    // Date.now = jest.fn(() => 1487076708000)
    const expected = {
      'locationSearch.layer': 15,
    };
  });
  describe('if id and _id are not specified', () => {
    it('should fall back to path', () => {
      // TODO: should be able to evict directly
    });
  });

  describe('if __typename is not specified', () => {
    it('should fall back to path', () => {
      // TODO: should be able to evict directly
    });
  });

  describe('if normalized (has id/_id and __typename)', () => {
    it('should be done on read???', () => {});
  });
});
