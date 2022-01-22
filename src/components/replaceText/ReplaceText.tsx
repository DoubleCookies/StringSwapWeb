import React from "react";

interface MyState {
  startValue: string,
  finishValue: string,
  replaceStart: string,
  replaceFinish: string
}

class ReplaceText extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      startValue: '',
      replaceStart: '',
      replaceFinish: '',
      finishValue: ''
    };
  }

  render() {
    const {replaceStart, replaceFinish} = this.state;
    return (
      <form>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <label className="form-label">
              Исходный текст
            </label>
            <textarea className="form-text-area"
                      placeholder="Введите текст для замены"
                      onChange={this.updateStartValue.bind(this)}
                      rows={10}/>
            <div style={{ margin: 10 }}>
              <label>Что</label>
              <input className="form-input"
                     onChange={this.handleReplaceStart.bind(this)}
                     type="text"
                     value={replaceStart}/>
              <br/>
              <label>На что</label>
              <input className="form-input"
                     onChange={this.handleReplaceFinish.bind(this)}
                     type="text"
                     value={replaceFinish}/>
            </div>
          </div>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <label className="form-label">
              Результат
            </label>
            <textarea className="form-text-area" value={this.state.finishValue} readOnly={true} rows={10}/>
          </div>
        </div>
      </form>
    );
  }

  private async updateStartValue(event: any) {
    await this.setState({
      startValue: event.target.value
    });
    this.replaceText();

  }

  private async handleReplaceStart(event: any) {
    await this.setState({
      replaceStart: event.target.value
    });
    this.replaceText();
  }

  private async handleReplaceFinish(event: any) {
    await this.setState({
      replaceFinish: event.target.value
    });
    this.replaceText();
  }

  private replaceText() {
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
}

export default ReplaceText;