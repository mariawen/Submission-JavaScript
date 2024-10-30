import { sum } from './index.js';
import test from 'node:test';
import assert from 'node:assert';

test('sum', () => {
  assert.strictEqual(sum(3, 4), 7);   // Pengujian berhasil jika outputnya 7
  assert.strictEqual(sum(-2, 5), 3);  // Pengujian berhasil jika outputnya 3
  assert.strictEqual(sum(0, 0), 0);   // Pengujian berhasil jika outputnya 0
});
