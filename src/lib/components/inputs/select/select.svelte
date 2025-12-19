<script module lang="ts">
	export type Option = {
		label: string;
		value: string;
	};
	export type SelectState = {
		isOpen: boolean;
		selectedOption: Option;
		inputValue: string;
	};
	export type SelectContext = {
		state: SelectState;
		error: string;
		open: () => void;
		close: () => void;
		toggle: () => void;
		selectOption: (option: Option) => void;
		setInputValue: (value: string) => void;
		registerOption: (option: Option) => void;
	};
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { InputError, InputLabel } from '..';

	let { children, id = '', name = '', label = '', value = $bindable(''), error = '' } = $props();

	const selectState: SelectState = $state({
		isOpen: false,
		selectedOption: { label: '', value: '' },
		inputValue: ''
	});

	// Watch for external value changes
	$effect(() => {
		if (value && value !== selectState.selectedOption.value) {
			// Value changed externally, update if we have a matching option
			if (selectState.selectedOption.value !== value) {
				selectState.selectedOption.value = value;
			}
		}
	});

	function open() {
		selectState.isOpen = true;
	}

	function close() {
		selectState.isOpen = false;
	}

	function toggle() {
		selectState.isOpen = !selectState.isOpen;
	}

	function selectOption(option: Option) {
		selectState.selectedOption = option;
		selectState.inputValue = option.label;
		value = option.value; // Update the bindable value
		close();
	}

	function setInputValue(inputVal: string) {
		selectState.inputValue = inputVal;
		if (!selectState.isOpen && inputVal) {
			open();
		}
	}

	function registerOption(option: Option) {
		// When an option registers and matches the current value, select it
		if (option.value === value && !selectState.inputValue) {
			selectState.selectedOption = option;
			selectState.inputValue = option.label;
		}
	}

	setContext<SelectContext>('select', {
		get state() {
			return selectState;
		},
		get error() {
			return error;
		},
		open,
		close,
		toggle,
		selectOption,
		setInputValue,
		registerOption
	});
</script>

<div class="relative" {id}>
	{#if label}
		<InputLabel {label} {id} />
	{/if}

	{@render children()}

	<!-- Hidden input for form submission -->
	{#if name}
		<input type="hidden" {name} {value} />
	{/if}

	{#if error}
		<InputError {error} />
	{/if}
</div>
