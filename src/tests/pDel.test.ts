import { Tile38 } from '..';

describe('pDel', () => {
    const tile38 = new Tile38();

    afterAll(() => tile38.quit());

    it('should send PDEL command', async () => {
        const command = jest.spyOn(tile38.client, 'command');

        await expect(tile38.pDel('fleet', 'truck*')).resolves.toEqual({
            elapsed: expect.any(String) as string,
            ok: true,
        });

        expect(command).toHaveBeenCalledWith('PDEL', ['fleet', 'truck*']);
    });
});
