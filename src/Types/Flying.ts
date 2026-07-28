import Type from "../Type";
import Bug from "./Bug";
import Electric from "./Electric";
import Fighting from "./Fighting";
import Grass from "./Grass";
import Rock from "./Rock";
import Steel from "./Steel";

export default class Flying extends Type {
	multiplier(type: Type) {
		if (type instanceof Electric) {
			return 0.5;
		} else if (type instanceof Rock) {
			return 0.5;
		} else if (type instanceof Steel) {
			return 0.5;
		} else if (type instanceof Bug) {
			return 2;
		} else if (type instanceof Fighting) {
			return 2;
		} else if (type instanceof Grass) {
			return 2;
		}

		return 1;
	}
}
