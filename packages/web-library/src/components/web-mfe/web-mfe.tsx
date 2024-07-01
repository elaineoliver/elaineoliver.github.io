import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'web-mfe',
  styleUrl: 'web-mfe.scss',
  shadow: true,
})
export class WebMfe {
  @State() windmillData?: {
    id: string,
    capacity: number,
    efficiency: number
  }[]

  connectedCallback() {
    fetch(`https://api.domain.com/windmills`, {
      method: "GET"
    }).then(response => response.json()).then(data => (this.windmillData = data))
  }
  
  render() {
    return (
      <Host>
        <ul>
          {this.windmillData?.map(windmill => {
            return (
              <li>
                <h2>
                  Windmill {windmill.id}
                </h2>
                <p>
                  Estimated output: {365 * 24 * windmill.capacity * windmill.efficiency} kilowatt hours per year
                </p>
                <web-button>More details</web-button>
              </li>
            )
          })}
        </ul>
      </Host>
    );
  }
}
