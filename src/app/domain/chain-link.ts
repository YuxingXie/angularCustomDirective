/**
 * Created by xieyuxing on 2018/4/23.
 */
export class ChainLink implements Iterable<ChainLink> {
  id: number;
  name: string;
  nextItem: ChainLink;
  constructor(id: number , name: string, nextItem: ChainLink) {
    this.id = id;
    this.name = name;
    this.nextItem = nextItem ;
  }

  [Symbol.iterator](): Iterator<ChainLink> {
    return {
      next(): IteratorResult<ChainLink> {
        if (thisItem.nextItem != null) {
          retItem = thisItem;
          thisItem = thisItem.nextItem;
          return {
            done: false,
            value: retItem
        };
        } else {
          console.log(`has not next:${this}`);
          return {
            done: true,
            value: undefined
          };
        }
      }
    };
  }
}
