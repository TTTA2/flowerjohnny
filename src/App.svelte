<script lang="ts">
    import MainContainer from "./lib/MainContainer.svelte";

    import '@material/web/all.js';
    import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';

    if (typescaleStyles.styleSheet) document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

    // const aa = "-".repeat(1000000);

	// let flg = false;
	// let aaa = 0;

	// for (let i = 0; i < aa.length; i++) {
	// 	if (aa[i] == "-") flg = !flg;
	// 	aaa++;
	// }
	
	// console.log(flg, aaa);

</script>

<main>
	<MainContainer></MainContainer>
</main>

<style>

	main {
		width: 100vw;
		height: 100vh;
	}

</style>
