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
        <div>
          {this.windmillData?.map(windmill => {
            return (
              <web-box variant={windmill.id === "10" ? "primary" : "secondary"}>
                <section>
                  <h3>
                    Windmill {windmill.id}
                  </h3>
                  <p>
                    Estimated output: {365 * 24 * windmill.capacity * windmill.efficiency} kilowatt hours per year
                  </p>
                  <web-button variant={windmill.id === "10" ? "on-primary" : "on-secondary"}>More details</web-button>
                </section>
              </web-box>
            )
          })}
        </div>
      </Host>
    );
  }
}
