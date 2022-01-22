import React from "react";

interface MyState {
  startValue: string,
  finishValue: string
}

class NavboxGenerator extends React.Component<{}, MyState> {
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
              Результат
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
    const stringsArray = startValue.split('\n').filter(item => item.length > 0);
    let resultString = '';
    for (const str of stringsArray) {
      resultString += '[[' + str + ']] • ';
    }
    resultString = resultString.substring(0, resultString.length - 3);
    this.setState({
      finishValue: resultString
    })
  }
}

export default NavboxGenerator;