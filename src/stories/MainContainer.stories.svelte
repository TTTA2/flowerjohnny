<script module lang="ts">
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import MainContainer from "../lib/MainContainer.svelte";

    const { Story } = defineMeta({
        title: "test/MainContainer",
        component: MainContainer,
        tags: ['autodocs'],
        // args: {
        //     // onClick: fn(),
        // }
    })


</script>

<Story name="test" args={{ }}></Story>