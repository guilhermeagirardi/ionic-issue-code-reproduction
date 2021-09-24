<template>
	<ion-select
		@ionChange="$emit('change', $event.target.value)"
		:cancel-text="'Cancel'"
		:value="value"
	>
		<slot></slot>
	</ion-select>
</template>

<script>
	//Componentes Ionic
	import {IonSelect} from "@ionic/vue";

	export default {
		name: "CustomSelect",

		model: {
			prop: 'value',
			event: 'change'
		},

		props: {
			value: [String]
		},

		components: {
			IonSelect
		}
	}
</script>
