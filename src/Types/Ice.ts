import Type from "../Type";
import Dragon from "./Dragon";
import Fire from "./Fire";
import Flying from "./Flying";
import Grass from "./Grass";
import Ground from "./Ground";
import Steel from "./Steel";
import Water from "./Water";

export default class Ice extends Type {
	multiplier(type: Type) {
		if (type instanceof Fire) {
			return 0.5;
		} else if (type instanceof Ice) {
			return 0.5;
		} else if (type instanceof Steel) {
			return 0.5;
		} else if (type instanceof Water) {
			return 0.5;
		} else if (type instanceof Dragon) {
			return 2;
		} else if (type instanceof Flying) {
			return 2;
		} else if (type instanceof Grass) {
			return 2;
		} else if (type instanceof Ground) {
			return 2;
		}

		return 1;
	}
}
