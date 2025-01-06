import { test, expect } from 'vitest'
import { createNodes } from '../internal/node/parser';

const testData1 = 
`$$$$$
強調テスト

%%%%%
コード
%%%%%
$$$$$
一行目

%%%%%
コード
%%%%%

二行目

三行目

$$$$$
強調一行目

強調二行目
強調三行目
$$$$$

こんにちは

こんばんは
`;

const testData2 = 
`$$$$$
強調テスト
$$$$$
`;


const result2 = [
	`強調テスト`,
	]

// const result1 = [
// `強調テスト

// %%%%%
// コード
// %%%%%`,

// `一行目
// `,

// `コード`,

// `
// 二行目

// 三行目
// `,

// `強調一行目

// 強調二行目
// 強調三行目`,

// `
// こんにちは

// こんばんは
// `

// ]

test('testTest', () => {
  expect(createNodes(testData2)).toStrictEqual(result2)
})
