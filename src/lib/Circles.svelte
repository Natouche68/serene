<script lang="ts">
	import { onMount } from "svelte";
	import { breathConfig, state } from "./utils";

	let previousTime = Date.now();
	let deltaTime = 0;
	let timer = 0;
	let breathCount = $breathConfig.breaths;
	let fillColor = "transparent";

	onMount(() => {
		drawAnimation();
	});

	state.subscribe((value) => {
		switch (value) {
			case "breath-in":
				timer = $breathConfig.breathIn;
				fillColor = "url(#breath-in-gradient)";
				break;
			case "hold":
				timer = $breathConfig.hold;
				fillColor = "url(#hold-gradient)";
				break;
			case "breath-out":
				timer = $breathConfig.breathOut;
				fillColor = "url(#breath-out-gradient)";
				break;
			case "not-breathing":
				timer = 0;
				fillColor = "transparent";
				break;

			default:
				break;
		}
	});

	function drawAnimation() {
		deltaTime = (Date.now() - previousTime) / 1000;
		previousTime = Date.now();

		timer -= deltaTime;
		if (timer < 0) {
			switch ($state) {
				case "breath-in":
					$state = "hold";
					break;
				case "hold":
					$state = "breath-out";
					break;
				case "breath-out":
					breathCount--;
					if (breathCount < 0) {
						$state = "not-breathing";
						breathCount = $breathConfig.breaths;
					} else {
						$state = "breath-in";
					}
					break;

				default:
					break;
			}
		}

		requestAnimationFrame(drawAnimation);
	}
</script>

<svg viewBox="0 0 256 256" class="w-5/6">
	<defs>
		<linearGradient id="breath-in-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
			<stop offset="0%" stop-color="#7dc4e4" />
			<stop offset="100%" stop-color="#c6a0f6" />
		</linearGradient>
		<linearGradient id="hold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
			<stop offset="0%" stop-color="#eed49f" />
			<stop offset="100%" stop-color="#ee99a0" />
		</linearGradient>
		<linearGradient id="breath-out-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
			<stop offset="0%" stop-color="#a6da95" />
			<stop offset="100%" stop-color="#91d7e3" />
		</linearGradient>
	</defs>

	<circle cx="128" cy="128" r="112" fill={fillColor} class="transition" />
	<circle cx="128" cy="128" r="112" fill={fillColor} class="transition" />
	<circle cx="128" cy="128" r="112" fill={fillColor} class="transition" />
	<circle cx="128" cy="128" r="112" fill={fillColor} class="transition" />
	<circle cx="128" cy="128" r="112" fill={fillColor} class="transition" />
</svg>
