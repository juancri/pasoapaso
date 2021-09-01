
import { BooleanEntity, EntityGroup } from "../types";

export default function createBooleanEntityGroup(name: string, trueValue = 'Sí', falseValue = 'No'): EntityGroup<BooleanEntity>
{
	return {
		name,
		entities: [
			{ name: trueValue, value: true },
			{ name: falseValue, value: false }
		]
	};
}
