// export class CacheControl {
//   constructor() {}
// }

export function generateCacheControlData(cacheControl: any) {
  let cacheControlData = cacheControl.cacheControl.hints;
  const now = Math.floor(Date.now() / 1000);

  // Remove scope hints, as this does not apply client-side
  cacheControlData = cacheControlData.filter((hint: any) => !hint.scope);

  cacheControlData = cacheControlData.map((hint: any) => {
    return {
      path: hint.path.join('.'),
      expires: hint.maxAge > 0 ? now + hint.maxAge : 0,
    };
  });
  return cacheControlData;
}
