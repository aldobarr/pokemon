import Type from "../Type";
import Bug from "./Bug";
import Dark from "./Dark";
import Fairy from "./Fairy";
import Flying from "./Flying";
import Ghost from "./Ghost";
import Ice from "./Ice";
import Normal from "./Normal";
import Poison from "./Poison";
import Psychic from "./Psychic";
import Rock from "./Rock";
import Steel from "./Steel";

export default class Fighting extends Type {
	multiplier(type: Type) {
		if (type instanceof Bug) {
			return 0.5;
		} else if (type instanceof Fairy) {
			return 0.5;
		} else if (type instanceof Flying) {
			return 0.5;
		} else if (type instanceof Poison) {
			return 0.5;
		} else if (type instanceof Psychic) {
			return 0.5;
		} else if (type instanceof Dark) {
			return 2;
		} else if (type instanceof Ice) {
			return 2;
		} else if (type instanceof Normal) {
			return 2;
		} else if (type instanceof Rock) {
			return 2;
		} else if (type instanceof Steel) {
			return 2;
		} else if (type instanceof Ghost) {
			return 0;
		}

		return 1;
	}
}
