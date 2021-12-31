// @ts-nocheck

import { checkSerializedPermissionsPolicy } from './check-serialized-permissions-policy';

const check = checkSerializedPermissionsPolicy();

test('checkSerializedPermissionsPolicy', () => {
	expect(check('').reason).toBe('empty-token');
	expect(check(' ').reason).toBe('unexpected-token');
	expect(check('a').reason).toBe('missing-token');
	expect(check('a:').reason).toBe('unexpected-token');
	expect(check('a ').reason).toBe('missing-token');
	expect(check('a a').reason).toBe('unexpected-token');
	expect(check('a *').matched).toBe(true);
	expect(check('a *a').reason).toBe('unexpected-token');
	expect(check('a none').reason).toBe('missing-token');
	expect(check("a 'none'").matched).toBe(true);
	expect(check('a https://markuplint.dev').matched).toBe(true);
	expect(check('a https://markuplint.dev/path/to').reason).toBe('extra-token');
	expect(check('a https://マルチバイト.abc.xyz').reason).toBe('must-be-serialized');
	expect(check('a * https://markuplint.dev').matched).toBe(true);
	expect(check("a * https://markuplint.dev 'none'").matched).toBe(true);
	expect(check("a * https://markuplint.dev 'none';b").reason).toBe('missing-token');
	expect(check("a * https://markuplint.dev 'none';b ").reason).toBe('missing-token');
	expect(check("a * https://markuplint.dev 'none';b *").matched).toBe(true);
	expect(check("a * https://markuplint.dev 'none';b *;c 'none'").matched).toBe(true);
});