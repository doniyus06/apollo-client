export class CacheControl {
  private cacheControlData: any;

  constructor() {
    this.cacheControlData = [];
  }

  public generateCacheControlData(cacheControl: any): void {
    const now = Math.floor(Date.now() / 1000);

    // Remove scope hints, as this does not apply client-side.
    // Generate expiration time from maxage
    const hints = cacheControl.cacheControl.hints
      .filter((hint: any) => !hint.scope)
      .map((hint: any) => {
        return {
          path: hint.path.join('.'),
          expires: hint.maxAge > 0 ? now + hint.maxAge : 0,
        };
      });

    console.log('hints');
    console.log(hints);
    // cacheControl.cacheControl.hints = cacheControl.cacheControl.hints

    // this.cacheControlData = [...this.cacheControlData, cacheControl.cacheControl.hints];

    // FIXME: this doesn't clear up the existing one
    return this.mergeHints(hints);
  }

  private mergeHints(newHints: any[]): void {
    this.cacheControlData = [...this.cacheControlData, newHints ];
  }

  public dump() {
    console.log('### CacheControl.dump()');
    console.log(this.cacheControlData);
  }
}

