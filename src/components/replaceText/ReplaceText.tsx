import React from "react";

interface MyProps {

}

interface MyState {
  startValue: string,
  finishValue: string,
  replaceStart: string,
  replaceFinish: string
}


class ReplaceText extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      startValue: '',
      replaceStart: '',
      replaceFinish: '',
      finishValue: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: any) {
    this.setState({
      finishValue: this.state.startValue.toUpperCase()
    });
    event.preventDefault();
  }

  replaceText() {
    const { startValue, replaceStart, replaceFinish } = this.state;
    if (replaceStart) {
      const resultString = startValue.replaceAll(replaceStart, replaceFinish);
      this.setState({
        finishValue: resultString
      })
    } else {
      return;
    }
  }

  updateStartValue(event: any) {
    this.setState({
      startValue: event.target.value
    });
    setTimeout(this.replaceText.bind(this), 10);
  }

  handleReplaceStart(event: any) {
    this.setState({
      replaceStart: event.target.value
    });
    setTimeout(this.replaceText.bind(this), 10);
  }

  handleReplaceFinish(event: any) {
    this.setState({
      replaceFinish: event.target.value
    });
    setTimeout(this.replaceText.bind(this), 10);
  }

  render() {
    return (
      <form>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <label className="form-label">
              Текст для замены:
            </label>
            <textarea className="form-text-area"
                      placeholder="Введите текст для замены"
                      onChange={this.updateStartValue.bind(this)}
                      rows={10}/>
            <div style={{ margin: 10 }}>
              <label>Что</label>
              <input className="process-button"
                     onChange={this.handleReplaceStart.bind(this)}
                     type="text"
                     value={this.state.replaceStart}/>
              <br/>
              <label>На что</label>
              <input className="process-button"
                     onChange={this.handleReplaceFinish.bind(this)}
                     type="text"
                     value={this.state.replaceFinish}/>
            </div>
          </div>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <label className="form-label">
              Результат:
            </label>
            <textarea className="form-text-area" value={this.state.finishValue} readOnly={true} rows={10}/>
          </div>
        </div>
      </form>
    );
  }
}

export default ReplaceText;