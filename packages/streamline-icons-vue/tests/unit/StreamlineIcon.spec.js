import { render } from '@vue/server-test-utils'
import { shallowMount, mount } from '@vue/test-utils'
import StreamlineIcon from '@/components/StreamlineIcon.vue'

const icons = {
  TouchIdLock: ['touch-id-lock', 24, 24, [{
    fill: 'none',
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5'
  }, {
    fill: 'none',
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5'
  }, {
    fill: 'none',
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5'
  }, {
    fill: 'none',
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5'
  }, {
    fill: 'none',
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5'
  }, {
    fill: 'none',
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5'
  }, {
    fill: 'none',
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5'
  }, {
    fill: 'none',
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5'
  }, {
    fill: 'none',
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5'
  }, {
    fill: 'none',
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5'
  }], ['M12,1.753A7.5,7.5,0,0,0,.75,8.25', 'M15.75,8.25a7.478,7.478,0,0,0-.624-3', 'M8.25,23.25a7.563,7.563,0,0,0,1.5-.15', 'M.75,12.75v3a7.5,7.5,0,0,0,4.5,6.876', 'M12.75,12.75V8.25A4.5,4.5,0,0,0,6,4.352', 'M3.75,8.25v7.5a4.5,4.5,0,0,0,6,4.244', 'M6.75,15.75a1.5,1.5,0,0,0,3,0V8.25a1.5,1.5,0,0,0-3,0v3', 'M14.250 15.750 L23.250 15.750 L23.250 23.250 L14.250 23.250 Z', 'M18.75,11.25h0a3,3,0,0,0-3,3v1.5h6v-1.5A3,3,0,0,0,18.75,11.25Z', 'M18.75,19.154a.375.375,0,1,1-.375.375.375.375,0,0,1,.375-.375']]
}

describe('StreamlineIcon.vue', () => {
  it('renders without crashing', () => {
    const wrapper = shallowMount(StreamlineIcon, {
      propsData: {
        icon: icons.TouchIdLock
      }
    })
  })

  it('Testing Snapshots', () => {
    const wrapper = shallowMount(StreamlineIcon, {
      propsData: {
        icon: icons.TouchIdLock,
        stroke: '#000'
      }
    })

    expect(wrapper).toMatchSnapshot();

  });

  it('Contain SVG Node', () => {
    const wrapper = shallowMount(StreamlineIcon, {
      propsData: {
        icon: icons.TouchIdLock
      }
    })
    expect(wrapper.find('svg')).toBeTruthy();
  });

  it('Is colored correctly', () => {
    let shallow = new Shallow(StreamlineIcon)
    const color = '#ff6e61';
    const wrapper = mount(StreamlineIcon, {
      propsData: {
        icon: icons.TouchIdLock,
        stroke: color
      }
    })
    expect(wrapper.find('path').attributes('stroke')).toBe(color);

  })
})
