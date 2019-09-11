import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  state = {};

  render() {
    return (
      <div
        id="contenteditable"
        onInput={this.emitChange}
        onBlur={this.emitChange}
        contentEditable
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      />
    );
  }

  shouldComponentUpdate(nextProps) {
    console.log('should');

    return nextProps.html !== ReactDOM.findDOMNode(this).innerHTML;
  }

  componentDidUpdate() {
    console.log('did');

    if (this.props.html !== ReactDOM.findDOMNode(this).innerHTML) {
      ReactDOM.findDOMNode(this).innerHTML = this.props.html;
    }
  }

  emitChange = () => {
    // console.log('emit');

    var html = ReactDOM.findDOMNode(this).innerHTML;
    // console.log(html);
    // console.log(this.lastHtml);
    // console.log(this.props.onChange);

    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          value: html
        }
      });
    }
    this.lastHtml = html;
  };
}

export default Test;
