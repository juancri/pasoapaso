import { BooleanEntity, EntityGroup } from "./types";

export function createBooleanEntityGroup(name: string,
	trueValue: string = 'Sí', falseValue: string = 'No'): EntityGroup<BooleanEntity>
{
	return {
		name,
		entities: [
			{ name: trueValue, value: true },
			{ name: falseValue, value: false }
		]
	};
}
