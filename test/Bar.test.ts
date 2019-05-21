import { Bar } from 'index';

/**
 * Bar test
 */
describe('Bar test', () => {

    it('works if true is truthy', () => {
        expect(true).toBeTruthy();
    });

    it('Bar is instantiable', () => {
        expect(new Bar()).toBeInstanceOf(Bar);
    });

    it('Bar dump works', () => {
        new Bar().dump();
    });

    it('iHazError throws', () => {
        expect(() => {
            new Bar().iHazError(true);
        }).toThrow();
    });

    it('iHazError does not throw', () => {
        new Bar().iHazError(false);
    });
});
