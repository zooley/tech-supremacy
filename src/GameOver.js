import React, { Component } from 'react';


export class GameOver extends Component {
  render() {
    return (
      <div className="app d-flex flex-column">
        <header className="app-header shadow-sm rounded-bottom d-flex">
          <h1 className="sr-only visually-hidden">Tech Sumpremacy</h1>
          <div className="app-stage flex-fill">
            <h2 className="app-head">
              Game End
            </h2>
          </div>
        </header>
        <main className="app-main d-flex">
          Game stats here.
        </main>
      </div>
        );
    }
}
