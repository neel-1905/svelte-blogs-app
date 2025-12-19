# Select Component Usage

## Basic Usage with Value Binding

```svelte
<script>
  import { Select, SelectTrigger, SelectContent, SelectOption } from '$lib/components/inputs';
  
  let selectedCategory = $state('');
</script>

<Select bind:value={selectedCategory} label="Category">
  <SelectTrigger placeholder="Select a category" />
  <SelectContent>
    <SelectOption value="tech" label="Technology" />
    <SelectOption value="travel" label="Travel" />
    <SelectOption value="food" label="Food" />
  </SelectContent>
</Select>

<p>Selected: {selectedCategory}</p>
```

## Pre-selecting a Value

```svelte
<script>
  import { Select, SelectTrigger, SelectContent, SelectOption } from '$lib/components/inputs';
  
  // Pre-select "travel" option
  let selectedCategory = $state('travel');
</script>

<Select bind:value={selectedCategory} label="Category">
  <SelectTrigger placeholder="Select a category" />
  <SelectContent>
    <SelectOption value="tech" label="Technology" />
    <SelectOption value="travel" label="Travel" />
    <SelectOption value="food" label="Food" />
  </SelectContent>
</Select>
```

## With Dynamic Options (from API/Database)

```svelte
<script>
  import { Select, SelectTrigger, SelectContent, SelectOption } from '$lib/components/inputs';
  
  const { data } = $props();
  let selectedCategoryId = $state('');
  
  // If you want to pre-select based on data
  // let selectedCategoryId = $state(data.defaultCategoryId);
</script>

<Select bind:value={selectedCategoryId} label="Category">
  <SelectTrigger placeholder="Select a category" />
  <SelectContent>
    {#each data.categories as category (category.id)}
      <SelectOption value={category.id} label={category.name} />
    {/each}
  </SelectContent>
</Select>
```

## With Form Integration (superforms)

```svelte
<script>
  import { Select, SelectTrigger, SelectContent, SelectOption } from '$lib/components/inputs';
  import { superForm } from 'sveltekit-superforms';
  
  const { data } = $props();
  const { form, errors } = superForm(data.form);
</script>

<Select bind:value={$form.category} label="Category" error={$errors.category?.[0]}>
  <SelectTrigger placeholder="Select a category" />
  <SelectContent>
    {#each data.categories as category (category.id)}
      <SelectOption value={category.id} label={category.name} />
    {/each}
  </SelectContent>
</Select>
```

## How It Works

1. **Pass a value**: Use `bind:value={yourVariable}` on the `<Select>` component
2. **Options register**: Each `<SelectOption>` registers itself when mounted
3. **Auto-selection**: If an option's value matches the bound value, it's automatically selected
4. **Display**: The input shows the selected option's label
5. **Two-way binding**: When user selects an option, the bound value updates

## Features

- ✅ Two-way binding with `bind:value`
- ✅ Auto-selects option when value is passed
- ✅ Shows selected option's label in input
- ✅ User can type in the input (ready for filtering)
- ✅ Clicking an option updates the bound value
- ✅ Works with dynamic options from API/database
- ✅ Integrates with form libraries like superforms

