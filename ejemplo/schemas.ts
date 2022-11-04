import { ObjectID } from "mongo";
import { Car } from "../types";

export type CarSchema = Car & {_id: ObjectID};