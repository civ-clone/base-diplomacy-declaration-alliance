import Alliance from '../Alliance';
import Never from '@civ-clone/core-diplomacy/Expiries/Never';
import Peace from '@civ-clone/base-diplomacy-declaration-peace/Peace';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import { expect } from 'chai';

describe('Alliance', (): void => {
  const setUp = () => {
    const ruleRegistry = new RuleRegistry(),
      a = new Player(ruleRegistry),
      b = new Player(ruleRegistry),
      alliance = new Alliance(a, b, new Never(), ruleRegistry);

    return { a, b, alliance };
  };

  it('is a peace between the two players', (): void => {
    const { a, b, alliance } = setUp();

    expect(alliance).instanceof(Peace);
    expect(alliance.isBetween(a, b)).true;
  });

  it('is in force until it is ended', (): void => {
    const { a, alliance } = setUp();

    expect(alliance.active()).true;

    alliance.expire(a);

    expect(alliance.active()).false;
    expect(alliance.expired()).true;
  });
});
