<script lang="ts">
	import { Section, SectionHeading } from '$lib/components/layout';
	import { Card } from '$lib/components/card';
	import { Button } from '$lib/components/buttons';
	import { BookOpen, Users, Target, Sparkles, Heart, Code, Pen, Globe } from '@lucide/svelte';
</script>

<Section>
	<!-- Hero Section -->
	<div class="mb-16 text-center">
		<h1 class="mb-4 text-5xl leading-tight font-bold italic xl:text-6xl">
			About <span class="text-foreground/70">Our Blog</span>
		</h1>
		<p class="mx-auto max-w-2xl text-lg text-foreground-muted">
			A passionate community of writers, thinkers, and creators sharing stories that inspire,
			educate, and connect people around the world.
		</p>
	</div>
</Section>

<!-- Mission Section -->
<Section>
	<div class="mb-20">
		<SectionHeading className="text-center">Our Mission</SectionHeading>
		<div class="mx-auto max-w-3xl">
			<Card className="bg-accent/50">
				<div class="flex flex-col items-center gap-6 text-center">
					<div class="flex-center size-16 rounded-full bg-btn-default-background">
						<Target class="text-btn-default-foreground" size={32} />
					</div>
					<p class="text-lg leading-relaxed">
						We believe in the power of words to transform lives. Our mission is to create a platform
						where diverse voices can share their unique perspectives, experiences, and knowledge
						with a global audience. We're committed to fostering meaningful conversations and
						building a community that values authenticity, creativity, and continuous learning.
					</p>
				</div>
			</Card>
		</div>
	</div>
</Section>

<!-- Values Section -->
<Section>
	<div class="mb-20">
		<SectionHeading className="text-center">What We Stand For</SectionHeading>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<Card className="bg-background transition-all hover:shadow-xl mx-auto">
				<div class="flex flex-col items-center gap-4 text-center">
					<div class="flex-center size-14 rounded-full bg-accent">
						<Sparkles class="text-foreground" size={28} />
					</div>
					<h3 class="text-xl font-semibold">Quality Content</h3>
					<p class="text-sm text-foreground-muted">
						We prioritize well-researched, thoughtfully written articles that provide real value to
						our readers.
					</p>
				</div>
			</Card>

			<Card className="bg-background transition-all hover:shadow-xl mx-auto">
				<div class="flex flex-col items-center gap-4 text-center">
					<div class="flex-center size-14 rounded-full bg-accent">
						<Users class="text-foreground" size={28} />
					</div>
					<h3 class="text-xl font-semibold">Community First</h3>
					<p class="text-sm text-foreground-muted">
						Our readers and writers are at the heart of everything we do. We foster a supportive and
						inclusive environment.
					</p>
				</div>
			</Card>

			<Card className="bg-background transition-all hover:shadow-xl mx-auto">
				<div class="flex flex-col items-center gap-4 text-center">
					<div class="flex-center size-14 rounded-full bg-accent">
						<Heart class="text-foreground" size={28} />
					</div>
					<h3 class="text-xl font-semibold">Authenticity</h3>
					<p class="text-sm text-foreground-muted">
						We celebrate genuine voices and original perspectives. Every story shared here is real
						and heartfelt.
					</p>
				</div>
			</Card>

			<Card className="bg-background transition-all hover:shadow-xl mx-auto">
				<div class="flex flex-col items-center gap-4 text-center">
					<div class="flex-center size-14 rounded-full bg-accent">
						<Code class="text-foreground" size={28} />
					</div>
					<h3 class="text-xl font-semibold">Innovation</h3>
					<p class="text-sm text-foreground-muted">
						We embrace new technologies and creative approaches to storytelling and content
						delivery.
					</p>
				</div>
			</Card>

			<Card className="bg-background transition-all hover:shadow-xl mx-auto">
				<div class="flex flex-col items-center gap-4 text-center">
					<div class="flex-center size-14 rounded-full bg-accent">
						<Pen class="text-foreground" size={28} />
					</div>
					<h3 class="text-xl font-semibold">Creative Freedom</h3>
					<p class="text-sm text-foreground-muted">
						Writers have the freedom to explore topics they're passionate about and express
						themselves authentically.
					</p>
				</div>
			</Card>

			<Card className="bg-background transition-all hover:shadow-xl mx-auto">
				<div class="flex flex-col items-center gap-4 text-center">
					<div class="flex-center size-14 rounded-full bg-accent">
						<Globe class="text-foreground" size={28} />
					</div>
					<h3 class="text-xl font-semibold">Global Reach</h3>
					<p class="text-sm text-foreground-muted">
						We connect people across borders, cultures, and backgrounds through the universal
						language of storytelling.
					</p>
				</div>
			</Card>
		</div>
	</div>
</Section>

<!-- Story Section -->
<Section>
	<div class="mb-20">
		<SectionHeading className="text-center">Our Story</SectionHeading>
		<div class="mx-auto max-w-4xl space-y-6 text-foreground-muted">
			<p class="text-lg leading-relaxed">
				What started as a simple idea to share knowledge has grown into a thriving community of
				passionate writers and engaged readers. Our journey began with the belief that everyone has
				a story worth telling and knowledge worth sharing.
			</p>
			<p class="text-lg leading-relaxed">
				Today, we're proud to host thousands of articles across diverse topics—from technology and
				science to arts, culture, and personal development. Each piece reflects the unique voice of
				its author and contributes to the rich tapestry of perspectives that makes our platform
				special.
			</p>
		</div>
	</div>
</Section>

<!-- CTA Section -->
<Section>
	<div class="rounded-primary bg-accent/50 p-12 text-center">
		<div class="mx-auto max-w-2xl">
			<div class="mb-6 flex justify-center">
				<div class="flex-center size-20 rounded-full bg-btn-default-background">
					<BookOpen class="text-btn-default-foreground" size={40} />
				</div>
			</div>
			<h2 class="mb-4 text-3xl font-bold italic">Join Our Community</h2>
			<p class="mb-8 text-lg text-foreground-muted">
				Whether you're a writer looking to share your voice or a reader seeking inspiration, there's
				a place for you here. Start your journey with us today.
			</p>
			<div class="flex flex-wrap items-center justify-center gap-4">
				<a href="/blogs">
					<Button variant="default" className="gap-2">
						<BookOpen size={20} />
						Explore Blogs
					</Button>
				</a>
				<a href="/register">
					<Button variant="outline" className="gap-2">
						<Pen size={20} />
						Start Writing
					</Button>
				</a>
			</div>
		</div>
	</div>
</Section>
