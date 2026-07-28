import Type from "../Type";
import Bug from "./Bug";
import Fighting from "./Fighting";
import Fire from "./Fire";
import Flying from "./Flying";
import Ground from "./Ground";
import Ice from "./Ice";
import Steel from "./Steel";

export default class Rock extends Type {
	multiplier(type: Type) {
		if (type instanceof Fighting) {
			return 0.5;
		} else if (type instanceof Ground) {
			return 0.5;
		} else if (type instanceof Steel) {
			return 0.5;
		} else if (type instanceof Bug) {
			return 2;
		} else if (type instanceof Fire) {
			return 2;
		} else if (type instanceof Flying) {
			return 2;
		} else if (type instanceof Ice) {
			return 2;
		}

		return 1;
	}
}
