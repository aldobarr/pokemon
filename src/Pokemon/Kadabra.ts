import Move from "../Move";
import Pokemon, { Stats } from "../Pokemon";
import { StatusCondition } from "../StatusCondition";
import Type from "../Type";
import Psychic from "../Types/Psychic";

export default class Kadabra extends Pokemon {
	constructor(level: number, stats: Stats, status: StatusCondition) {
		super(new Psychic(), new Type(), level, stats, status);
	}

	isStab(move: Move): boolean {
		return move.getType() instanceof Psychic;
	}
}
