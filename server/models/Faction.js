import { Schema, model } from 'mongoose';

const factionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
    },
    icon: {
      type: String,
      required: true,
      max_length: 50,
  },
},
  {
    toJSON: {
      getters: true,
    },
  }
);

const Faction = model('faction', factionSchema);

export default Faction;