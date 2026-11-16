import Peace from '@civ-clone/base-diplomacy-declaration-peace/Peace';
/**
 * A treaty that goes further than peace. An alliance implies peace, so it is one: whatever asks whether two players are
 *  at peace (`instanceof Peace`) counts allies too, and whatever ends their peace (a declaration of war) ends the
 *  alliance with it.
 *
 * Ending only the alliance should leave the pair at peace, so make the alliance alongside a `Peace` of its own rather
 *  than instead of one (base-diplomacy's `makeAlliance` and `cancelAlliance` do).
 */
export declare class Alliance extends Peace {}
export default Alliance;
