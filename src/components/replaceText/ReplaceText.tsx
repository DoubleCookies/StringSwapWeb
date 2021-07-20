import React from "react";

interface MyProps {

}

interface MyState {
  startValue: string,
  finishValue: string
}


class ReplaceText extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      startValue: 'Введите текст...',
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

  handleOnChange(event: any) {
    this.setState({
      startValue: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleOnChange.bind(this)}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{flexDirection: 'column', flexBasis: '50%'}}>
            <label className="form-label">
              Текст для замены:
            </label>
            <textarea className="form-text-area" defaultValue={this.state.startValue} rows={10}/>
            <input className="process-button" type="submit" value="Заменить"/>
          </div>
          <div style={{flexDirection: 'column', flexBasis: '50%'}}>
            <label className="form-label">
              Результат:
            </label>
            <textarea className="form-text-area" value={this.state.finishValue} readOnly={true} rows={10} />
          </div>
        </div>
      </form>
    );
  }
}

export default ReplaceText;