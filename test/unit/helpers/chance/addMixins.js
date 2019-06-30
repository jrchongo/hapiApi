export function addMixins(chance) {
    chance.mixin({
        array: () => {
            return chance.n(chance.string, chance.natural({
                max: 12,
                min: 2
            }));
        },
        object: () => {
            return {
                [chance.string()]: chance.string()
            };
        }
    });
}