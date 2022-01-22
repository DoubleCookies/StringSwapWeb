import React from "react";

interface MyProps {

}

interface MyState {
  name: string,
  startNumber: number,
  finishNumber: number,
  extension: string,
  finishValue: string
}

class GalleryGenerator extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: '',
      startNumber: 0,
      finishNumber: 0,
      extension: '',
      finishValue: ''
    };
  }

  render() {
    const {name, extension, finishValue} = this.state;
    return (
      <form>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <div style={{ marginTop: 28 }}>
              <label>Название</label>
              <input className="form-input"
                     onChange={this.updateName.bind(this)}
                     type="text"
                     value={name}/>
              <br/>
              <label>Старт. номер</label>
              <input className="form-input"
                     onChange={this.updateStartNumber.bind(this)}
                     type="text"
              />
              <br/>
              <label>Фин. номер</label>
              <input className="form-input"
                     onChange={this.updateFinishNumber.bind(this)}
                     type="text"
              />
              <br/>
              <label>Расширение</label>
              <input className="form-input"
                     onChange={this.updateExtension.bind(this)}
                     type="text"
                     value={extension}/>
            </div>
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

  private async updateName(event: any) {
    await this.setState({
      name: event.target.value
    });
    this.replaceText();
  }

  private async updateStartNumber(event: any) {
    this.setState({
      startNumber: event.target.value
    });
    this.replaceText();
  }

  private async updateFinishNumber(event: any) {
    await this.setState({
      finishNumber: event.target.value
    });
    this.replaceText();
  }

  private async updateExtension(event: any) {
    await this.setState({
      extension: event.target.value
    });
    this.replaceText();
  }

  private replaceText() {
    const { name, startNumber, finishNumber, extension } = this.state;
    if (name.length === 0 || !startNumber || !finishNumber || extension.length === 0) {
      return;
    }
    let resultString = '';
    for (let i = startNumber; i < finishNumber; i++) {
      resultString += name.trim() + ' ' + i + '.' + extension + '\n';
    }
    this.setState({
      finishValue: resultString
    })
  }
}

export default GalleryGenerator;