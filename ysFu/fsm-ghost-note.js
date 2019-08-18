var StateMachine = require('javascript-state-machine');
var rudiment = new StateMachine({
    init: 'WLLL',
    transitions: [
      { name: 'symmetry',  from: 'WLLL',  to: 'LWLL' },
      { name: 'symmetry',  from: 'LXXXXL',  to: 'RXXXXR' },
      { name: 'nonsymmetry', from: 'RXXXXR', to: 'LXXXXR' },
      { name: 'nonsymmetry', from: 'LXXXXL', to: 'RXXXXL' }
    ]
  });

console.log(rudiment.state);
rudiment.symmetry();
console.log(rudiment.state);
rudiment.nonsymmetry();
console.log(rudiment.state);

console.log(rudiment.allTransitions());
console.log(rudiment.allStates());
