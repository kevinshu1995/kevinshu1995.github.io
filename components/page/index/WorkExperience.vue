<template>
	<ul class="list-connect-noDot space-y-7 lg:space-y-6">
		<li
			v-for="(content, index) in contents"
			:key="`experience-${index}`"
			class="grid grid-cols-12 items-start relative group"
		>
			<div
				class="dot group relative col-start-1 col-span-1 row-start-1 row-span-2"
			>
				<div
					class="relative z-20 w-6 h-6 bg-white border-4 rounded-full transition-all"
					:class="
						index === 0
							? 'border-primaryYellow-500'
							: 'border-gray-400 group-hover:border-primaryYellow-300'
					"
				></div>
				<div
					class="absolute z-10 top-0 left-0 w-6 h-6 bg-primaryYellow-600 rounded-full transition-all hidden group-hover:block group-hover:animate-ping"
				></div>
			</div>
			<p
				class="whitespace-nowrap col-start-3 md:col-start-2 col-span-10 md:col-span-2 row-start-1 font-medium mb-1 lg:mb-0"
				:class="
					index !== 0
						? 'text-gray-400 group-hover:text-gray-500 transition-all'
						: 'text-gray-400'
				"
			>
				{{ content.time.start }} -
				{{ content.time.end }}
			</p>
			<div
				class="flex flex-col col-start-3 md:col-start-2 lg:col-start-4 col-end-13 row-start-2 lg:row-start-1"
				:class="
					index !== 0
						? 'text-gray-400 group-hover:text-dark transition-all'
						: ''
				"
			>
				<h4 class="whitespace-nowrap">
					<span class="text-base sm:text-lg">
						{{ content.jobTitle }}
					</span>
					<span class="text-base">
						{{ content.company }}
					</span>
				</h4>
				<template
					v-for="(text, descriptionIndex) in content.description"
				>
					<p
						v-if="typeof text === 'string'"
						:key="`experience-paraphrase-${descriptionIndex}`"
					>
						{{ text }}
					</p>
					<ol
						v-if="Array.isArray(text)"
						:key="`experience-paraphrase-${descriptionIndex}`"
						class="list-decimal pl-4"
					>
						<li
							v-for="(list, listIndex) in text"
							:key="`experience-list-${listIndex}`"
						>
							{{ list }}
						</li>
					</ol>
				</template>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'WorkExperience',
	props: {
		contents: {
			type: Array,
			required: true,
		},
	},
}
</script>
