import React from "react";
import StartTextLabel from "../StartTextLabel";
import ResultLabel from "../ResultLabel";
import CustomLabel from "../CustomLabel";

interface MyProps {
  description: string
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
  }

  render() {
    const { description } = this.props;
    const { finishValue } = this.state;
    return (
      <form>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <StartTextLabel/>
            <textarea className="form-text-area"
                      placeholder="qwertyuiop"
                      onChange={this.updateStartValue.bind(this)}
                      rows={10}
            />
            <div style={{ margin: 10 }}>
              <CustomLabel name="find"/>
              <input className="form-input"
                     placeholder="uiop"
                     onChange={this.handleReplaceStart.bind(this)}
                     type="text"
              />
              <br/>
              <CustomLabel name="replaceWith"/>
              <input className="form-input"
                     placeholder="Asdf"
                     onChange={this.handleReplaceFinish.bind(this)}
                     type="text"
              />
            </div>
          </div>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <ResultLabel/>
            <textarea className="form-text-area"
                      placeholder="qwertyAsdf"
                      value={finishValue}
                      readOnly={true}
                      rows={10}
            />
          </div>
        </div>
        <hr className="gradient-border"/>
        {description}
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