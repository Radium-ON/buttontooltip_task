import { defineComponent } from "vue";
import VMainLayout from "@/components/v-main-layout";
export default defineComponent({
	name: "app",
	components: { "v-main-layout": VMainLayout },
	setup() {
		return {};
	},
});