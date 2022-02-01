import React from "react";
import StartTextLabel from "../StartTextLabel";
import ResultLabel from "../ResultLabel";
import CustomLabel from "../CustomLabel";

interface MyProps {
  description: string
}

interface MyState {
  startValue: string,
  prefix: string,
  finishValue: string
}

class AddPrefix extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      startValue: '',
      prefix: '',
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
                      placeholder="1.jpg&#10;2.jpg&#10;3.jpg"
                      onChange={this.updateStartValue.bind(this)}
                      rows={10}
            />
            <div style={{ margin: 10 }}>
              <CustomLabel name="prefix"/>
              <input className="form-input"
                     placeholder="file:"
                     onChange={this.updatePrefix.bind(this)}
                     type="text"
              />
            </div>
          </div>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <ResultLabel/>
            <textarea className="form-text-area"
                      placeholder="file:1.jpg&#10;file:2.jpg&#10;file:3.jpg"
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

  private async updatePrefix(event: any) {
    await this.setState({
      prefix: event.target.value
    });
    this.replaceText();
  }

  private replaceText() {
    const { startValue, prefix } = this.state;
    if (prefix) {
      let resultString = '';
      const stringArray = startValue.split('\n');
      for (const str of stringArray) {
        resultString += prefix + str + "\n";
      }
      this.setState({
        finishValue: resultString
      })
    } else {
      return;
    }
  }
}

export default AddPrefix;