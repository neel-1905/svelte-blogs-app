# ✨ Creatable Select Feature

## Overview

The Select component now supports creating new options on-the-fly! When `isCreatable={true}` is set, users can type a value that doesn't exist in the options list and create it instantly.

## Features Implemented

### 1. **Type to Create**
- User types a value in the input field
- If the value doesn't match any existing option, a "Create" button appears
- Both `value` and `label` are set to the same typed text

### 2. **Visual Feedback**
- Purple-themed "Create" button with Plus icon
- Shows the exact text that will be created
- Appears at the bottom of the dropdown with a border separator

### 3. **Multiple Ways to Create**
- **Click**: Click the "Create" button in the dropdown
- **Keyboard**: Press Enter while typing a new value

### 4. **Smart Matching**
- Case-insensitive comparison with existing options
- Trims whitespace before checking
- Prevents duplicate options

## Implementation Details

### Components Modified

#### 1. **select.svelte** (Root Component)
```typescript
// Added to SelectState
registeredOptions: Option[]  // Track all registered options

// Added to SelectContext
createNewOption: () => void   // Create a new option
canCreateNew: () => boolean   // Check if creation is allowed

// New prop
isCreatable?: boolean         // Enable/disable creation
```

**Key Functions:**
- `registerOption()` - Tracks all options as they mount
- `canCreateNew()` - Checks if input doesn't match existing options
- `createNewOption()` - Creates and selects the new option

#### 2. **select-trigger.svelte**
```typescript
// Enhanced Enter key handler
if (e.key === 'Enter') {
  e.preventDefault();
  if (state.isCreatable && canCreateNew()) {
    createNewOption();
  }
}
```

#### 3. **select-content.svelte**
```svelte
<!-- Create new option button -->
{#if state.isCreatable && canCreateNew()}
  <li class="create-button">
    <Plus size={16} />
    <span>Create "<span class="font-semibold">{state.inputValue}</span>"</span>
  </li>
{/if}
```

## Usage Example

### Basic Creatable Select

```svelte
<script>
  import { Select, SelectTrigger, SelectContent, SelectOption } from '$lib/components/inputs';
  
  let selectedTag = $state('');
</script>

<Select bind:value={selectedTag} label="Tags" isCreatable={true}>
  <SelectTrigger placeholder="Select or create a tag" />
  <SelectContent>
    <SelectOption value="javascript" label="JavaScript" />
    <SelectOption value="svelte" label="Svelte" />
    <SelectOption value="typescript" label="TypeScript" />
  </SelectContent>
</Select>
```

### Real-World Example: Blog Categories

```svelte
<!-- Frontend: src/routes/(app)/blogs/(protected)/new/+page.svelte -->
<Select
  name="category"
  label="Category"
  bind:value={$form.category}
  error={$errors.category?.[0]}
  isCreatable={true}
>
  <SelectTrigger placeholder="Select a category" />
  <SelectContent>
    {#each data.categories as category (category.id)}
      <SelectOption value={category.id} label={category.name} />
    {/each}
  </SelectContent>
</Select>
```

```typescript
// Backend: src/routes/(app)/blogs/(protected)/new/+page.server.ts
export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    let categoryId = formData.get('category') as string;

    // If category is not a MongoDB ID, create a new category
    if (!isMongoId(categoryId)) {
      const newCategory = await Category.create({ name: categoryId });
      categoryId = newCategory._id.toString();
    }

    // Use categoryId in blog creation
    await Blog.create({
      category: categoryId,
      // ... other fields
    });
  }
};
```

## User Flow

1. **User opens dropdown** → Sees existing options
2. **User types "React"** → No match found
3. **"Create React" button appears** → Purple button with Plus icon
4. **User presses Enter or clicks button** → New option created
5. **Option is selected** → Input shows "React", value is "React"
6. **Form submits** → Server receives "React" as category
7. **Server checks** → Not a MongoDB ID, creates new category
8. **Blog created** → With the new category

## Benefits

✅ **Better UX** - No need to pre-create all options  
✅ **Flexibility** - Users can add options as needed  
✅ **Validation** - Prevents duplicates automatically  
✅ **Accessibility** - Keyboard and mouse support  
✅ **Visual Feedback** - Clear indication of what will be created  
✅ **Type Safety** - Full TypeScript support  

## Styling

The create button uses:
- Purple theme (`text-purple-600`, `hover:bg-purple-50`)
- Plus icon from Lucide
- Border separator from existing options
- Consistent with app design system

