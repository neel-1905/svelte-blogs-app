<script lang="ts">
	import { Popup, PopupContent, PopupTrigger } from '$lib/components/popup';
	import { UserRound, Settings, BookMarked, LogOut, ChevronRight, SquarePen } from '@lucide/svelte';
	import { page } from '$app/state';

	const {
		data: { user }
	} = page;
</script>

<Popup>
	<PopupTrigger>
		<button class="rounded-full p-2 transition-colors hover:bg-accent" aria-label="User profile">
			<UserRound size={20} />
		</button>
	</PopupTrigger>
	<PopupContent>
		<div class="flex min-w-64 flex-col">
			<!-- User Info Header -->
			<div class="border-b border-gray-200 px-4 py-3">
				<div class="flex items-center gap-3">
					<div class="flex-center size-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500">
						<span class="text-lg font-semibold text-white">
							{user?.firstName?.charAt(0).toUpperCase() ?? 'U'}
						</span>
					</div>
					<div class="flex-1">
						<p class="font-semibold text-gray-900">{user?.firstName ?? 'User'}</p>
						<p class="text-sm text-gray-500">{user?.email ?? 'user@example.com'}</p>
					</div>
				</div>
			</div>

			<!-- Menu Items -->
			<div class="flex flex-col gap-1 p-2">
				<a
					href="/profile"
					class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent"
				>
					<UserRound size={18} class="text-gray-600" />
					<span class="flex-1 font-medium text-gray-700">My Profile</span>
					<ChevronRight
						size={16}
						class="text-gray-400 transition-transform group-hover:translate-x-0.5"
					/>
				</a>

				<a
					href="/blogs/my-blogs"
					class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent"
				>
					<BookMarked size={18} class="text-gray-600" />
					<span class="flex-1 font-medium text-gray-700">My Blogs</span>
					<ChevronRight
						size={16}
						class="text-gray-400 transition-transform group-hover:translate-x-0.5"
					/>
				</a>

				<a
					href="/blogs/new"
					class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent"
				>
					<SquarePen size={18} class="text-gray-600" />
					<span class="flex-1 font-medium text-gray-700">Write a Blog</span>
					<ChevronRight
						size={16}
						class="text-gray-400 transition-transform group-hover:translate-x-0.5"
					/>
				</a>

				<a
					href="/settings"
					class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent"
				>
					<Settings size={18} class="text-gray-600" />
					<span class="flex-1 font-medium text-gray-700">Settings</span>
					<ChevronRight
						size={16}
						class="text-gray-400 transition-transform group-hover:translate-x-0.5"
					/>
				</a>
			</div>

			<!-- Logout Section -->
			<div class="border-t border-gray-200 p-2">
				<form method="POST" action="/logout">
					<button
						type="submit"
						class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-red-50"
					>
						<LogOut size={18} class="text-red-600" />
						<span class="flex-1 font-medium text-red-600">Logout</span>
					</button>
				</form>
			</div>
		</div>
	</PopupContent>
</Popup>
