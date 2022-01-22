import React from "react";

interface MyProps {

}

interface MyState {
  startValue: string,
  finishValue: string
}

class NavboxGenerator extends React.Component<MyProps, MyState> {
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

  private updateStartValue(event: any) {
    this.setState({
      startValue: event.target.value
    });
    setTimeout(this.replaceText.bind(this), 10);
  }

  private replaceText() {
    const { startValue } = this.state;
    let resultString = startValue + '1';
    this.setState({
      finishValue: resultString
    })
  }
}

export default NavboxGenerator;