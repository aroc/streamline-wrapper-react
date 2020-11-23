import React from 'react'
import StreamlineIcon from '@streamlinehq/streamline-wrapper-react'
import HouseIcon from './icon'

const IconsList = () => (
  <main>
    <h1>
      Streamline icons React example
    </h1>
    <section>
      <figure>
        <figcaption>Default props </figcaption>
        <code>{`<StreamlineIcon icon={HouseIcon}/>`} </code>
        <StreamlineIcon icon={HouseIcon}/>
      </figure>
      <figure>
        <figcaption>
          To spin once
        </figcaption>
        <code>{`<StreamlineIcon icon={HouseIcon} spin/>`} </code>
        <StreamlineIcon icon={HouseIcon} spin/>
      </figure>
      <figure>
        <figcaption>
          Infinite spin
        </figcaption>
        <code>{`<StreamlineIcon icon={HouseIcon} spin infinite/>`} </code>
        <StreamlineIcon icon={HouseIcon} spin infinite/>
      </figure>
      <figure>
        <figcaption>
          Fast infinite spin
        </figcaption>
        <code>{`<StreamlineIcon icon={HouseIcon} spin infinite fast/>`} </code>
        <StreamlineIcon icon={HouseIcon} spin infinite fast/>
      </figure>
      <figure>
        <figcaption>
          Fast infinite spin with different speed
        </figcaption>
        <code>{`<StreamlineIcon icon={HouseIcon} spin infinite fast easeInOut/>`} </code>
        <StreamlineIcon icon={HouseIcon} spin infinite fast easeInOut/>
      </figure>
      <figure>
        <figcaption>
          Custom size
        </figcaption>
        <code>{`<StreamlineIcon icon={HouseIcon} size={48}/>`} </code>
        <StreamlineIcon icon={HouseIcon} size={48}/>
      </figure>
      <figure>
        <figcaption>
          Custom width and height
        </figcaption>
        <code>{`<StreamlineIcon icon={HouseIcon} width={64} height={32}/>`} </code>
        <StreamlineIcon icon={HouseIcon} width={64} height={32}/>
      </figure>
      <figure>
        <figcaption>
          Custom class with <i>vertical-align: middle</i>
        </figcaption>
        <code>{`<StreamlineIcon icon={HouseIcon} customClassName="verticalAlign"/>`} </code>
        <StreamlineIcon icon={HouseIcon} customClassName="verticalAlign"/>
      </figure>
    </section>
  </main>
)

export default IconsList
