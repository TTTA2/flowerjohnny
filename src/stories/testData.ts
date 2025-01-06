import type { DocNode } from "../internal/node/node";

export const nodes: DocNode[] = [
    {
        id: "node1",
        caption: "test1",
        content: "aaaa",
        type: "plainText"
    },

    {
        id: "node2",
        caption: "test2",
        content: "aaaa",
        type: "plainText"
    },

    {
        id: "node3",
        caption: "test3",
        content: "aaaa",
        type: "plainText"
    },

    {
        id: "node1-node1",
        caption: "test1-test1",
        parentId: "node1",
        content: "aaaa",
        type: "plainText"
    },

    {
        id: "node1-node2",
        caption: "test1-test2",
        parentId: "node1",
        content: "bbbb",
        type: "plainText"
    },

    {
        id: "node1-node3",
        caption: "test1-test3",
        parentId: "node1",
        content: "cccc",
        type: "plainText"
    },

    {
        id: "node1-node2-node1",
        caption: "test1-test2-test1",
        parentId: "node1-node2",
        content: 
`$$$$$aaaa
bvbbb$$$$$
test aaa
aaaadwadnwajdbwa

こんにてゃテストですよ

ああああおおおお
うおいおおおお
あああb

$$$$$
aaaa
bvbbb
ccccc
$$$$$

aadwa

$$$$$aaaa
bvbbb$$$$$

aaaatest
%%%%%
code = code
%%%%%
aa
%%%%%
メロスは激怒した。必ず、かの 邪智暴虐 （ じゃちぼうぎゃく ） の王を除かなければならぬと決意した。メロスには政治がわからぬ。メロスは、村の牧人である。
%%%%%
%%%%%
メロスは激怒した。
必ず、かの 邪智暴虐 （ じゃちぼうぎゃく ） の王を除かなければならぬと決意した。
メロスには政治がわからぬ。
メロスは、村の牧人である。
%%%%%

bb
$$$$$
注釈
$$$$$
`,
        type: "plainText"
    },

    {
        id: "node1-node2-node2",
        caption: "test1-test2-test2",
        parentId: "node1-node2",
        content: 
`$$$$$注釈テスト$$$$$
こんにちは
テストです。
こんにちは
`,
        type: "plainText"
    },

    
];