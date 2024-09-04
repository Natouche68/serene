<script lang="ts">
	import Circles from "$lib/Circles.svelte";
	import { state } from "$lib/utils";
</script>

<div
	class="h-dvh flex flex-col justify-between items-center bg-base text-text font-body"
>
	<h1 class="py-6 text-5xl font-display">Serene</h1>
	<Circles />
	<button
		class="my-8
			px-4
			py-2
			text-xl
			bg-surface0
			rounded-xl
			shadow-lg
			hover:bg-overlay0
			hover:shadow-surface0
			transition
			duration-500"
		on:click={() => ($state = "breath-in")}
	>
		Start
	</button>
</div>
