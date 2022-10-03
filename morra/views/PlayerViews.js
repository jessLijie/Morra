import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ZERO')}
        >ZERO</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ONE')}
        >ONE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('TWO')}
        >TWO</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('THREE')}
        >THREE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('FOUR')}
        >FOUR</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('FIVE')}
        >FIVE</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ZERO')}
        >ZERO</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ONE')}
        >ONE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('TWO')}
        >TWO</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('THREE')}
        >THREE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('FOUR')}
        >FOUR</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('FIVE')}
        >FIVE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('SIX')}
        >SIX</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('SEVEN')}
        >SEVEN</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('EIGHT')}
        >EIGHT</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('NINE')}
        >NINE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('TEN')}
        >TEN</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;