describe('Basic usage', () => {
  test('Matchers', () => {
    // Primitive
    expect(1 + 1).toBe(2);
    expect('test' + 's').toBe('tests');

    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();

    expect(1).toBeDefined();
    expect(undefined).toBeUndefined();
    expect(null).toBeNull();
    expect(undefined).not.toBeNull();
    expect(null).not.toBeUndefined();

    // Object
    expect({ a: { b: 1 } }).toEqual({ a: { b: 1 } });
    expect({ a: { b: 1 } }).not.toBe({ a: { b: 1 } });

    expect([1, 2, 3]).toHaveLength(3);
    expect({ length: 3 }).toHaveLength(3);
    expect(['apple', 'orange', 'grape']).toContain('orange');
    expect([{ a: 1}, { b: 2 }]).toContainEqual({ b: 2 });

    expect(new Error()).toBeInstanceOf(Error);
    expect(() => {}).toBeInstanceOf(Function);

    // String
    expect('Info: dummy log.').toMatch(/^Info:/);
    expect('Info: dummy log.').toMatch(new RegExp('^Info:'));
    expect({ a: 'Info: dummy log' }).toMatchObject({ a: expect.stringMatching(/^Info:/)});

    // Float
    expect(0.1 + 0.2).toBeCloseTo(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 10);
    expect(0.1 + 0.2).not.toBeCloseTo(0.3, 20);
    expect(0.1 + 0.2).not.toBe(0.3);
    expect(NaN).toBeNaN();

    // Compare
    expect(5).toBeGreaterThan(3);
    expect(5).toBeGreaterThanOrEqual(3);
    expect(5).toBeGreaterThanOrEqual(5);
    expect(5).toBeLessThan(7);
    expect(5).toBeLessThanOrEqual(7);
    expect(5).toBeLessThanOrEqual(5);
  });

  test('Error', () => {
    expect(() => { throw new Error('Bad') }).toThrow();
    expect(() => { throw new Error('Bad') }).toThrow(new Error('Bad'));
    expect(() => { throw new Error('Bad') }).toThrow('a');
    expect(() => { throw new Error('Bad') }).toThrow(/a/);
  });

  test('Modifiers', async () => {
    // Not
    expect(1 + 1).not.toBe(3);

    // Promise
    expect(Promise.resolve('resolved!')).resolves.toBe('resolved!');
    expect(Promise.reject(new Error('rejected...'))).rejects.toThrow('rejected...');

    // async/await
    await expect(Promise.resolve('resolved!')).resolves.toBe('resolved!');
    await expect(Promise.reject(new Error('rejected...'))).rejects.toThrow('rejected...');
  });

  test('Setup and Teardown', () => {});
});
