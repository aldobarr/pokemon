import Type from "../Type";
import Dragon from "./Dragon";
import Flying from "./Flying";
import Grass from "./Grass";
import Ground from "./Ground";
import Water from "./Water";

export default class Electric extends Type {
	multiplier(type: Type) {
		if (type instanceof Dragon) {
			return 0.5;
		} else if (type instanceof Electric) {
			return 0.5;
		} else if (type instanceof Grass) {
			return 0.5;
		} else if (type instanceof Flying) {
			return 2;
		} else if (type instanceof Water) {
			return 2;
		} else if (type instanceof Ground) {
			return 0;
		}

		return 1;
	}
}
