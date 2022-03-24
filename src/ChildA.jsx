import React from 'react';
import useStore from './store';

function ChildA() {
  console.log('Child A rendering');
  const countA = useStore(state => state.countA);

  return (
    <div className="mt-50">
      <h3>Child A</h3>
      <div>
        <div>Count A: {countA}</div>
      </div>
    </div>
  );
}

export default React.memo(ChildA);
