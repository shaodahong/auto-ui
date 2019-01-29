import * as React from 'react';
import { Cell, Layout, Radio } from '../aotuui';

class Demo extends React.PureComponent {
  public state = { checked: true };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Cell>
            <Cell.Row>
              <Radio checked={this.state.checked} onChange={this.onChange} text="同意什么什么协议" />
            </Cell.Row>
            <Cell.Row>
              <Radio checked={this.state.checked} onChange={this.onChange} text="另一个什么什么协议" />
            </Cell.Row>
          </Cell>
        </Layout.Body>
      </Layout>
    );
  }

  private onChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  }
}

export default Demo;
