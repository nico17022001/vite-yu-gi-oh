import {reactive} from 'vue'

export const store = reactive({
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  listaCarte:[],
  arrayFull:[],
  arrayType:[
    'Effect Monster',
    'Flip Effect Monster',
    'Fusion Monster',
    'Gemini Monster',
    'Link Monster',
    'Normal Monster',
    'Normal Tuner Monster',
    'Pendulum Effect Fusion Monster',
    'Pendulum Effect Monster',
    'Pendulum Effect Ritual Monster',
    'Pendulum Flip Effect Monster',
    'Pendulum Normal Monster',
    'Pendulum Tuner Effect Monster',
    'Ritual Monster',
    'Skill Card',
    'Spell card',
    'Spirit monster',
    'Synchro Monster',
    'Synchro Pendulum Effect Monster',
    'Synchro Tuner Monster',
    'Token',
    'Toon Monster',
    'Trap Card',
    'Tuner Monster',
    'Union Effect Monster',
    'XYZ Monster',
    'XYZ Pendulum Effect Monster',
  ],

  cardType: null,


})