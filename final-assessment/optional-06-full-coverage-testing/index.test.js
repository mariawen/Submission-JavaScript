import sum from './index.js';
import test from 'node:test';
import assert from 'node:assert';

test('Menambahkan dua bilangan positif', () => {
  assert.strictEqual(sum(3, 5), 8); // Hasil yang diharapkan adalah 8
  assert.strictEqual(sum(0, 5), 5); // Hasil yang diharapkan adalah 5
});

test('Mengembalikan 0 jika salah satu angka negatif', () => {
  assert.strictEqual(sum(-3, 5), 0); // Hasil yang diharapkan adalah 0
  assert.strictEqual(sum(3, -5), 0); // Hasil yang diharapkan adalah 0
  assert.strictEqual(sum(-3, -5), 0); // Hasil yang diharapkan adalah 0
});

test('Mengembalikan 0 jika input bukan angka', () => {
  assert.strictEqual(sum('3', 5), 0); // Hasil yang diharapkan adalah 0
  assert.strictEqual(sum(3, '5'), 0); // Hasil yang diharapkan adalah 0
  assert.strictEqual(sum('3', '5'), 0); // Hasil yang diharapkan adalah 0
  assert.strictEqual(sum(null, 5), 0); // Hasil yang diharapkan adalah 0
  assert.strictEqual(sum(3, undefined), 0); // Hasil yang diharapkan adalah 0
});

test('Mengembalikan hasil yang benar untuk bilangan positif besar', () => {
  assert.strictEqual(sum(1000, 2000), 3000); // Hasil yang diharapkan adalah 3000
});