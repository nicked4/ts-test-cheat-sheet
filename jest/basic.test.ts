describe('基本的な使い方', () => {
  test('Matchers', () => {
    expect(1 + 1).toBe(2);
  });

  test('Modifiers', async () => {
    // not
    expect(1 + 1).not.toBe(3);

    // promise
    expect(Promise.resolve('resolved!')).resolves.toBe('resolved!');
    expect(Promise.reject(new Error('rejected...'))).rejects.toThrow('rejected...');

    // async/await
    await expect(Promise.resolve('resolved!')).resolves.toBe('resolved!');
    await expect(Promise.reject(new Error('rejected...'))).rejects.toThrow('rejected...');
  });
});
