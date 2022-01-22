import React from "react";

interface MyProps {

}

interface MyState {
  startValue: string,
  finishValue: string
}

class QuoteReplacement extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      startValue: '',
      finishValue: ''
    };
  }

  render() {
    const {finishValue} = this.state;
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
          </div>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <label className="form-label">
              Результат:
            </label>
            <textarea className="form-text-area" value={finishValue} readOnly={true} rows={10}/>
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

  private replaceText() {
    const { startValue } = this.state;
    let resultString = startValue;
    let startQuote = true;
    if (!startValue) {
      return
    }
    while (resultString.indexOf('"') > -1) {
      resultString = resultString.replace('"', startQuote ? '«' : '»');
      startQuote = !startQuote;
    }
    this.setState({
      finishValue: resultString
    })
  }
}

export default QuoteReplacement;