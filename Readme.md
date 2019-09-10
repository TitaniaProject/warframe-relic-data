# Warframe Relic Data

Provides easy access to every Relic in Warframe and it's drops and farm locations.

Pretty much a smaller version of [Warframe-Items](https://github.com/WFCD/warframe-items)
with some changes to make it easier to parse for that purpose. 

## Usage

```js
const relics = require("warframe-relic-data");
relics.forEach(relic => {
    console.log(relic.name);
});
```

Relic Properties:
(for more info see [Typings](index.d.ts))
```typescript
interface Relic {
    name: string;
    rewards: Reward[]
    locations: Location[];
    vaulted: boolean;
    warframeMarket: WarframeMarketId | null;
}
```

## Credits

- [warframe-items](https://github.com/WFCD/warframe-items) License: [MIT](https://github.com/WFCD/warframe-items/blob/development/LICENSE)
- [warframe.market](https://warframe.market)
- [Warframe Official Drop Data](https://n8k6e2y6.ssl.hwcdn.net/repos/hnfvc0o3jnfvc873njb03enrf56.html)
- [Digital Extremes](https://www.warframe.com/)