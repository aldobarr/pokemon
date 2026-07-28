import Type from "../Type";
import Ghost from "./Ghost";
import Rock from "./Rock";
import Steel from "./Steel";

export default class Normal extends Type {
	multiplier(type: Type) {
		if (type instanceof Rock) {
			return 0.5;
		} else if (type instanceof Steel) {
			return 0.5;
		} else if (type instanceof Ghost) {
			return 0;
		}

		return 1;
	}
}
