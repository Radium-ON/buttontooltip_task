import { useCounterStore } from '@/stores/counter';
import { defineComponent } from "vue";

export default defineComponent({
	name:'main-layout',
	setup(){
		const counter = useCounterStore();
		return{counter};
	}
})