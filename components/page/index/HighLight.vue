<template>
	<ul class="list-connect hover-animate space-y-4">
		<li
			v-for="(event, index) in highlight"
			:key="`skill-${index}`"
			class="whitespace-nowrap"
		>
			<a
				:href="event.href"
				target="_blank"
				class="group inline-flex flex-col space-y-1 whitespace-normal text-current transition-all"
			>
				<div class="text-left space-x-4">
					<span class="text-gray-700"> {{ event.time }} </span>
					<Badge
						v-if="event.status"
						:content="event.status.description"
						:variant="event.status.variant"
						:custom-classes="[
							'px-2.5',
							'font-normal',
							'text-sm',
							'tracking-wider',
							'rounded-full',
						]"
					/>
				</div>
				<OutsiteLink :name="event.title" />
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		highlight: {
			type: Array,
			required: true,
		},
	},
}
</script>
