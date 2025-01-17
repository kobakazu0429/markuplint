import type { Nullable } from './types';

import c from 'cli-color';
// @ts-ignore
import eastasianwidth from 'eastasianwidth';
import stripAnsi from 'strip-ansi';
import { v4 } from 'uuid';

export function nonNullableFilter<T>(item: Nullable<T>): item is T {
	return !!item;
}

export function uuid() {
	return v4();
}

const logo = `<${c.xterm(39)('✔')}>`;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const version = require('../package.json').version;
const eaw: { characterLength: (char: string) => number } = eastasianwidth;

const box = (lines: string[], { width = 40, padding = 1, center = false, noColor = false }) => {
	const bt = `┌${'─'.repeat(width - 2)}┐`;
	const pd = `│${' '.repeat(width - 2)}│`;
	const bb = `└${'─'.repeat(width - 2)}┘`;
	const texts = lines.map(line => {
		const nc = stripAnsi(line);
		const length = nc.length;
		const pad = width - 2 - 1 - length;
		const pad2 = Math.floor(pad / 2);
		const padD = pad % 2;
		const padl = center ? pad2 : 0;
		const padr = center ? pad2 + padD : pad;
		const text = noColor ? nc : line;
		return `│ ${' '.repeat(padl)}${text}${' '.repeat(padr)}│`;
	});
	const result = [bt, pd, ...texts, pd, bb];
	return result.join('\n');
};

export const markuplint = `markup${c.xterm(39)('lint')}`;

export function write(message: string) {
	process.stdout.write(message + '\n');
}

write.break = () => process.stdout.write('\n');

export function error(message: string) {
	process.stderr.write(message + '\n');
}

error.exit = () => process.exit(1);

export const head = (method: string, noColor?: boolean) =>
	box([`${logo} ${markuplint}`, c.blackBright(`v${version}`), '', c.bold(method)], {
		center: true,
		noColor,
	});

export function p(s: number | string, pad: number, start = false) {
	const l = w(`${s}`.trim());
	const d = pad - l;
	const _ = ' '.repeat(d < 0 ? 0 : d);
	return start ? `${_}${s}` : `${s}${_}`;
}

export function w(s: string): number {
	return s.replace(/./g, _ => '0'.repeat(eaw.characterLength(_))).length;
}

export function space(str: string) {
	return str
		.replace(/\s+/g, $0 => {
			return c.xterm(8)($0);
		})
		.replace(/ /g, $0 => '•')
		.replace(/\t/g, $0 => '→   ');
}

export function invisibleSpace(str: string) {
	return str.replace(/\t/g, $0 => '    ').replace(/./g, $0 => ' ');
}

export function messageToString(message: string, reason?: string) {
	if (!reason) {
		return message;
	}
	return `${message} / ${reason}`;
}
