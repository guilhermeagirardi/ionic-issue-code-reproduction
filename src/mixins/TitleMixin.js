export default {
	name: "TitleMixin",

	watch: {
		$route: {
			immediate: true,
			handler(to) {
				document.title = to.meta.title;
			}
		},
	}
}
