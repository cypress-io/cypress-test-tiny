import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div data-gramm="true" role="textbox" data-focused="false" class="sc-1xfeir6-0 iUCbfO" data-slate-editor="true" data-slate-node="value" contenteditable="true">
          <p data-slate-node="element" class="sc-1np3d91-0 ivefX">
            <span class="_2uQVzRVYxVRvoepzKbpG _27eq6mvv5A_ciOXOOJBZ _2sb2vBb7GnmystVlWi0e" data-snippet-id="a909e652-c1f0-4aea-8035-94de305cf364" data-cy="Insights-NoteEditor-Snippet">
              <span data-slate-node="text">
                <span data-slate-leaf="true" class="sc-15s2pbn-0 ejYPAK">
                  <span data-slate-string="true">
                    khjbhjjhkblb
                  </span>
                </span>
              </span>
            </span>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;


/*let debouncedPopupCloseTimeoutId = null;

type ConnectedProps = {
  isActivePersisted: boolean; // persisted (added) snippet that's active
  isTemporary: boolean; // snippet being added (not yet saved)
  snippetId: number;
  noteId: number;
  popupOpened: boolean;
  popupFixed: boolean; // popup fixed after click on snippet (won't hide on mouseleave)
};

const Snippet = {
  persistPopup() {
    if (debouncedPopupCloseTimeoutId) {
      window.clearTimeout(debouncedPopupCloseTimeoutId);
      debouncedPopupCloseTimeoutId = null;
    }
  },

  render() {
    const { children, snippetId } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <span
            className={'snippet'}
            onClick={this.onClick}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            {...{ [SNIPPET_ID_ATTRIBUTE]: snippetId }}
          >
            {children}
          </span>
        </header>
      </div>
    );
  }
}


<Slate editor={editor} value={value} onChange={setValue}>
          <Editable
            onKeyDown={handleKeyDown}
            renderElement={renderElementIncludeSnippet}
            renderLeaf={renderLeaf}
            style={EDITABLE_STYLE}
            onMouseDown={inlineSnippetProps.onMouseDown}
          />

*/