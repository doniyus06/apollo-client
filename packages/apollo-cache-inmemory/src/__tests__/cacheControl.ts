import { generateCacheControlData } from '../cacheControl';

const exampleCacheControl = `
{
  "cacheControl": {
    "version": 1,
    "hints": [
      {
        "path": [
          "post"
        ],
        "maxAge": 240
      },
      {
        "path": [
          "post",
          "votes"
         ],
         "maxAge": 30
      },
      {
        "path": [
          "post",
          "readByCurrentUser"
        ],
        "scope": "PRIVATE"
      }
    ]
  }
}
`;
const exampleCacheControlData = JSON.parse(exampleCacheControl);

// TODO: post should have Date.now + 240
// TODO: post.votes should have Date.now + 240
// TODO: merge cache control data, if there's any already there
// TODO: request post.stuff should be 240 (falls under "post")
// TODO: request post.votes should be 30 (falls under "post.votes")

describe.only('cache control', () => {
  it('generates the correct expires', () => {
    Date.now = jest.genMockFunction().mockReturnValue(1000000000000);

    const result = generateCacheControlData(exampleCacheControlData);
    expect(result[0].expires).toBe(1000000240);
  });

  it('should discard scope hints, ', () => {
    const result = generateCacheControlData(exampleCacheControlData);
    expect(result.length).toEqual(2);
  });

  it('normalizes a path', () => {
    const result = generateCacheControlData(exampleCacheControlData);
    expect(result[1].path).toEqual('post.votes');
  });

  describe.skip('if id and _id are not specified', () => {
    it('should fall back to path', () => {
      // TODO: should be able to evict directly
    });
  });

  describe.skip('if __typename is not specified', () => {
    it('should fall back to path', () => {
      // TODO: should be able to evict directly
    });
  });

  describe.skip('if normalized (has id/_id and __typename)', () => {
    it('should be done on read???', () => {});
  });

  describe.skip('needs to invalidate everything below the path', () => {});
});
