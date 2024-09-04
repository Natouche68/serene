import { writable } from "svelte/store";

export type BreathConfig = {
	breathIn: number;
	breathOut: number;
	hold: number;
	breaths: number;
};

export type State = "breath-in" | "hold" | "breath-out" | "not-breathing";

export const breathConfig = writable<BreathConfig>({
	breathIn: 4,
	breathOut: 6,
	hold: 2,
	breaths: 4,
});

export const state = writable<State>("not-breathing");
