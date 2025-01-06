<script module lang="ts">
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import NodeSelecter from "../lib/NodeSelecter.svelte";
    import type { DocNode } from "../internal/node/node";
    import { fn } from "@storybook/test";
    import { nodes } from "./testData";

    const node = nodes.find(n => n.id == "node1");

    const { Story } = defineMeta({
        title: "test/NodeSelector",
        component: NodeSelecter,
        tags: ['autodocs'],
        // args: {
        //     // onClick: fn(),
        // }
    })


</script>

<Story name="test" args={{ nodes, }}></Story>